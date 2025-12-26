import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime-CHpI9sbA.js";
import { ReviewState } from "../../api/types-DC8cogV8.js";
import { cn } from "../../utils/cn-Dtt8Ff7E.js";
const STATE_STYLES = {
  [ReviewState.Open]: "bg-green-100 text-green-800 border-green-300",
  [ReviewState.Closed]: "bg-red-100 text-red-800 border-red-300",
  [ReviewState.Merged]: "bg-purple-100 text-purple-800 border-purple-300",
  [ReviewState.Draft]: "bg-gray-100 text-gray-800 border-gray-300"
};
const STATE_LABELS = {
  [ReviewState.Open]: "Open",
  [ReviewState.Closed]: "Closed",
  [ReviewState.Merged]: "Merged",
  [ReviewState.Draft]: "Draft"
};
function Badge({ state, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        STATE_STYLES[state],
        className
      ),
      "aria-label": `Pull request status: ${STATE_LABELS[state]}`,
      children: STATE_LABELS[state]
    }
  );
}
export {
  Badge
};
//# sourceMappingURL=Badge-Bxhxl-4W.js.map
