import {
	App,
	Editor,
	editorInfoField,
	FileSystemAdapter,
	MarkdownPostProcessorContext,
	MarkdownView,
	Plugin,
	PluginSettingTab,
	Setting,
} from "obsidian"
import { simpleGit, SimpleGit, CleanOptions } from "simple-git"
import { EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view"
import { gutter, GutterMarker } from "@codemirror/view"
import { Extension } from "@codemirror/state"
import { spawnSync } from "child_process"
import * as fs from "fs"
import * as path from "path"
import gitDiffParser from "gitdiff-parser"

interface GitGutterSettings {
	enabled: boolean
	decorationType: "all" | "gutter"
	colors: {
		added: string
		modified: string
		deleted: string
	}
}

const DEFAULT_SETTINGS: GitGutterSettings = {
	enabled: true,
	decorationType: "all",
	colors: {
		added: "#28a745",
		modified: "#2188ff",
		deleted: "#cb2431",
	},
}

type GitDiffType = "added" | "modified" | "deleted"
type GitDiff = {
	lineNumber: number
	type: GitDiffType
}

export default class GitGutterPlugin extends Plugin {
	settings: GitGutterSettings
	private decorations: Map<string, HTMLElement[]> = new Map()
	private git: SimpleGit
	//@ts-ignore
	private vaultPath: string = this.app.vault.adapter.basePath
	private absoluteRepoPath: string

	cachedDiffs: { [filePath: string]: GitDiff[] } = {}

	private getDiffsForFile(filePath: string): GitDiff[] {
		return this.cachedDiffs[filePath] ?? []
	}

	private setDiffsForFile(filePath: string, diffs: GitDiff[]) {
		this.cachedDiffs[filePath] = diffs
		console.log(this.cachedDiffs)
	}

	private gutterMarker(type: GitDiffType): GutterMarker {
		const marker = document.createElement("div")
		marker.classList.add("git-gutter-marker")
		marker.classList.add(`git-gutter-marker-${type}`)
		return new (class extends GutterMarker {
			toDOM() {
				return marker
			}
		})()
	}

	private gitGutterExtension(): Extension {
		console.log("gitGutterExtension")
		return gutter({
			lineMarker: (view: EditorView, line: { from: number }): GutterMarker | null => {
				const info = view.state.field(editorInfoField)
				const filePath = info.file?.path
				const diffs = this.getDiffsForFile(filePath ?? "")
				const lineNumber = view.state.doc.lineAt(line.from).number
				const diff = diffs.find((diff) => diff.lineNumber === lineNumber)
				if (diff) {
					return this.gutterMarker(diff.type)
				}
				return null
			},
			lineMarkerChange: (update) => {
				if (update.docChanged) {
					const info = update.view.state.field(editorInfoField)
					const filePath = info.file?.path
					//@ts-ignore
					const vaultPath = info.file?.vault.adapter?.basePath
					const fileAbsPath = path.join(vaultPath, filePath ?? "")
					this.getGitDiff(fileAbsPath)
						.then((diffs) => {
							this.setDiffsForFile(filePath ?? "", diffs)
						})
						.catch((error) => {
							console.error("Error getting diffs:", error)
						})
					return true
				}
				return false
			},
		})
	}

	async onload() {
		console.log("onload")
		await this.loadSettings()
		this.git = simpleGit({
			baseDir: this.vaultPath,
			binary: "git",
		})
		this.addSettingTab(new GitGutterSettingTab(this.app, this))
		this.registerEditorExtension(this.gitGutterExtension())
	}

	private async getGitDiff(fileAbsPath: string): Promise<GitDiff[]> {
		try {
			// Check if the file is inside a Git repository
			if (!(await this.isInsideGitRepo(fileAbsPath))) {
				console.error("Not inside a Git repository")
				return []
			}

			// Get git diff for the current file
			const diffOutput = await this.git.diff(["--unified=0", fileAbsPath])

			// Parse the diff output
			const lineChanges: { [lineNumber: number]: GitDiffType } = {}

			gitDiffParser.parse(diffOutput)[0].hunks.forEach((hunk) => {
				hunk.changes.forEach((change) => {
					if (change.type === "delete") {
						if (lineChanges[change.lineNumber] === "added") {
							lineChanges[change.lineNumber] = "modified"
						} else {
							lineChanges[change.lineNumber] = "deleted"
						}
					} else if (change.type === "insert") {
						if (lineChanges[change.lineNumber] === "deleted") {
							lineChanges[change.lineNumber] = "modified"
						} else {
							lineChanges[change.lineNumber] = "added
						}
					}
				})
			})

			const diffs = Object.entries(lineChanges).map(([lineNumber, type]) => ({
				lineNumber: Number(lineNumber),
				type: type as GitDiffType,
			}))

			return diffs
		} catch (error) {
			console.error("Error getting git diff:", error.message)
			return []
		}
	}

	private async isInsideGitRepo(fileAbsPath: string): Promise<boolean> {
		try {
			// Run git rev-parse --is-inside-work-tree to check if we're inside a Git repository
			const isRepo = await this.git.revparse(["--is-inside-work-tree"])
			return isRepo.trim() === "true"
		} catch (error) {
			console.error("Error checking if inside Git repository:", error.message)
			return false
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
	}

	async saveSettings() {
		await this.saveData(this.settings)
	}

	onunload() {
		console.log("unloading")
	}
}

class GitGutterSettingTab extends PluginSettingTab {
	plugin: GitGutterPlugin

	constructor(app: App, plugin: GitGutterPlugin) {
		super(app, plugin)
		this.plugin = plugin
	}

	display(): void {
		const { containerEl } = this
		containerEl.empty()

		new Setting(containerEl)
			.setName("Enable Git Gutter")
			.setDesc("Show git status in the editor gutter")
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.enabled).onChange(async (value) => {
					this.plugin.settings.enabled = value
					await this.plugin.saveSettings()
					// this.plugin.updateDecorations()
				}),
			)

		new Setting(containerEl)
			.setName("Decoration Type")
			.setDesc("Choose how to display git changes")
			.addDropdown((dropdown) =>
				dropdown
					.addOption("all", "All")
					.addOption("gutter", "Gutter Only")
					.setValue(this.plugin.settings.decorationType)
					.onChange(async (value) => {
						const typedValue = value as "all" | "gutter"
						this.plugin.settings.decorationType = typedValue
						await this.plugin.saveSettings()
						// this.plugin.updateDecorations()
					}),
			)

		// Color settings
		new Setting(containerEl).setName("Added Lines Color").addColorPicker((color) =>
			color.setValue(this.plugin.settings.colors.added).onChange(async (value) => {
				this.plugin.settings.colors.added = value
				await this.plugin.saveSettings()
				// this.plugin.updateDecorations()
			}),
		)

		new Setting(containerEl).setName("Modified Lines Color").addColorPicker((color) =>
			color.setValue(this.plugin.settings.colors.modified).onChange(async (value) => {
				this.plugin.settings.colors.modified = value
				await this.plugin.saveSettings()
				// this.plugin.updateDecorations()
			}),
		)

		new Setting(containerEl).setName("Deleted Lines Color").addColorPicker((color) =>
			color.setValue(this.plugin.settings.colors.deleted).onChange(async (value) => {
				this.plugin.settings.colors.deleted = value
				await this.plugin.saveSettings()
				// this.plugin.updateDecorations()
			}),
		)
	}
}
