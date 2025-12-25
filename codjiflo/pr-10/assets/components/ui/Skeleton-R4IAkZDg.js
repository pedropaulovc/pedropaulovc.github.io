import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime-CHpI9sbA.js";
import { cn } from "../../utils/cn-Dtt8Ff7E.js";
function Skeleton({ className, width, height }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "animate-pulse bg-gray-200 rounded",
        className
      ),
      style: { width, height },
      role: "status",
      "aria-label": "Loading"
    }
  );
}
function SkeletonText({ className, lines = 1 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("space-y-2", className), role: "status", "aria-label": "Loading content", children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "animate-pulse bg-gray-200 rounded h-4",
      style: { width: i === lines - 1 ? "60%" : "100%" }
    },
    i
  )) });
}
export {
  Skeleton,
  SkeletonText
};
//# sourceMappingURL=Skeleton-R4IAkZDg.js.map
