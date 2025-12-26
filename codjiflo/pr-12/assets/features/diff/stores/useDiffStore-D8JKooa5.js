import { githubBackends } from "../../../api/github/index-BYZIwKNE.js";
import { GitHubAPIError } from "../../../api/github/github-client-DJQhvrnZ.js";
import { create } from "../../../node_modules/zustand/esm/react-8a6jTf2T.js";
const useDiffStore = create((set, get) => ({
  files: [],
  selectedFileIndex: 0,
  isLoading: false,
  error: null,
  loadFiles: async (owner, repo, number) => {
    set({ isLoading: true, error: null });
    try {
      const files = await githubBackends.file.getFiles(owner, repo, number);
      set({ files, isLoading: false, selectedFileIndex: 0 });
    } catch (err) {
      let message = "Failed to load files";
      if (err instanceof GitHubAPIError) {
        if (err.status === 404) {
          message = "Pull request not found";
        } else if (err.status === 401 || err.status === 403) {
          message = "Access denied";
        } else {
          message = err.message;
        }
      } else if (err instanceof Error) {
        message = err.message;
      }
      set({ error: message, isLoading: false, files: [] });
    }
  },
  selectFile: (index) => {
    const { files } = get();
    if (index >= 0 && index < files.length) {
      set({ selectedFileIndex: index });
    }
  },
  selectNextFile: () => {
    const { selectedFileIndex, files } = get();
    if (selectedFileIndex < files.length - 1) {
      set({ selectedFileIndex: selectedFileIndex + 1 });
    }
  },
  selectPreviousFile: () => {
    const { selectedFileIndex } = get();
    if (selectedFileIndex > 0) {
      set({ selectedFileIndex: selectedFileIndex - 1 });
    }
  },
  reset: () => set({ files: [], selectedFileIndex: 0, isLoading: false, error: null })
}));
export {
  useDiffStore
};
//# sourceMappingURL=useDiffStore-D8JKooa5.js.map
