import { execSync } from "child_process"
import * as path from "path"
import { EditorView, gutter, GutterMarker, ViewUpdate } from "@codemirror/view"
import { Extension } from "@codemirror/state"
import { editorInfoField, Plugin } from "obsidian"

type GitDiffType = "added" | "modified" | "deleted"
interface LineChanges {
	added: number[]
	modified: number[]
	deleted: number[] // line number i indicates that some line(s) were deleted between lines i-1 and i
}

class GitGutterMarker extends GutterMarker {
	constructor(private types: GitDiffType[]) {
		super()
	}

	toDOM() {
		const marker = document.createElement("div")
		this.types.forEach((type) => {
			marker.classList.add(`git-gutter-marker-${type}`)
		})
		marker.classList.add("git-gutter-marker")
		//   console.log("🟢 toDOM")
		return marker
	}

	eq(other: GitGutterMarker) {
		return this.types.every((type) => other.types.includes(type))
	}
}

export default class GitGutterPlugin extends Plugin {
	//@ts-ignore
	private vaultPath: string = this.app.vault.adapter.basePath
	private cachedDiffs: { [filePath: string]: LineChanges } = {}
	private isUpdateRequired: boolean = false

	private getDiffsForFile(filePath: string): LineChanges {
		return this.cachedDiffs[filePath] ?? { added: [], modified: [], deleted: [] }
	}

	private setDiffsForFile(filePath: string, changes: LineChanges) {
		this.cachedDiffs[filePath] = changes
	}

	private cacheBaseVersion: { [filePath: string]: string } = {}
	
	private getBaseVersion(filePath: string): string|null {
		if (this.cacheBaseVersion[filePath]) return this.cacheBaseVersion[filePath]
		try {
			const baseVersion = execSync(`git show HEAD:"./${filePath}"`, {
				cwd: this.vaultPath,
				encoding: "utf-8",
			}).toString()
			this.cacheBaseVersion[filePath] = baseVersion
			return baseVersion
		} catch (error) {
			return null
		}
	}
	
	private gitGutterExtension(): Extension {
		return gutter({
			lineMarker: (view, line) => {
				// if (!this.isUpdateRequired) return null
				const lineNumber = view.state.doc.lineAt(line.from).number
				// if (view.state.doc.lines <= lineNumber) {
				// 	this.isUpdateRequired = false
				// 	return null
				// }

				const info = view.state.field(editorInfoField)
				const filePath = info.file?.path
				const diffs = this.getDiffsForFile(filePath ?? "")

				const types: GitDiffType[] = []
				if (diffs.added.includes(lineNumber)) types.push("added")
				if (diffs.modified.includes(lineNumber)) types.push("modified")
				if (diffs.deleted.includes(lineNumber)) types.push("deleted")

				if (types.length > 0) {
					return new GitGutterMarker(types)
				}
				return null
			},
			lineMarkerChange: (update) => {
				if (!update.docChanged) {
					return false
				}
				const info = update.view.state.field(editorInfoField)
				const filePath = info.file?.path
				const fileContent = update.view.state.doc.toString()
				if (filePath) {
					const diffs = this.getGitDiff(filePath, fileContent)
					if (diffs) {
						this.setDiffsForFile(filePath, diffs)
						this.isUpdateRequired = true
						return true
					}
				}
				return false
			},
			initialSpacer: () => {
				// console.log("🔴 initialSpacer")
				return new GitGutterMarker([])
			},
			updateSpacer: (spacer) => {
				// console.log("🌌 updateSpacer")
				return spacer
			},
		})
	}
	async onload() {
		this.registerEditorExtension(this.gitGutterExtension())
	}

	/* 
	OLD:
	private getGitDiff(fileAbsPath: string): LineChanges|null {
		console.log("🔵 getGitDiff")
		try {
			const gitDiffOutput = execSync(`git diff --unified=0 --no-color ${fileAbsPath}`, {
				cwd: this.vaultPath,
			})
			const diffLines = gitDiffOutput.toString().split("\n")
			// console.log("diffLines:", diffLines)
			return this.parseDiffNotation(diffLines)
		} catch (error) {
			console.error("Error getting git diff:", error.message)
			return null
		}
	} */

	// NEW: using `diff` (npm package)
	private getGitDiff(filePath: string, currentVersion: string): LineChanges | null {
		const diff = require("diff")
		
		const baseVersion = this.getBaseVersion(filePath)
		if (!baseVersion) return null

		// console.log("baseVersion:")
		// console.log(baseVersion)
		// console.log("currentVersion:")
		// console.log(currentVersion)

		const _diff = diff.createPatch("tmp.txt", baseVersion, currentVersion, "", "", { context: 0 })
		// console.log("diff:")
		// console.log(_diff)
		const diffLines = _diff.split("\n")
		return this.parseDiffNotation(diffLines)
	}

	public parseDiffNotation(diffLines: string[]): LineChanges {
		const result: LineChanges = {
			added: [],
			deleted: [],
			modified: [],
		}

		for (const line of diffLines) {
			const matches = line.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/)
			if (!matches) continue

			// console.log(line)

			const oldStart = parseInt(matches[1])
			const oldLength = matches[2] ? parseInt(matches[2]) : 1
			const newStart = parseInt(matches[3])
			const newLength = matches[4] ? parseInt(matches[4]) : 1

			// Case 1: Deletion
			if (newLength === 0) {
				for (let i = 0; i < oldLength; i++) {
					result.deleted.push(oldStart + i)
				}
				continue
			}

			// Case 2: Addition
			if (oldLength === 0) {
				for (let i = 0; i < newLength; i++) {
					result.added.push(newStart + i)
				}
				continue
			}

			// Case 3: Modification (when oldLength and newLength are both non-zero)
			const modifiedStart = Math.max(oldStart, newStart)
			const modifiedEnd = Math.min(oldStart + oldLength, newStart + newLength)

			// Track modified lines
			for (let i = modifiedStart; i < modifiedEnd; i++) {
				result.modified.push(i)
			}

			// If newLength > oldLength, those extra lines are added
			if (newLength > oldLength) {
				for (let i = oldLength; i < newLength; i++) {
					result.added.push(newStart + i)
				}
			}
		}

		// Sort and remove duplicates
		result.added = [...new Set(result.added)].sort((a, b) => a - b)
		result.deleted = [...new Set(result.deleted)].sort((a, b) => a - b)
		result.modified = [...new Set(result.modified)].sort((a, b) => a - b)

		// console.log("📘parseDiffNotation📘")
		// console.log("🟢 added:", result.added)
		// console.log("🔵 modified:", result.modified)
		// console.log("🔴 deleted:", result.deleted)
		// console.log("📘-----------------📘")

		return result
	}

	onunload() {
		// console.log("unloading")
	}
}
