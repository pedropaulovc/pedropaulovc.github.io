import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { useDiffStore } from "../../diff/stores/useDiffStore-rz8GIvY7.js";
import "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import "../../diff/components/FileListItem-B8WSY8ew.js";
import "../../../components/ui/Badge-Bxhxl-4W.js";
import "../../diff/components/DiffLine-BVf_8_ZC.js";
function useKeyboardShortcuts() {
  const selectNextFile = useDiffStore((s) => s.selectNextFile);
  const selectPreviousFile = useDiffStore((s) => s.selectPreviousFile);
  const handleKeyDown = reactExports.useCallback((event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable) {
      return;
    }
    switch (event.key) {
      // AC-1.5.1: j = Next file
      case "j":
        event.preventDefault();
        selectNextFile();
        break;
      // AC-1.5.1: k = Previous file
      case "k":
        event.preventDefault();
        selectPreviousFile();
        break;
      // AC-1.5.2: Space = Scroll down in diff view
      case " ": {
        event.preventDefault();
        const diffRegion = document.querySelector('[role="region"][aria-label^="Diff content"]');
        if (diffRegion) {
          diffRegion.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
        }
        break;
      }
    }
  }, [selectNextFile, selectPreviousFile]);
  reactExports.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
function getShortcutsList() {
  return [
    { key: "j", description: "Next file" },
    { key: "k", description: "Previous file" },
    { key: "Space", description: "Scroll down in diff view" }
  ];
}
export {
  getShortcutsList,
  useKeyboardShortcuts
};
//# sourceMappingURL=useKeyboardShortcuts-CzBAhmuE.js.map
