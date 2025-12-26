import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime-CHpI9sbA.js";
import { cn } from "../../utils/cn-Dtt8Ff7E.js";
import { r as reactExports } from "../../_virtual/index-TeEMZYt5.js";
const Input = reactExports.forwardRef(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const generatedId = reactExports.useId();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: inputId,
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref,
          id: inputId,
          className: cn(
            "w-full px-3 py-2 border rounded-md shadow-sm transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "disabled:bg-gray-100 disabled:cursor-not-allowed",
            error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300",
            className
          ),
          "aria-invalid": error ? "true" : "false",
          "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          id: `${inputId}-error`,
          className: "mt-1 text-sm text-red-600",
          role: "alert",
          "aria-live": "polite",
          children: error
        }
      ),
      !error && helperText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${inputId}-helper`, className: "mt-1 text-sm text-gray-500", children: helperText })
    ] });
  }
);
Input.displayName = "Input";
export {
  Input
};
//# sourceMappingURL=Input-C8LmBRFx.js.map
