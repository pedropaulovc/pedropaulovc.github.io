import HighlightJS from "../../../_virtual/core-0LnBnqn8.js";
import typescript from "../../../node_modules/highlight.js/es/languages/typescript-D0j6Wuqi.js";
import javascript from "../../../node_modules/highlight.js/es/languages/javascript-CJTpAl-H.js";
import python from "../../../node_modules/highlight.js/es/languages/python-DE8Cd4ld.js";
import json from "../../../node_modules/highlight.js/es/languages/json-CcI0T3s5.js";
import css from "../../../node_modules/highlight.js/es/languages/css-BfkAEjG_.js";
import xml from "../../../node_modules/highlight.js/es/languages/xml-BvcsjgS8.js";
import bash from "../../../node_modules/highlight.js/es/languages/bash-C-vxWUX9.js";
import markdown from "../../../node_modules/highlight.js/es/languages/markdown-HImi50Ir.js";
HighlightJS.registerLanguage("typescript", typescript);
HighlightJS.registerLanguage("javascript", javascript);
HighlightJS.registerLanguage("python", python);
HighlightJS.registerLanguage("json", json);
HighlightJS.registerLanguage("css", css);
HighlightJS.registerLanguage("xml", xml);
HighlightJS.registerLanguage("html", xml);
HighlightJS.registerLanguage("bash", bash);
HighlightJS.registerLanguage("markdown", markdown);
function highlightSyntax(code, language) {
  try {
    if (HighlightJS.getLanguage(language)) {
      return HighlightJS.highlight(code, { language }).value;
    }
    const result = HighlightJS.highlightAuto(code);
    return result.value;
  } catch {
    return escapeHtml(code);
  }
}
function escapeHtml(text) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] ?? char);
}
export {
  highlightSyntax
};
//# sourceMappingURL=syntax-highlighter-Bl-fRIxT.js.map
