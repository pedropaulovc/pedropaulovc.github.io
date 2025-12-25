import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { getShortcutsList } from "../hooks/useKeyboardShortcuts-CzBAhmuE.js";
function ShortcutsModal({ isOpen, onClose }) {
  const modalRef = reactExports.useRef(null);
  const shortcuts = getShortcutsList();
  const handleKeyDown = reactExports.useCallback((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, [onClose]);
  reactExports.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus();
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "shortcuts-title",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-black/50",
            onClick: onClose,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: modalRef,
            tabIndex: -1,
            className: "relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "shortcuts-title", className: "text-xl font-bold mb-4", children: "Keyboard Shortcuts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Key" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Action" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: shortcuts.map(({ key, description }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-2 py-1 bg-gray-100 rounded text-sm font-mono", children: key }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-gray-700", children: description })
                ] }, key)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  children: "Close"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  ShortcutsModal
};
//# sourceMappingURL=ShortcutsModal-BfcnHhLH.js.map
