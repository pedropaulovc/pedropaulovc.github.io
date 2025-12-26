import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { Button } from "../../../components/Button/Button-BzCrBXpT.js";
import "../../../components/Input/Input-C8LmBRFx.js";
import { Textarea } from "../../../components/Textarea/Textarea-8KdBG8UL.js";
function CommentEditor({
  value,
  onChange,
  onSubmit,
  onCancel,
  isSubmitting = false,
  submitLabel = "Comment",
  label
}) {
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "Enter" && event.ctrlKey) {
        event.preventDefault();
        if (!value.trim()) {
          return;
        }
        onSubmit();
      }
    },
    [onSubmit, value]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        label,
        value,
        onChange: (event) => onChange(event.target.value),
        rows: 4,
        placeholder: "Leave a comment",
        onKeyDown: handleKeyDown
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          label: isSubmitting ? `${submitLabel}...` : submitLabel,
          onClick: onSubmit,
          disabled: isSubmitting || value.trim().length === 0
        }
      ),
      onCancel && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          label: "Cancel",
          variant: "secondary",
          onClick: onCancel,
          disabled: isSubmitting
        }
      ),
      isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-flex h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent",
          "aria-label": "Submitting comment"
        }
      )
    ] })
  ] });
}
export {
  CommentEditor
};
//# sourceMappingURL=CommentEditor-BJukrQVR.js.map
