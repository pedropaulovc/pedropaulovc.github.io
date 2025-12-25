import { persist } from "../../../node_modules/zustand/esm/middleware-Cc0oixQf.js";
import { create } from "../../../node_modules/zustand/esm/react-CTbJOkEZ.js";
function isValidTokenFormat(token) {
  return token.startsWith("ghp_") || token.startsWith("github_pat_");
}
async function validateGitHubToken(token) {
  try {
    const response = await fetch("https://api.github.com/user", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github.v3+json"
      }
    });
    return response.ok;
  } catch {
    return false;
  }
}
const useAuthStore = create()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      error: null,
      isValidating: false,
      setToken: (token) => set({ token, isAuthenticated: true, error: null }),
      logout: () => set({ token: null, isAuthenticated: false, error: null }),
      clearError: () => set({ error: null }),
      validateToken: async (token) => {
        set({ error: null, isValidating: true });
        if (!isValidTokenFormat(token)) {
          set({ error: 'Invalid token format. Token must start with "ghp_" or "github_pat_"', isValidating: false });
          return false;
        }
        const isValid = await validateGitHubToken(token);
        if (isValid) {
          set({ token, isAuthenticated: true, error: null, isValidating: false });
          return true;
        } else {
          set({ error: "Authentication failed. Please check your token.", isValidating: false });
          return false;
        }
      }
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token, isAuthenticated: state.isAuthenticated })
    }
  )
);
export {
  isValidTokenFormat,
  useAuthStore
};
//# sourceMappingURL=useAuthStore-CtBJEwhz.js.map
