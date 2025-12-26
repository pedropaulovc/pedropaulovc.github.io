import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { useDiffStore } from "../stores/useDiffStore-D8JKooa5.js";
import { detectLanguage, parsePatch } from "../utils/parse-patch-CFqWOftJ.js";
import { getDiffLinePosition } from "../utils/comment-position-V4TRK2zd.js";
import { DiffLine } from "./DiffLine-x1z5a9IJ.js";
import "../../../components/ui/Badge-Bxhxl-4W.js";
import { Skeleton } from "../../../components/ui/Skeleton-R4IAkZDg.js";
import { CommentThread } from "../../comments/components/CommentThread-D39GhStc.js";
import { CommentEditor } from "../../comments/components/CommentEditor-BJukrQVR.js";
import { useCommentsStore } from "../../comments/stores/useCommentsStore-Dm4XHZea.js";
function DiffView() {
  const { files, selectedFileIndex, isLoading } = useDiffStore();
  const {
    threads,
    isLoading: isLoadingComments,
    error: commentsError,
    announcement,
    currentUser,
    addComment,
    addReply,
    editComment,
    deleteComment,
    toggleResolved,
    clearAnnouncement
  } = useCommentsStore();
  const selectedFile = files[selectedFileIndex];
  const patch = selectedFile?.patch;
  const filename = selectedFile?.filename;
  const { diffLines, language } = reactExports.useMemo(() => {
    if (!patch) {
      return { diffLines: [], language: "plaintext" };
    }
    return {
      diffLines: parsePatch(patch),
      language: detectLanguage(filename ?? "")
    };
  }, [patch, filename]);
  const threadsForFile = reactExports.useMemo(() => {
    if (!filename) return [];
    return threads.filter((thread) => thread.path === filename).sort(
      (a, b) => (a.comments[0]?.createdAt.getTime() ?? 0) - (b.comments[0]?.createdAt.getTime() ?? 0)
    );
  }, [threads, filename]);
  const threadsByKey = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    threadsForFile.forEach((thread) => {
      const key = `${String(thread.line)}-${thread.side}`;
      const existing = map.get(key) ?? [];
      map.set(key, [...existing, thread]);
    });
    return map;
  }, [threadsForFile]);
  reactExports.useEffect(() => {
    if (!announcement) return;
    const timer = window.setTimeout(() => {
      clearAnnouncement();
    }, 4e3);
    return () => window.clearTimeout(timer);
  }, [announcement, clearAnnouncement]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-2", role: "status", "aria-label": "Loading diff", children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }, i)) });
  }
  if (!selectedFile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full text-gray-500 p-8", children: "Select a file to view diff" });
  }
  if (!selectedFile.patch) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center text-gray-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No diff available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "(binary file or too large)" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sr-only", role: "status", "aria-live": "polite", children: announcement }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 bg-gray-100 px-4 py-2 border-b z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-sm font-semibold truncate", title: selectedFile.filename, children: selectedFile.filename }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex-1 overflow-auto",
        role: "region",
        "aria-label": `Diff content for ${selectedFile.filename}`,
        tabIndex: 0,
        children: [
          commentsError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 text-sm text-red-600 bg-red-50 border-b border-red-100", children: commentsError }),
          isLoadingComments && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 text-sm text-gray-500 border-b border-gray-100", children: "Loading comments..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DiffTable,
            {
              diffLines,
              language,
              filename,
              threadsByKey,
              currentUserLogin: currentUser.login,
              addComment,
              addReply,
              editComment,
              deleteComment,
              toggleResolved
            },
            filename ?? "diff-table"
          )
        ]
      }
    )
  ] });
}
function DiffTable({
  diffLines,
  language,
  filename,
  threadsByKey,
  currentUserLogin,
  addComment,
  addReply,
  editComment,
  deleteComment,
  toggleResolved
}) {
  const [draftLineIndex, setDraftLineIndex] = reactExports.useState(null);
  const [draftBody, setDraftBody] = reactExports.useState("");
  const [isSubmittingDraft, setIsSubmittingDraft] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full border-collapse text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: diffLines.map((line, index) => {
    const leftKey = line.oldLineNumber ? `${String(line.oldLineNumber)}-LEFT` : null;
    const rightKey = line.newLineNumber ? `${String(line.newLineNumber)}-RIGHT` : null;
    const lineThreads = [
      ...leftKey ? threadsByKey.get(leftKey) ?? [] : [],
      ...rightKey ? threadsByKey.get(rightKey) ?? [] : []
    ];
    const showCommentButton = line.type !== "header";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DiffLine,
        {
          line,
          language,
          showCommentButton,
          onStartComment: () => {
            setDraftLineIndex(index);
            setDraftBody("");
          }
        }
      ),
      draftLineIndex === index && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "bg-gray-50 px-8 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CommentEditor,
        {
          value: draftBody,
          onChange: setDraftBody,
          onSubmit: () => {
            void (async () => {
              const targetLine = diffLines[index];
              const side = targetLine?.type === "deletion" ? "LEFT" : "RIGHT";
              const lineNumber = side === "LEFT" ? targetLine?.oldLineNumber : targetLine?.newLineNumber;
              const position = getDiffLinePosition(diffLines, index);
              if (!targetLine || !lineNumber || !filename) {
                return;
              }
              setIsSubmittingDraft(true);
              await addComment({
                path: filename,
                line: lineNumber,
                side,
                body: draftBody.trim(),
                position
              });
              setIsSubmittingDraft(false);
              setDraftLineIndex(null);
              setDraftBody("");
            })();
          },
          onCancel: () => {
            setDraftLineIndex(null);
            setDraftBody("");
          },
          isSubmitting: isSubmittingDraft,
          label: "Add comment"
        }
      ) }) }),
      lineThreads.map((thread) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "bg-gray-50 px-8 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CommentThread,
        {
          thread,
          currentUserLogin,
          onReply: addReply,
          onEdit: editComment,
          onDelete: deleteComment,
          onToggleResolved: toggleResolved
        }
      ) }) }, `thread-${thread.id}`))
    ] }, `${String(index)}-${line.type}`);
  }) }) });
}
export {
  DiffView
};
//# sourceMappingURL=DiffView-B5q9SfKa.js.map
