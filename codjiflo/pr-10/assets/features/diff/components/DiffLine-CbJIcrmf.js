import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { highlightSyntax } from "../utils/syntax-highlighter-Bl-fRIxT.js";
import { cn } from "../../../utils/cn-Dtt8Ff7E.js";
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
function DiffLine({ line, language }) {
  const highlightedCode = reactExports.useMemo(() => {
    if (line.type === "header") return line.content;
    return highlightSyntax(line.content, language);
  }, [line.content, line.type, language]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: cn("hover:brightness-95", LINE_STYLES[line.type]), children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-0.5 text-center select-none w-6 text-xs font-mono", "aria-hidden": "true", children: LINE_MARKERS[line.type] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-0.5 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sr-only", children: [
        line.type === "addition" && "Added: ",
        line.type === "deletion" && "Deleted: "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "font-mono text-sm whitespace-pre pl-2 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "code",
        {
          dangerouslySetInnerHTML: { __html: highlightedCode }
        }
      ) })
    ] })
  ] });
}
export {
  DiffLine
};
//# sourceMappingURL=DiffLine-CbJIcrmf.js.map
