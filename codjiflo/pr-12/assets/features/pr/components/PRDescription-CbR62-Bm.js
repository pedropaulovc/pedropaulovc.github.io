import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { Markdown } from "../../../node_modules/react-markdown/lib/index-Dn0CvPoN.js";
function PRDescription({ description }) {
  if (!description.trim()) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 text-gray-500 italic", children: "No description provided." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-sm max-w-none prose-headings:mt-4 prose-headings:mb-2 prose-p:my-2 prose-ul:my-2 prose-li:my-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Markdown,
    {
      components: {
        // Open links in new tab
        a: ({ children, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            ...props,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline",
            children
          }
        )
      },
      children: description
    }
  ) }) });
}
export {
  PRDescription
};
//# sourceMappingURL=PRDescription-CbR62-Bm.js.map
