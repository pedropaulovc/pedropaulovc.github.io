import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { Button } from "../../../components/Button/Button-BzCrBXpT.js";
import "../../../components/Input/Input-C8LmBRFx.js";
import "../../../components/Textarea/Textarea-8KdBG8UL.js";
import { cn } from "../../../utils/cn-Dtt8Ff7E.js";
import { CommentEditor } from "./CommentEditor-BJukrQVR.js";
import { CommentItem } from "./CommentItem-9ZfoYKWc.js";
function CommentThread({
  thread,
  currentUserLogin,
  onReply,
  onEdit,
  onDelete,
  onToggleResolved
}) {
  const [reply, setReply] = reactExports.useState("");
  const [isReplying, setIsReplying] = reactExports.useState(false);
  const [editingCommentId, setEditingCommentId] = reactExports.useState(null);
  const [editBody, setEditBody] = reactExports.useState("");
  const [isUpdating, setIsUpdating] = reactExports.useState(false);
  const threadLabel = reactExports.useMemo(
    () => `Thread on line ${String(thread.line)} (${thread.side === "LEFT" ? "deleted" : "added"} line)`,
    [thread.line, thread.side]
  );
  const handleReplySubmit = reactExports.useCallback(async () => {
    if (!reply.trim()) return;
    setIsReplying(true);
    await onReply(thread.id, reply.trim());
    setReply("");
    setIsReplying(false);
  }, [onReply, reply, thread.id]);
  const handleEditStart = reactExports.useCallback((commentId, body) => {
    setEditingCommentId(commentId);
    setEditBody(body);
  }, []);
  const handleEditCancel = reactExports.useCallback(() => {
    setEditingCommentId(null);
    setEditBody("");
  }, []);
  const handleEditSubmit = reactExports.useCallback(async () => {
    if (!editingCommentId) return;
    setIsUpdating(true);
    await onEdit(editingCommentId, editBody.trim());
    setIsUpdating(false);
    handleEditCancel();
  }, [editBody, editingCommentId, handleEditCancel, onEdit]);
  const handleDelete = reactExports.useCallback(
    async (commentId) => {
      const confirmed = window.confirm("Are you sure you want to delete this comment?");
      if (!confirmed) return;
      await onDelete(commentId);
    },
    [onDelete]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: cn(
        "rounded-md border border-gray-200 bg-white p-4 space-y-4 shadow-sm",
        thread.isResolved && "opacity-75"
      ),
      "aria-label": threadLabel,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Thread on line ",
              thread.line
            ] }),
            thread.isResolved && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs text-green-700", children: "Resolved" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              label: thread.isResolved ? "Unresolve" : "Resolve conversation",
              variant: "secondary",
              size: "sm",
              onClick: () => onToggleResolved(thread.id)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: thread.comments.map(
          (comment) => editingCommentId === comment.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            CommentEditor,
            {
              value: editBody,
              onChange: setEditBody,
              onSubmit: () => {
                void handleEditSubmit();
              },
              onCancel: handleEditCancel,
              isSubmitting: isUpdating,
              submitLabel: "Update",
              label: "Edit comment"
            },
            comment.id
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            CommentItem,
            {
              comment,
              isCurrentUser: comment.author.login === currentUserLogin,
              onEdit: () => handleEditStart(comment.id, comment.body),
              onDelete: () => {
                void handleDelete(comment.id);
              }
            },
            comment.id
          )
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CommentEditor,
          {
            value: reply,
            onChange: setReply,
            onSubmit: () => {
              void handleReplySubmit();
            },
            isSubmitting: isReplying,
            submitLabel: "Reply",
            label: "Reply to conversation"
          }
        ) })
      ]
    }
  );
}
export {
  CommentThread
};
//# sourceMappingURL=CommentThread-D39GhStc.js.map
