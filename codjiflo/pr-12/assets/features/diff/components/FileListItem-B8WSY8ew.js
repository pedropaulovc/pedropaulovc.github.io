import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { FileChangeStatus } from "../../../api/types-DC8cogV8.js";
import { cn } from "../../../utils/cn-Dtt8Ff7E.js";
const CHANGE_TYPE_ICONS = {
  [FileChangeStatus.Added]: "+",
  [FileChangeStatus.Modified]: "M",
  [FileChangeStatus.Deleted]: "−",
  [FileChangeStatus.Renamed]: "R"
};
const CHANGE_TYPE_COLORS = {
  [FileChangeStatus.Added]: "text-green-700 bg-green-100",
  [FileChangeStatus.Modified]: "text-blue-700 bg-blue-100",
  [FileChangeStatus.Deleted]: "text-red-700 bg-red-100",
  [FileChangeStatus.Renamed]: "text-purple-700 bg-purple-100"
};
const CHANGE_TYPE_LABELS = {
  [FileChangeStatus.Added]: "added",
  [FileChangeStatus.Modified]: "modified",
  [FileChangeStatus.Deleted]: "deleted",
  [FileChangeStatus.Renamed]: "renamed"
};
function FileListItem({ file, isSelected, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      type: "button",
      "aria-selected": isSelected,
      "aria-label": `${file.filename}, ${CHANGE_TYPE_LABELS[file.status]}, ${String(file.additions)} additions, ${String(file.deletions)} deletions`,
      className: cn(
        "w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
        isSelected && "bg-blue-50 border-l-4 border-blue-600"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "flex items-center justify-center w-5 h-5 rounded text-xs font-bold",
                CHANGE_TYPE_COLORS[file.status]
              ),
              "aria-hidden": "true",
              children: CHANGE_TYPE_ICONS[file.status]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm font-mono truncate", title: file.filename, children: file.filename })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-600", children: [
            "+",
            file.additions
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
            "−",
            file.deletions
          ] })
        ] })
      ]
    }
  ) });
}
export {
  FileListItem
};
//# sourceMappingURL=FileListItem-B8WSY8ew.js.map
