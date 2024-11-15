/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var _e=Object.defineProperty;var $r=Object.getOwnPropertyDescriptor;var Br=Object.getOwnPropertyNames;var Gr=Object.prototype.hasOwnProperty;var w=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Xr=(e,r)=>{for(var n in r)_e(e,n,{get:r[n],enumerable:!0})},Zr=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Br(r))!Gr.call(e,i)&&i!==n&&_e(e,i,{get:()=>r[i],enumerable:!(t=$r(r,i))||t.enumerable});return e};var Qr=e=>Zr(_e({},"__esModule",{value:!0}),e);var I=w(Se=>{"use strict";Object.defineProperty(Se,"__esModule",{value:!0});Se.default=Ve;function Ve(){}Ve.prototype={diff:function(r,n){var t,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=i.callback;typeof i=="function"&&(u=i,i={});var a=this;function f(v){return v=a.postProcess(v,i),u?(setTimeout(function(){u(v)},0),!0):v}r=this.castInput(r,i),n=this.castInput(n,i),r=this.removeEmpty(this.tokenize(r,i)),n=this.removeEmpty(this.tokenize(n,i));var o=n.length,s=r.length,l=1,c=o+s;i.maxEditLength!=null&&(c=Math.min(c,i.maxEditLength));var d=(t=i.timeout)!==null&&t!==void 0?t:1/0,m=Date.now()+d,p=[{oldPos:-1,lastComponent:void 0}],h=this.extractCommon(p[0],n,r,0,i);if(p[0].oldPos+1>=s&&h+1>=o)return f(Je(a,p[0].lastComponent,n,r,a.useLongestToken));var x=-1/0,P=1/0;function _(){for(var v=Math.max(x,-l);v<=Math.min(P,l);v+=2){var S=void 0,C=p[v-1],O=p[v+1];C&&(p[v-1]=void 0);var j=!1;if(O){var T=O.oldPos-v;j=O&&0<=T&&T<o}var L=C&&C.oldPos+1<s;if(!j&&!L){p[v]=void 0;continue}if(!L||j&&C.oldPos<O.oldPos?S=a.addToPath(O,!0,!1,0,i):S=a.addToPath(C,!1,!0,1,i),h=a.extractCommon(S,n,r,v,i),S.oldPos+1>=s&&h+1>=o)return f(Je(a,S.lastComponent,n,r,a.useLongestToken));p[v]=S,S.oldPos+1>=s&&(P=Math.min(P,v-1)),h+1>=o&&(x=Math.max(x,v+1))}l++}if(u)(function v(){setTimeout(function(){if(l>c||Date.now()>m)return u();_()||v()},0)})();else for(;l<=c&&Date.now()<=m;){var E=_();if(E)return E}},addToPath:function(r,n,t,i,u){var a=r.lastComponent;return a&&!u.oneChangePerToken&&a.added===n&&a.removed===t?{oldPos:r.oldPos+i,lastComponent:{count:a.count+1,added:n,removed:t,previousComponent:a.previousComponent}}:{oldPos:r.oldPos+i,lastComponent:{count:1,added:n,removed:t,previousComponent:a}}},extractCommon:function(r,n,t,i,u){for(var a=n.length,f=t.length,o=r.oldPos,s=o-i,l=0;s+1<a&&o+1<f&&this.equals(t[o+1],n[s+1],u);)s++,o++,l++,u.oneChangePerToken&&(r.lastComponent={count:1,previousComponent:r.lastComponent,added:!1,removed:!1});return l&&!u.oneChangePerToken&&(r.lastComponent={count:l,previousComponent:r.lastComponent,added:!1,removed:!1}),r.oldPos=o,s},equals:function(r,n,t){return t.comparator?t.comparator(r,n):r===n||t.ignoreCase&&r.toLowerCase()===n.toLowerCase()},removeEmpty:function(r){for(var n=[],t=0;t<r.length;t++)r[t]&&n.push(r[t]);return n},castInput:function(r){return r},tokenize:function(r){return Array.from(r)},join:function(r){return r.join("")},postProcess:function(r){return r}};function Je(e,r,n,t,i){for(var u=[],a;r;)u.push(r),a=r.previousComponent,delete r.previousComponent,r=a;u.reverse();for(var f=0,o=u.length,s=0,l=0;f<o;f++){var c=u[f];if(c.removed)c.value=e.join(t.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&i){var d=n.slice(s,s+c.count);d=d.map(function(m,p){var h=t[l+p];return h.length>m.length?h:m}),c.value=e.join(d)}else c.value=e.join(n.slice(s,s+c.count));s+=c.count,c.added||(l+=c.count)}}return u}});var $e=w(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.characterDiff=void 0;Y.diffChars=en;var Yr=kr(I());function kr(e){return e&&e.__esModule?e:{default:e}}var Kr=Y.characterDiff=new Yr.default;function en(e,r,n){return Kr.diff(e,r,n)}});var Te=w(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.hasOnlyUnixLineEndings=ln;F.hasOnlyWinLineEndings=on;F.longestCommonPrefix=rn;F.longestCommonSuffix=nn;F.maximumOverlap=an;F.removePrefix=tn;F.removeSuffix=un;F.replacePrefix=Be;F.replaceSuffix=Ge;function rn(e,r){var n;for(n=0;n<e.length&&n<r.length;n++)if(e[n]!=r[n])return e.slice(0,n);return e.slice(0,n)}function nn(e,r){var n;if(!e||!r||e[e.length-1]!=r[r.length-1])return"";for(n=0;n<e.length&&n<r.length;n++)if(e[e.length-(n+1)]!=r[r.length-(n+1)])return e.slice(-n);return e.slice(-n)}function Be(e,r,n){if(e.slice(0,r.length)!=r)throw Error("string ".concat(JSON.stringify(e)," doesn't start with prefix ").concat(JSON.stringify(r),"; this is a bug"));return n+e.slice(r.length)}function Ge(e,r,n){if(!r)return e+n;if(e.slice(-r.length)!=r)throw Error("string ".concat(JSON.stringify(e)," doesn't end with suffix ").concat(JSON.stringify(r),"; this is a bug"));return e.slice(0,-r.length)+n}function tn(e,r){return Be(e,r,"")}function un(e,r){return Ge(e,r,"")}function an(e,r){return r.slice(0,fn(e,r))}function fn(e,r){var n=0;e.length>r.length&&(n=e.length-r.length);var t=r.length;e.length<r.length&&(t=e.length);var i=Array(t),u=0;i[0]=0;for(var a=1;a<t;a++){for(r[a]==r[u]?i[a]=i[u]:i[a]=u;u>0&&r[a]!=r[u];)u=i[u];r[a]==r[u]&&u++}u=0;for(var f=n;f<e.length;f++){for(;u>0&&e[f]!=r[u];)u=i[u];e[f]==r[u]&&u++}return u}function on(e){return e.includes(`\r
`)&&!e.startsWith(`
`)&&!e.match(/[^\r]\n/)}function ln(e){return!e.includes(`\r
`)&&e.includes(`
`)}});var ke=w(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.diffWords=dn;W.diffWordsWithSpace=Ye;W.wordWithSpaceDiff=W.wordDiff=void 0;var Ze=sn(I()),b=Te();function sn(e){return e&&e.__esModule?e:{default:e}}var ae="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",cn=new RegExp("[".concat(ae,"]+|\\s+|[^").concat(ae,"]"),"ug"),k=W.wordDiff=new Ze.default;k.equals=function(e,r,n){return n.ignoreCase&&(e=e.toLowerCase(),r=r.toLowerCase()),e.trim()===r.trim()};k.tokenize=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;if(r.intlSegmenter){if(r.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(r.intlSegmenter.segment(e),function(u){return u.segment})}else n=e.match(cn)||[];var t=[],i=null;return n.forEach(function(u){/\s/.test(u)?i==null?t.push(u):t.push(t.pop()+u):/\s/.test(i)?t[t.length-1]==i?t.push(t.pop()+u):t.push(i+u):t.push(u),i=u}),t};k.join=function(e){return e.map(function(r,n){return n==0?r:r.replace(/^\s+/,"")}).join("")};k.postProcess=function(e,r){if(!e||r.oneChangePerToken)return e;var n=null,t=null,i=null;return e.forEach(function(u){u.added?t=u:u.removed?i=u:((t||i)&&Xe(n,i,t,u),n=u,t=null,i=null)}),(t||i)&&Xe(n,i,t,null),e};function dn(e,r,n){return(n==null?void 0:n.ignoreWhitespace)!=null&&!n.ignoreWhitespace?Ye(e,r,n):k.diff(e,r,n)}function Xe(e,r,n,t){if(r&&n){var i=r.value.match(/^\s*/)[0],u=r.value.match(/\s*$/)[0],a=n.value.match(/^\s*/)[0],f=n.value.match(/\s*$/)[0];if(e){var o=(0,b.longestCommonPrefix)(i,a);e.value=(0,b.replaceSuffix)(e.value,a,o),r.value=(0,b.removePrefix)(r.value,o),n.value=(0,b.removePrefix)(n.value,o)}if(t){var s=(0,b.longestCommonSuffix)(u,f);t.value=(0,b.replacePrefix)(t.value,f,s),r.value=(0,b.removeSuffix)(r.value,s),n.value=(0,b.removeSuffix)(n.value,s)}}else if(n)e&&(n.value=n.value.replace(/^\s*/,"")),t&&(t.value=t.value.replace(/^\s*/,""));else if(e&&t){var l=t.value.match(/^\s*/)[0],c=r.value.match(/^\s*/)[0],d=r.value.match(/\s*$/)[0],m=(0,b.longestCommonPrefix)(l,c);r.value=(0,b.removePrefix)(r.value,m);var p=(0,b.longestCommonSuffix)((0,b.removePrefix)(l,m),d);r.value=(0,b.removeSuffix)(r.value,p),t.value=(0,b.replacePrefix)(t.value,l,p),e.value=(0,b.replaceSuffix)(e.value,l,l.slice(0,l.length-p.length))}else if(t){var h=t.value.match(/^\s*/)[0],x=r.value.match(/\s*$/)[0],P=(0,b.maximumOverlap)(x,h);r.value=(0,b.removeSuffix)(r.value,P)}else if(e){var _=e.value.match(/\s*$/)[0],E=r.value.match(/^\s*/)[0],v=(0,b.maximumOverlap)(_,E);r.value=(0,b.removePrefix)(r.value,v)}}var Qe=W.wordWithSpaceDiff=new Ze.default;Qe.tokenize=function(e){var r=new RegExp("(\\r?\\n)|[".concat(ae,"]+|[^\\S\\n\\r]+|[^").concat(ae,"]"),"ug");return e.match(r)||[]};function Ye(e,r,n){return Qe.diff(e,r,n)}});var Ke=w(Ce=>{"use strict";Object.defineProperty(Ce,"__esModule",{value:!0});Ce.generateOptions=pn;function pn(e,r){if(typeof e=="function")r.callback=e;else if(e)for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r}});var oe=w(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.diffLines=gn;U.diffTrimmedLines=hn;U.lineDiff=void 0;var er=mn(I()),vn=Ke();function mn(e){return e&&e.__esModule?e:{default:e}}var fe=U.lineDiff=new er.default;fe.tokenize=function(e,r){r.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));var n=[],t=e.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var i=0;i<t.length;i++){var u=t[i];i%2&&!r.newlineIsToken?n[n.length-1]+=u:n.push(u)}return n};fe.equals=function(e,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),er.default.prototype.equals.call(this,e,r,n)};function gn(e,r,n){return fe.diff(e,r,n)}function hn(e,r,n){var t=(0,vn.generateOptions)(n,{ignoreWhitespace:!0});return fe.diff(e,r,t)}});var nr=w(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.diffSentences=bn;K.sentenceDiff=void 0;var yn=wn(I());function wn(e){return e&&e.__esModule?e:{default:e}}var rr=K.sentenceDiff=new yn.default;rr.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};function bn(e,r,n){return rr.diff(e,r,n)}});var ir=w(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.cssDiff=void 0;ee.diffCss=Pn;var On=Ln(I());function Ln(e){return e&&e.__esModule?e:{default:e}}var tr=ee.cssDiff=new On.default;tr.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};function Pn(e,r,n){return tr.diff(e,r,n)}});var ar=w(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.canonicalize=le;V.diffJson=Sn;V.jsonDiff=void 0;var ur=_n(I()),xn=oe();function _n(e){return e&&e.__esModule?e:{default:e}}function De(e){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},De(e)}var J=V.jsonDiff=new ur.default;J.useLongestToken=!0;J.tokenize=xn.lineDiff.tokenize;J.castInput=function(e,r){var n=r.undefinedReplacement,t=r.stringifyReplacer,i=t===void 0?function(u,a){return typeof a=="undefined"?n:a}:t;return typeof e=="string"?e:JSON.stringify(le(e,null,null,i),i,"  ")};J.equals=function(e,r,n){return ur.default.prototype.equals.call(J,e.replace(/,([\r\n])/g,"$1"),r.replace(/,([\r\n])/g,"$1"),n)};function Sn(e,r,n){return J.diff(e,r,n)}function le(e,r,n,t,i){r=r||[],n=n||[],t&&(e=t(i,e));var u;for(u=0;u<r.length;u+=1)if(r[u]===e)return n[u];var a;if(Object.prototype.toString.call(e)==="[object Array]"){for(r.push(e),a=new Array(e.length),n.push(a),u=0;u<e.length;u+=1)a[u]=le(e[u],r,n,t,i);return r.pop(),n.pop(),a}if(e&&e.toJSON&&(e=e.toJSON()),De(e)==="object"&&e!==null){r.push(e),a={},n.push(a);var f=[],o;for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&f.push(o);for(f.sort(),u=0;u<f.length;u+=1)o=f[u],a[o]=le(e[o],r,n,t,o);r.pop(),n.pop()}else a=e;return a}});var fr=w(re=>{"use strict";Object.defineProperty(re,"__esModule",{value:!0});re.arrayDiff=void 0;re.diffArrays=Dn;var Tn=Cn(I());function Cn(e){return e&&e.__esModule?e:{default:e}}var se=re.arrayDiff=new Tn.default;se.tokenize=function(e){return e.slice()};se.join=se.removeEmpty=function(e){return e};function Dn(e,r,n){return se.diff(e,r,n)}});var cr=w($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.isUnix=Fn;$.isWin=jn;$.unixToWin=lr;$.winToUnix=sr;function ne(e){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ne(e)}function or(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function H(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?or(Object(n),!0).forEach(function(t){En(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):or(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function En(e,r,n){return r=Mn(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function Mn(e){var r=qn(e,"string");return ne(r)=="symbol"?r:r+""}function qn(e,r){if(ne(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r||"default");if(ne(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function lr(e){return Array.isArray(e)?e.map(lr):H(H({},e),{},{hunks:e.hunks.map(function(r){return H(H({},r),{},{lines:r.lines.map(function(n,t){var i;return n.startsWith("\\")||n.endsWith("\r")||(i=r.lines[t+1])!==null&&i!==void 0&&i.startsWith("\\")?n:n+"\r"})})})})}function sr(e){return Array.isArray(e)?e.map(sr):H(H({},e),{},{hunks:e.hunks.map(function(r){return H(H({},r),{},{lines:r.lines.map(function(n){return n.endsWith("\r")?n.substring(0,n.length-1):n})})})})}function Fn(e){return Array.isArray(e)||(e=[e]),!e.some(function(r){return r.hunks.some(function(n){return n.lines.some(function(t){return!t.startsWith("\\")&&t.endsWith("\r")})})})}function jn(e){return Array.isArray(e)||(e=[e]),e.some(function(r){return r.hunks.some(function(n){return n.lines.some(function(t){return t.endsWith("\r")})})})&&e.every(function(r){return r.hunks.every(function(n){return n.lines.every(function(t,i){var u;return t.startsWith("\\")||t.endsWith("\r")||((u=n.lines[i+1])===null||u===void 0?void 0:u.startsWith("\\"))})})})}});var ce=w(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});Ee.parsePatch=An;function An(e){var r=e.split(/\n/),n=[],t=0;function i(){var f={};for(n.push(f);t<r.length;){var o=r[t];if(/^(\-\-\-|\+\+\+|@@)\s/.test(o))break;var s=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(o);s&&(f.index=s[1]),t++}for(u(f),u(f),f.hunks=[];t<r.length;){var l=r[t];if(/^(Index:\s|diff\s|\-\-\-\s|\+\+\+\s|===================================================================)/.test(l))break;if(/^@@/.test(l))f.hunks.push(a());else{if(l)throw new Error("Unknown line "+(t+1)+" "+JSON.stringify(l));t++}}}function u(f){var o=/^(---|\+\+\+)\s+(.*)\r?$/.exec(r[t]);if(o){var s=o[1]==="---"?"old":"new",l=o[2].split("	",2),c=l[0].replace(/\\\\/g,"\\");/^".*"$/.test(c)&&(c=c.substr(1,c.length-2)),f[s+"FileName"]=c,f[s+"Header"]=(l[1]||"").trim(),t++}}function a(){var f=t,o=r[t++],s=o.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),l={oldStart:+s[1],oldLines:typeof s[2]=="undefined"?1:+s[2],newStart:+s[3],newLines:typeof s[4]=="undefined"?1:+s[4],lines:[]};l.oldLines===0&&(l.oldStart+=1),l.newLines===0&&(l.newStart+=1);for(var c=0,d=0;t<r.length&&(d<l.oldLines||c<l.newLines||(m=r[t])!==null&&m!==void 0&&m.startsWith("\\"));t++){var m,p=r[t].length==0&&t!=r.length-1?" ":r[t][0];if(p==="+"||p==="-"||p===" "||p==="\\")l.lines.push(r[t]),p==="+"?c++:p==="-"?d++:p===" "&&(c++,d++);else throw new Error("Hunk at line ".concat(f+1," contained invalid line ").concat(r[t]))}if(!c&&l.newLines===1&&(l.newLines=0),!d&&l.oldLines===1&&(l.oldLines=0),c!==l.newLines)throw new Error("Added line count did not match for hunk at line "+(f+1));if(d!==l.oldLines)throw new Error("Removed line count did not match for hunk at line "+(f+1));return l}for(;t<r.length;)i();return n}});var dr=w(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.default=Nn;function Nn(e,r,n){var t=!0,i=!1,u=!1,a=1;return function f(){if(t&&!u){if(i?a++:t=!1,e+a<=n)return e+a;u=!0}if(!i)return u||(t=!0),r<=e-a?e-a++:(i=!0,f())}}});var gr=w(pe=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});pe.applyPatch=mr;pe.applyPatches=Hn;var pr=Te(),de=cr(),vr=ce(),In=Wn(dr());function Wn(e){return e&&e.__esModule?e:{default:e}}function mr(e,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string"&&(r=(0,vr.parsePatch)(r)),Array.isArray(r)){if(r.length>1)throw new Error("applyPatch only works with a single input.");r=r[0]}(n.autoConvertLineEndings||n.autoConvertLineEndings==null)&&((0,pr.hasOnlyWinLineEndings)(e)&&(0,de.isUnix)(r)?r=(0,de.unixToWin)(r):(0,pr.hasOnlyUnixLineEndings)(e)&&(0,de.isWin)(r)&&(r=(0,de.winToUnix)(r)));var t=e.split(`
`),i=r.hunks,u=n.compareLine||function(A,y,N,M){return y===M},a=n.fuzzFactor||0,f=0;if(a<0||!Number.isInteger(a))throw new Error("fuzzFactor must be a non-negative integer");if(!i.length)return e;for(var o="",s=!1,l=!1,c=0;c<i[i.length-1].lines.length;c++){var d=i[i.length-1].lines[c];d[0]=="\\"&&(o[0]=="+"?s=!0:o[0]=="-"&&(l=!0)),o=d}if(s){if(l){if(!a&&t[t.length-1]=="")return!1}else if(t[t.length-1]=="")t.pop();else if(!a)return!1}else if(l){if(t[t.length-1]!="")t.push("");else if(!a)return!1}function m(A,y,N){for(var M=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,R=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,q=arguments.length>5&&arguments[5]!==void 0?arguments[5]:[],D=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,X=0,Pe=!1;M<A.length;M++){var Z=A[M],Q=Z.length>0?Z[0]:" ",xe=Z.length>0?Z.substr(1):Z;if(Q==="-")if(u(y+1,t[y],Q,xe))y++,X=0;else return!N||t[y]==null?null:(q[D]=t[y],m(A,y+1,N-1,M,!1,q,D+1));if(Q==="+"){if(!R)return null;q[D]=xe,D++,X=0,Pe=!0}if(Q===" ")if(X++,q[D]=t[y],u(y+1,t[y],Q,xe))D++,R=!0,Pe=!1,y++;else return Pe||!N?null:t[y]&&(m(A,y+1,N-1,M+1,!1,q,D+1)||m(A,y+1,N-1,M,!1,q,D+1))||m(A,y,N-1,M+1,!1,q,D)}return D-=X,y-=X,q.length=D,{patchedLines:q,oldLineLastI:y-1}}for(var p=[],h=0,x=0;x<i.length;x++){for(var P=i[x],_=void 0,E=t.length-P.oldLines+a,v=void 0,S=0;S<=a;S++){v=P.oldStart+h-1;for(var C=(0,In.default)(v,f,E);v!==void 0&&(_=m(P.lines,v,S),!_);v=C());if(_)break}if(!_)return!1;for(var O=f;O<v;O++)p.push(t[O]);for(var j=0;j<_.patchedLines.length;j++){var T=_.patchedLines[j];p.push(T)}f=_.oldLineLastI+1,h=v+1-P.oldStart}for(var L=f;L<t.length;L++)p.push(t[L]);return p.join(`
`)}function Hn(e,r){typeof e=="string"&&(e=(0,vr.parsePatch)(e));var n=0;function t(){var i=e[n++];if(!i)return r.complete();r.loadFile(i,function(u,a){if(u)return r.complete(u);var f=mr(a,i,r);r.patched(i,f,function(o){if(o)return r.complete(o);t()})})}t()}});var Ae=w(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.createPatch=Gn;B.createTwoFilesPatch=wr;B.formatPatch=me;B.structuredPatch=je;var hr=oe();function te(e){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},te(e)}function qe(e){return Jn(e)||Un(e)||Rn(e)||zn()}function zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(e,r){if(e){if(typeof e=="string")return Fe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fe(e,r)}}function Un(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jn(e){if(Array.isArray(e))return Fe(e)}function Fe(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function yr(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function ve(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?yr(Object(n),!0).forEach(function(t){Vn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Vn(e,r,n){return r=$n(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function $n(e){var r=Bn(e,"string");return te(r)=="symbol"?r:r+""}function Bn(e,r){if(te(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r||"default");if(te(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function je(e,r,n,t,i,u,a){if(a||(a={}),typeof a=="function"&&(a={callback:a}),typeof a.context=="undefined"&&(a.context=4),a.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(a.callback){var f=a,o=f.callback;(0,hr.diffLines)(n,t,ve(ve({},a),{},{callback:function(c){var d=s(c);o(d)}}))}else return s((0,hr.diffLines)(n,t,a));function s(l){if(!l)return;l.push({value:"",lines:[]});function c(j){return j.map(function(T){return" "+T})}for(var d=[],m=0,p=0,h=[],x=1,P=1,_=function(){var T=l[E],L=T.lines||Xn(T.value);if(T.lines=L,T.added||T.removed){var A;if(!m){var y=l[E-1];m=x,p=P,y&&(h=a.context>0?c(y.lines.slice(-a.context)):[],m-=h.length,p-=h.length)}(A=h).push.apply(A,qe(L.map(function(D){return(T.added?"+":"-")+D}))),T.added?P+=L.length:x+=L.length}else{if(m)if(L.length<=a.context*2&&E<l.length-2){var N;(N=h).push.apply(N,qe(c(L)))}else{var M,R=Math.min(L.length,a.context);(M=h).push.apply(M,qe(c(L.slice(0,R))));var q={oldStart:m,oldLines:x-m+R,newStart:p,newLines:P-p+R,lines:h};d.push(q),m=0,p=0,h=[]}x+=L.length,P+=L.length}},E=0;E<l.length;E++)_();for(var v=0,S=d;v<S.length;v++)for(var C=S[v],O=0;O<C.lines.length;O++)C.lines[O].endsWith(`
`)?C.lines[O]=C.lines[O].slice(0,-1):(C.lines.splice(O+1,0,"\\ No newline at end of file"),O++);return{oldFileName:e,newFileName:r,oldHeader:i,newHeader:u,hunks:d}}}function me(e){if(Array.isArray(e))return e.map(me).join(`
`);var r=[];e.oldFileName==e.newFileName&&r.push("Index: "+e.oldFileName),r.push("==================================================================="),r.push("--- "+e.oldFileName+(typeof e.oldHeader=="undefined"?"":"	"+e.oldHeader)),r.push("+++ "+e.newFileName+(typeof e.newHeader=="undefined"?"":"	"+e.newHeader));for(var n=0;n<e.hunks.length;n++){var t=e.hunks[n];t.oldLines===0&&(t.oldStart-=1),t.newLines===0&&(t.newStart-=1),r.push("@@ -"+t.oldStart+","+t.oldLines+" +"+t.newStart+","+t.newLines+" @@"),r.push.apply(r,t.lines)}return r.join(`
`)+`
`}function wr(e,r,n,t,i,u,a){var f;if(typeof a=="function"&&(a={callback:a}),(f=a)!==null&&f!==void 0&&f.callback){var s=a,l=s.callback;je(e,r,n,t,i,u,ve(ve({},a),{},{callback:function(d){d?l(me(d)):l()}}))}else{var o=je(e,r,n,t,i,u,a);return o?me(o):void 0}}function Gn(e,r,n,t,i,u){return wr(e,e,r,n,t,i,u)}function Xn(e){var r=e.endsWith(`
`),n=e.split(`
`).map(function(t){return t+`
`});return r?n.pop():n.push(n.pop().slice(0,-1)),n}});var Or=w(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.arrayEqual=Zn;ge.arrayStartsWith=br;function Zn(e,r){return e.length!==r.length?!1:br(e,r)}function br(e,r){if(r.length>e.length)return!1;for(var n=0;n<r.length;n++)if(r[n]!==e[n])return!1;return!0}});var qr=w(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.calcLineCount=Mr;ye.merge=nt;var Qn=Ae(),Yn=ce(),Ne=Or();function G(e){return rt(e)||et(e)||Kn(e)||kn()}function kn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kn(e,r){if(e){if(typeof e=="string")return Ie(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,r)}}function et(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rt(e){if(Array.isArray(e))return Ie(e)}function Ie(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Mr(e){var r=We(e.lines),n=r.oldLines,t=r.newLines;n!==void 0?e.oldLines=n:delete e.oldLines,t!==void 0?e.newLines=t:delete e.newLines}function nt(e,r,n){e=Lr(e,n),r=Lr(r,n);var t={};(e.index||r.index)&&(t.index=e.index||r.index),(e.newFileName||r.newFileName)&&(Pr(e)?Pr(r)?(t.oldFileName=he(t,e.oldFileName,r.oldFileName),t.newFileName=he(t,e.newFileName,r.newFileName),t.oldHeader=he(t,e.oldHeader,r.oldHeader),t.newHeader=he(t,e.newHeader,r.newHeader)):(t.oldFileName=e.oldFileName,t.newFileName=e.newFileName,t.oldHeader=e.oldHeader,t.newHeader=e.newHeader):(t.oldFileName=r.oldFileName||e.oldFileName,t.newFileName=r.newFileName||e.newFileName,t.oldHeader=r.oldHeader||e.oldHeader,t.newHeader=r.newHeader||e.newHeader)),t.hunks=[];for(var i=0,u=0,a=0,f=0;i<e.hunks.length||u<r.hunks.length;){var o=e.hunks[i]||{oldStart:1/0},s=r.hunks[u]||{oldStart:1/0};if(xr(o,s))t.hunks.push(_r(o,a)),i++,f+=o.newLines-o.oldLines;else if(xr(s,o))t.hunks.push(_r(s,f)),u++,a+=s.newLines-s.oldLines;else{var l={oldStart:Math.min(o.oldStart,s.oldStart),oldLines:0,newStart:Math.min(o.newStart+a,s.oldStart+f),newLines:0,lines:[]};tt(l,o.oldStart,o.lines,s.oldStart,s.lines),u++,i++,t.hunks.push(l)}}return t}function Lr(e,r){if(typeof e=="string"){if(/^@@/m.test(e)||/^Index:/m.test(e))return(0,Yn.parsePatch)(e)[0];if(!r)throw new Error("Must provide a base reference or pass in a patch");return(0,Qn.structuredPatch)(void 0,void 0,r,e)}return e}function Pr(e){return e.newFileName&&e.newFileName!==e.oldFileName}function he(e,r,n){return r===n?r:(e.conflict=!0,{mine:r,theirs:n})}function xr(e,r){return e.oldStart<r.oldStart&&e.oldStart+e.oldLines<r.oldStart}function _r(e,r){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+r,newLines:e.newLines,lines:e.lines}}function tt(e,r,n,t,i){var u={offset:r,lines:n,index:0},a={offset:t,lines:i,index:0};for(Tr(e,u,a),Tr(e,a,u);u.index<u.lines.length&&a.index<a.lines.length;){var f=u.lines[u.index],o=a.lines[a.index];if((f[0]==="-"||f[0]==="+")&&(o[0]==="-"||o[0]==="+"))it(e,u,a);else if(f[0]==="+"&&o[0]===" "){var s;(s=e.lines).push.apply(s,G(z(u)))}else if(o[0]==="+"&&f[0]===" "){var l;(l=e.lines).push.apply(l,G(z(a)))}else f[0]==="-"&&o[0]===" "?Sr(e,u,a):o[0]==="-"&&f[0]===" "?Sr(e,a,u,!0):f===o?(e.lines.push(f),u.index++,a.index++):He(e,z(u),z(a))}Cr(e,u),Cr(e,a),Mr(e)}function it(e,r,n){var t=z(r),i=z(n);if(Dr(t)&&Dr(i)){if((0,Ne.arrayStartsWith)(t,i)&&Er(n,t,t.length-i.length)){var u;(u=e.lines).push.apply(u,G(t));return}else if((0,Ne.arrayStartsWith)(i,t)&&Er(r,i,i.length-t.length)){var a;(a=e.lines).push.apply(a,G(i));return}}else if((0,Ne.arrayEqual)(t,i)){var f;(f=e.lines).push.apply(f,G(t));return}He(e,t,i)}function Sr(e,r,n,t){var i=z(r),u=ut(n,i);if(u.merged){var a;(a=e.lines).push.apply(a,G(u.merged))}else He(e,t?u:i,t?i:u)}function He(e,r,n){e.conflict=!0,e.lines.push({conflict:!0,mine:r,theirs:n})}function Tr(e,r,n){for(;r.offset<n.offset&&r.index<r.lines.length;){var t=r.lines[r.index++];e.lines.push(t),r.offset++}}function Cr(e,r){for(;r.index<r.lines.length;){var n=r.lines[r.index++];e.lines.push(n)}}function z(e){for(var r=[],n=e.lines[e.index][0];e.index<e.lines.length;){var t=e.lines[e.index];if(n==="-"&&t[0]==="+"&&(n="+"),n===t[0])r.push(t),e.index++;else break}return r}function ut(e,r){for(var n=[],t=[],i=0,u=!1,a=!1;i<r.length&&e.index<e.lines.length;){var f=e.lines[e.index],o=r[i];if(o[0]==="+")break;if(u=u||f[0]!==" ",t.push(o),i++,f[0]==="+")for(a=!0;f[0]==="+";)n.push(f),f=e.lines[++e.index];o.substr(1)===f.substr(1)?(n.push(f),e.index++):a=!0}if((r[i]||"")[0]==="+"&&u&&(a=!0),a)return n;for(;i<r.length;)t.push(r[i++]);return{merged:t,changes:n}}function Dr(e){return e.reduce(function(r,n){return r&&n[0]==="-"},!0)}function Er(e,r,n){for(var t=0;t<n;t++){var i=r[r.length-n+t].substr(1);if(e.lines[e.index+t]!==" "+i)return!1}return e.index+=n,!0}function We(e){var r=0,n=0;return e.forEach(function(t){if(typeof t!="string"){var i=We(t.mine),u=We(t.theirs);r!==void 0&&(i.oldLines===u.oldLines?r+=i.oldLines:r=void 0),n!==void 0&&(i.newLines===u.newLines?n+=i.newLines:n=void 0)}else n!==void 0&&(t[0]==="+"||t[0]===" ")&&n++,r!==void 0&&(t[0]==="-"||t[0]===" ")&&r++}),{oldLines:r,newLines:n}}});var Nr=w(ze=>{"use strict";Object.defineProperty(ze,"__esModule",{value:!0});ze.reversePatch=Ar;function ie(e){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ie(e)}function Fr(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function jr(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Fr(Object(n),!0).forEach(function(t){at(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function at(e,r,n){return r=ft(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ft(e){var r=ot(e,"string");return ie(r)=="symbol"?r:r+""}function ot(e,r){if(ie(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r||"default");if(ie(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ar(e){return Array.isArray(e)?e.map(Ar).reverse():jr(jr({},e),{},{oldFileName:e.newFileName,oldHeader:e.newHeader,newFileName:e.oldFileName,newHeader:e.oldHeader,hunks:e.hunks.map(function(r){return{oldLines:r.newLines,oldStart:r.newStart,newLines:r.oldLines,newStart:r.oldStart,lines:r.lines.map(function(n){return n.startsWith("-")?"+".concat(n.slice(1)):n.startsWith("+")?"-".concat(n.slice(1)):n})}})})}});var Ir=w(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.convertChangesToDMP=lt;function lt(e){for(var r=[],n,t,i=0;i<e.length;i++)n=e[i],n.added?t=1:n.removed?t=-1:t=0,r.push([t,n.value]);return r}});var Wr=w(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.convertChangesToXML=st;function st(e){for(var r=[],n=0;n<e.length;n++){var t=e[n];t.added?r.push("<ins>"):t.removed&&r.push("<del>"),r.push(ct(t.value)),t.added?r.push("</ins>"):t.removed&&r.push("</del>")}return r.join("")}function ct(e){var r=e;return r=r.replace(/&/g,"&amp;"),r=r.replace(/</g,"&lt;"),r=r.replace(/>/g,"&gt;"),r=r.replace(/"/g,"&quot;"),r}});var Jr=w(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});Object.defineProperty(g,"Diff",{enumerable:!0,get:function(){return dt.default}});Object.defineProperty(g,"applyPatch",{enumerable:!0,get:function(){return Ur.applyPatch}});Object.defineProperty(g,"applyPatches",{enumerable:!0,get:function(){return Ur.applyPatches}});Object.defineProperty(g,"canonicalize",{enumerable:!0,get:function(){return Rr.canonicalize}});Object.defineProperty(g,"convertChangesToDMP",{enumerable:!0,get:function(){return bt.convertChangesToDMP}});Object.defineProperty(g,"convertChangesToXML",{enumerable:!0,get:function(){return Ot.convertChangesToXML}});Object.defineProperty(g,"createPatch",{enumerable:!0,get:function(){return we.createPatch}});Object.defineProperty(g,"createTwoFilesPatch",{enumerable:!0,get:function(){return we.createTwoFilesPatch}});Object.defineProperty(g,"diffArrays",{enumerable:!0,get:function(){return gt.diffArrays}});Object.defineProperty(g,"diffChars",{enumerable:!0,get:function(){return pt.diffChars}});Object.defineProperty(g,"diffCss",{enumerable:!0,get:function(){return mt.diffCss}});Object.defineProperty(g,"diffJson",{enumerable:!0,get:function(){return Rr.diffJson}});Object.defineProperty(g,"diffLines",{enumerable:!0,get:function(){return zr.diffLines}});Object.defineProperty(g,"diffSentences",{enumerable:!0,get:function(){return vt.diffSentences}});Object.defineProperty(g,"diffTrimmedLines",{enumerable:!0,get:function(){return zr.diffTrimmedLines}});Object.defineProperty(g,"diffWords",{enumerable:!0,get:function(){return Hr.diffWords}});Object.defineProperty(g,"diffWordsWithSpace",{enumerable:!0,get:function(){return Hr.diffWordsWithSpace}});Object.defineProperty(g,"formatPatch",{enumerable:!0,get:function(){return we.formatPatch}});Object.defineProperty(g,"merge",{enumerable:!0,get:function(){return yt.merge}});Object.defineProperty(g,"parsePatch",{enumerable:!0,get:function(){return ht.parsePatch}});Object.defineProperty(g,"reversePatch",{enumerable:!0,get:function(){return wt.reversePatch}});Object.defineProperty(g,"structuredPatch",{enumerable:!0,get:function(){return we.structuredPatch}});var dt=Lt(I()),pt=$e(),Hr=ke(),zr=oe(),vt=nr(),mt=ir(),Rr=ar(),gt=fr(),Ur=gr(),ht=ce(),yt=qr(),wt=Nr(),we=Ae(),bt=Ir(),Ot=Wr();function Lt(e){return e&&e.__esModule?e:{default:e}}});var Pt={};Xr(Pt,{default:()=>Oe});module.exports=Qr(Pt);var Vr=require("child_process"),Le=require("@codemirror/view"),ue=require("obsidian"),be=class extends Le.GutterMarker{constructor(n){super();this.types=n}toDOM(){let n=document.createElement("div");return this.types.forEach(t=>{n.classList.add(`git-gutter-marker-${t}`)}),n.classList.add("git-gutter-marker"),n}eq(n){return this.types.every(t=>n.types.includes(t))}},Oe=class extends ue.Plugin{constructor(){super(...arguments);this.vaultPath=this.app.vault.adapter.basePath;this.cachedDiffs={};this.isUpdateRequired=!1;this.cacheBaseVersion={}}getDiffsForFile(n){var t;return(t=this.cachedDiffs[n])!=null?t:{added:[],modified:[],deleted:[]}}setDiffsForFile(n,t){this.cachedDiffs[n]=t}getBaseVersion(n){if(this.cacheBaseVersion[n])return this.cacheBaseVersion[n];let t=(0,Vr.execSync)(`git show HEAD:"./${n}"`,{cwd:this.vaultPath,encoding:"utf-8"}).toString();return this.cacheBaseVersion[n]=t,t}gitGutterExtension(){return(0,Le.gutter)({lineMarker:(n,t)=>{var s;let i=n.state.doc.lineAt(t.from).number,a=(s=n.state.field(ue.editorInfoField).file)==null?void 0:s.path,f=this.getDiffsForFile(a!=null?a:""),o=[];return f.added.includes(i)&&o.push("added"),f.modified.includes(i)&&o.push("modified"),f.deleted.includes(i)&&o.push("deleted"),o.length>0?new be(o):null},lineMarkerChange:n=>{var a;if(!n.docChanged)return!1;let i=(a=n.view.state.field(ue.editorInfoField).file)==null?void 0:a.path,u=n.view.state.doc.toString();if(i){let f=this.getGitDiff(i,u);if(f)return this.setDiffsForFile(i,f),this.isUpdateRequired=!0,!0}return!1},initialSpacer:()=>new be([]),updateSpacer:n=>n})}async onload(){this.registerEditorExtension(this.gitGutterExtension())}getGitDiff(n,t){let i=Jr(),u=this.getBaseVersion(n),f=i.createPatch("tmp.txt",u,t,"","",{context:0}).split(`
`);return this.parseDiffNotation(f)}parseDiffNotation(n){let t={added:[],deleted:[],modified:[]};for(let i of n){let u=i.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);if(!u)continue;let a=parseInt(u[1]),f=u[2]?parseInt(u[2]):1,o=parseInt(u[3]),s=u[4]?parseInt(u[4]):1;if(s===0){for(let d=0;d<f;d++)t.deleted.push(a+d);continue}if(f===0){for(let d=0;d<s;d++)t.added.push(o+d);continue}let l=Math.max(a,o),c=Math.min(a+f,o+s);for(let d=l;d<c;d++)t.modified.push(d);if(s>f)for(let d=f;d<s;d++)t.added.push(o+d)}return t.added=[...new Set(t.added)].sort((i,u)=>i-u),t.deleted=[...new Set(t.deleted)].sort((i,u)=>i-u),t.modified=[...new Set(t.modified)].sort((i,u)=>i-u),t}onunload(){}};
