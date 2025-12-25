import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../_virtual/index-TeEMZYt5.js";
import { usePRStore } from "../features/pr/stores/usePRStore-IJee85-Y.js";
import "../components/ui/Badge-Bxhxl-4W.js";
import { PRHeader } from "../features/pr/components/PRHeader-DINGDphb.js";
import { useDiffStore } from "../features/diff/stores/useDiffStore-rz8GIvY7.js";
import { FileList } from "../features/diff/components/FileList-99l8qG6Z.js";
import "../features/diff/components/FileListItem-B8WSY8ew.js";
import { DiffView } from "../features/diff/components/DiffView-1r_I20OX.js";
import "../features/diff/components/DiffLine-BVf_8_ZC.js";
import { useKeyboardShortcuts } from "../features/keyboard/hooks/useKeyboardShortcuts-CzBAhmuE.js";
import { ShortcutsModal } from "../features/keyboard/components/ShortcutsModal-BfcnHhLH.js";
import { useParams, useNavigate } from "../node_modules/react-router/dist/development/chunk-JMJ3UQ3L-BIzjMsvR.js";
function PullRequestView() {
  const { owner, repo, number } = useParams();
  const navigate = useNavigate();
  const { loadPR, reset: resetPR } = usePRStore();
  const { loadFiles, reset: resetDiff } = useDiffStore();
  const [showShortcuts, setShowShortcuts] = reactExports.useState(false);
  useKeyboardShortcuts();
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        const target = e.target;
        if (!(target instanceof HTMLInputElement) && !(target instanceof HTMLTextAreaElement) && !target.isContentEditable) {
          e.preventDefault();
          setShowShortcuts(true);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  reactExports.useEffect(() => {
    if (!owner || !repo || !number) return;
    const prNumber = parseInt(number, 10);
    if (isNaN(prNumber)) return;
    void loadPR(owner, repo, prNumber);
    void loadFiles(owner, repo, prNumber);
    return () => {
      resetPR();
      resetDiff();
    };
  }, [owner, repo, number, loadPR, loadFiles, resetPR, resetDiff]);
  const handleBackToDashboard = reactExports.useCallback(() => {
    void navigate("/dashboard");
  }, [navigate]);
  if (!owner || !repo || !number) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-red-600 mb-2", children: "Invalid URL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Missing required parameters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleBackToDashboard,
          className: "text-blue-600 hover:underline",
          children: "Back to Dashboard"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-screen flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-white border-b px-4 py-2 flex items-center gap-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleBackToDashboard,
          className: "text-gray-600 hover:text-gray-900",
          "aria-label": "Back to dashboard",
          children: "← Back"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500 truncate", children: [
        owner,
        "/",
        repo,
        "#",
        number
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setShowShortcuts(true),
          className: "ml-auto text-sm text-gray-500 hover:text-gray-900",
          "aria-label": "Show keyboard shortcuts",
          children: "? Shortcuts"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-80 shrink-0 flex flex-col bg-white border-r overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PRHeader, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileList, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DiffView, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShortcutsModal,
      {
        isOpen: showShortcuts,
        onClose: () => setShowShortcuts(false)
      }
    )
  ] });
}
export {
  PullRequestView
};
//# sourceMappingURL=PullRequestView-YnDijJgK.js.map
