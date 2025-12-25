function parsePatch(patch) {
  if (!patch) return [];
  const lines = [];
  const patchLines = patch.split("\n");
  let oldLineNumber = 0;
  let newLineNumber = 0;
  for (const line of patchLines) {
    if (line === "" && lines.length > 0) continue;
    if (line.startsWith("@@")) {
      const regex = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/;
      const match = regex.exec(line);
      if (match?.[1] && match[2]) {
        oldLineNumber = parseInt(match[1], 10);
        newLineNumber = parseInt(match[2], 10);
      }
      lines.push({
        type: "header",
        content: line,
        oldLineNumber: null,
        newLineNumber: null
      });
      continue;
    }
    if (line.startsWith("+")) {
      lines.push({
        type: "addition",
        content: line.slice(1),
        oldLineNumber: null,
        newLineNumber: newLineNumber++
      });
      continue;
    }
    if (line.startsWith("-")) {
      lines.push({
        type: "deletion",
        content: line.slice(1),
        oldLineNumber: oldLineNumber++,
        newLineNumber: null
      });
      continue;
    }
    lines.push({
      type: "context",
      content: line.startsWith(" ") ? line.slice(1) : line,
      oldLineNumber: oldLineNumber++,
      newLineNumber: newLineNumber++
    });
  }
  return lines;
}
function detectLanguage(filename) {
  const ext = filename.split(".").pop()?.toLowerCase();
  const languageMap = {
    // JavaScript/TypeScript
    "ts": "typescript",
    "tsx": "typescript",
    "js": "javascript",
    "jsx": "javascript",
    "mjs": "javascript",
    "cjs": "javascript",
    // Python
    "py": "python",
    "pyw": "python",
    // Web
    "html": "html",
    "htm": "html",
    "css": "css",
    "scss": "css",
    "less": "css",
    "json": "json",
    "xml": "xml",
    "yaml": "yaml",
    "yml": "yaml",
    // Other languages
    "java": "java",
    "kt": "kotlin",
    "cs": "csharp",
    "go": "go",
    "rs": "rust",
    "rb": "ruby",
    "php": "php",
    "swift": "swift",
    "c": "c",
    "cpp": "cpp",
    "h": "c",
    "hpp": "cpp",
    "sh": "bash",
    "bash": "bash",
    "zsh": "bash",
    "sql": "sql",
    "md": "markdown",
    "markdown": "markdown"
  };
  return languageMap[ext ?? ""] ?? "plaintext";
}
export {
  detectLanguage,
  parsePatch
};
//# sourceMappingURL=parse-patch-CFqWOftJ.js.map
