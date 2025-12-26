import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { Button } from "../../../components/Button/Button-BzCrBXpT.js";
import "../../../components/Input/Input-C8LmBRFx.js";
import "../../../components/Textarea/Textarea-8KdBG8UL.js";
import { formatTimeAgo } from "../../../utils/time-BPyZGzPT.js";
import { Markdown } from "../../../node_modules/react-markdown/lib/index-Dn0CvPoN.js";
function CommentItem({ comment, isCurrentUser, onEdit, onDelete }) {
  const timeAgo = formatTimeAgo(comment.createdAt);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: "flex gap-3",
      "aria-label": `Comment by ${comment.author.login}, ${timeAgo}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: comment.author.avatarUrl,
            alt: `${comment.author.login} avatar`,
            className: "h-8 w-8 rounded-full border border-gray-200"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-900", children: comment.author.login }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: comment.createdAt.toISOString(), children: timeAgo }),
            comment.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-yellow-200 bg-yellow-50 px-2 py-0.5 text-xs text-yellow-800", children: "Pending" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-sm max-w-none prose-p:my-2 prose-pre:bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Markdown,
            {
              components: {
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
              children: comment.body
            }
          ) }),
          isCurrentUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                label: "Edit",
                variant: "secondary",
                size: "sm",
                className: "bg-transparent text-blue-600 hover:bg-blue-50",
                onClick: onEdit
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                label: "Delete",
                variant: "secondary",
                size: "sm",
                className: "bg-transparent text-red-600 hover:bg-red-50",
                onClick: onDelete
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  CommentItem
};
//# sourceMappingURL=CommentItem-9ZfoYKWc.js.map
