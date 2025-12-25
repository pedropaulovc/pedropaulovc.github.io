import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { useDiffStore } from "../stores/useDiffStore-rz8GIvY7.js";
import { FileListItem } from "./FileListItem-B8WSY8ew.js";
import "../../../components/ui/Badge-Bxhxl-4W.js";
import { Skeleton } from "../../../components/ui/Skeleton-R4IAkZDg.js";
function FileList() {
  const { files, selectedFileIndex, selectFile, isLoading, error } = useDiffStore();
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-red-600", role: "alert", "aria-live": "polite", children: error });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3", role: "status", "aria-label": "Loading files", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-5 rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 flex-1" })
    ] }, i)) });
  }
  if (files.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-gray-500 text-center", children: "No files changed" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Changed files", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { role: "list", className: "divide-y divide-gray-200", children: files.map((file, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    FileListItem,
    {
      file,
      isSelected: index === selectedFileIndex,
      onClick: () => selectFile(index)
    },
    file.filename
  )) }) });
}
export {
  FileList
};
//# sourceMappingURL=FileList-99l8qG6Z.js.map
