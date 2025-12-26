import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { Badge } from "../../../components/ui/Badge-Bxhxl-4W.js";
function PRMetadata({ pr }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: pr.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: pr.author.avatarUrl,
            alt: `${pr.author.displayName}'s avatar`,
            className: "w-8 h-8 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: pr.author.displayName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { state: pr.state }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "px-1.5 py-0.5 bg-gray-100 rounded text-xs", children: pr.sourceBranch }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "into" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "px-1.5 py-0.5 bg-gray-100 rounded text-xs", children: pr.targetBranch })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: pr.htmlUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "ml-auto text-blue-600 hover:text-blue-800 hover:underline text-sm",
          children: "View on GitHub"
        }
      )
    ] })
  ] });
}
export {
  PRMetadata
};
//# sourceMappingURL=PRMetadata-DWmcaYsq.js.map
