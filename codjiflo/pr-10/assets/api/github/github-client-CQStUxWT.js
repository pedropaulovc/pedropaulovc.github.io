import { useAuthStore } from "../../features/auth/stores/useAuthStore-BTfEOcTv.js";
class GitHubAPIError extends Error {
  constructor(status, statusText, message) {
    super(message);
    this.status = status;
    this.statusText = statusText;
    this.name = "GitHubAPIError";
  }
}
class GitHubClient {
  baseURL = "https://api.github.com";
  async fetch(endpoint) {
    const token = useAuthStore.getState().token;
    if (!token) {
      throw new GitHubAPIError(401, "Unauthorized", "Not authenticated");
    }
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github.v3+json"
      }
    });
    if (!response.ok) {
      let errorMessage = response.statusText;
      try {
        const errorData = await response.json();
        if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch {
      }
      throw new GitHubAPIError(
        response.status,
        response.statusText,
        errorMessage
      );
    }
    return response.json();
  }
}
const githubClient = new GitHubClient();
export {
  GitHubAPIError,
  GitHubClient,
  githubClient
};
//# sourceMappingURL=github-client-CQStUxWT.js.map
