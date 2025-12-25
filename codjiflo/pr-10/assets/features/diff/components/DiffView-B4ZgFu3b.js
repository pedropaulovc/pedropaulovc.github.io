import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { useDiffStore } from "../stores/useDiffStore-rz8GIvY7.js";
import { detectLanguage, parsePatch } from "../utils/parse-patch-CFqWOftJ.js";
import "../utils/syntax-highlighter-Bl-fRIxT.js";
import { DiffLine } from "./DiffLine-CbJIcrmf.js";
import "../../../components/ui/Badge-Bxhxl-4W.js";
import { Skeleton } from "../../../components/ui/Skeleton-R4IAkZDg.js";
function DiffView() {
  const { files, selectedFileIndex, isLoading } = useDiffStore();
  const selectedFile = files[selectedFileIndex];
  const patch = selectedFile?.patch;
  const filename = selectedFile?.filename;
  const { diffLines, language } = reactExports.useMemo(() => {
    if (!patch) {
      return { diffLines: [], language: "plaintext" };
    }
    return {
      diffLines: parsePatch(patch),
      language: detectLanguage(filename ?? "")
    };
  }, [patch, filename]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-2", role: "status", "aria-label": "Loading diff", children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }, i)) });
  }
  if (!selectedFile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full text-gray-500 p-8", children: "Select a file to view diff" });
  }
  if (!selectedFile.patch) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center text-gray-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No diff available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "(binary file or too large)" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 bg-gray-100 px-4 py-2 border-b z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-sm font-semibold truncate", title: selectedFile.filename, children: selectedFile.filename }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-1 overflow-auto",
        role: "region",
        "aria-label": `Diff content for ${selectedFile.filename}`,
        tabIndex: 0,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full border-collapse text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: diffLines.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          DiffLine,
          {
            line,
            language
          },
          index
        )) }) })
      }
    )
  ] });
}
export {
  DiffView
};
//# sourceMappingURL=DiffView-B4ZgFu3b.js.map
