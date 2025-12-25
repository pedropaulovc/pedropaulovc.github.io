import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime-CHpI9sbA.js";
function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button"
}) {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type,
      onClick,
      disabled,
      className: `${baseClasses} ${variantClasses[variant]}`,
      children: label
    }
  );
}
export {
  Button
};
//# sourceMappingURL=Button-DwkFBAjf.js.map
