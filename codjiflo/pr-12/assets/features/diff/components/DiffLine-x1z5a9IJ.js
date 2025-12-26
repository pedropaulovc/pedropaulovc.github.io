import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import typescript from "../../../_virtual/typescript-DxrYIYt_.js";
import javascript from "../../../_virtual/javascript-B_rDs9YK.js";
import python from "../../../_virtual/python-DBZmavdn.js";
import json from "../../../_virtual/json-BBWH7puM.js";
import css from "../../../_virtual/css-DL89dfSB.js";
import xml from "../../../_virtual/xml-Brn6xkZD.js";
import bash from "../../../_virtual/bash-DbUyjfs2.js";
import markdown from "../../../_virtual/markdown-C50ORJcv.js";
import { cn } from "../../../utils/cn-Dtt8Ff7E.js";
import { Button } from "../../../components/Button/Button-BzCrBXpT.js";
import "../../../components/Input/Input-C8LmBRFx.js";
import "../../../components/Textarea/Textarea-8KdBG8UL.js";
import SyntaxHighlighter from "../../../node_modules/react-syntax-highlighter/dist/esm/light-Czp7ik0W.js";
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("html", xml);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
const LINE_STYLES = {
  addition: "bg-green-50",
  deletion: "bg-red-50",
  context: "bg-white",
  header: "bg-gray-100 text-gray-600 font-semibold"
};
const GUTTER_STYLES = {
  addition: "text-green-700 bg-green-100",
  deletion: "text-red-700 bg-red-100",
  context: "text-gray-500 bg-gray-50",
  header: "text-gray-500 bg-gray-100"
};
const LINE_MARKERS = {
  addition: "+",
  deletion: "−",
  context: " ",
  header: ""
};
const codeStyle = {
  margin: 0,
  padding: 0,
  background: "transparent",
  fontSize: "0.875rem",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  whiteSpace: "pre",
  overflow: "visible"
};
function DiffLine({ line, language, onStartComment, showCommentButton = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: cn("group hover:brightness-95", LINE_STYLES[line.type]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "td",
      {
        className: cn(
          "px-2 py-0.5 text-right text-xs select-none w-12 border-r border-gray-200",
          GUTTER_STYLES[line.type]
        ),
        children: line.oldLineNumber ?? ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "td",
      {
        className: cn(
          "px-2 py-0.5 text-right text-xs select-none w-12 border-r border-gray-200",
          GUTTER_STYLES[line.type]
        ),
        children: line.newLineNumber ?? ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "relative px-1 py-0.5 text-center select-none w-8 text-xs font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: LINE_MARKERS[line.type] }),
      showCommentButton && onStartComment && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          label: "+",
          variant: "secondary",
          size: "icon",
          ariaLabel: "Add comment",
          onClick: onStartComment
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-0.5 overflow-hidden pl-2 pr-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sr-only", children: [
        line.type === "addition" && "Added: ",
        line.type === "deletion" && "Deleted: "
      ] }),
      line.type === "header" ? /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "font-mono text-sm whitespace-pre m-0", children: line.content }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        SyntaxHighlighter,
        {
          language,
          useInlineStyles: true,
          customStyle: codeStyle,
          PreTag: "span",
          CodeTag: "span",
          children: line.content
        }
      )
    ] })
  ] });
}
export {
  DiffLine
};
//# sourceMappingURL=DiffLine-x1z5a9IJ.js.map
