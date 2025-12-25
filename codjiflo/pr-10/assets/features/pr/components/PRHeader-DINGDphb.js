import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { usePRStore } from "../stores/usePRStore-IJee85-Y.js";
import "../../../components/ui/Badge-Bxhxl-4W.js";
import { Skeleton, SkeletonText } from "../../../components/ui/Skeleton-R4IAkZDg.js";
import { PRMetadata } from "./PRMetadata-DWmcaYsq.js";
import { PRDescription } from "./PRDescription-CbR62-Bm.js";
function PRHeader() {
  const { currentPR, isLoading, error } = usePRStore();
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-white border-b", role: "alert", "aria-live": "polite", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600", children: error }) });
  }
  if (isLoading || !currentPR) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-3/4 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-16 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonText, { lines: 3 })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PRMetadata, { pr: currentPR }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PRDescription, { description: currentPR.description })
  ] });
}
export {
  PRHeader
};
//# sourceMappingURL=PRHeader-DINGDphb.js.map
