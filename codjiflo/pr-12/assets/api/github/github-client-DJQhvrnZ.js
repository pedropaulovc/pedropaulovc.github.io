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
    return this.request(endpoint);
  }
  async request(endpoint, options) {
    const token = useAuthStore.getState().token;
    if (!token) {
      throw new GitHubAPIError(401, "Unauthorized", "Not authenticated");
    }
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: options?.method ?? "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github.v3+json",
        ...options?.body ? { "Content-Type": "application/json" } : {}
      },
      body: options?.body ? JSON.stringify(options.body) : null
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
    if (response.status === 204) {
      return void 0;
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
//# sourceMappingURL=github-client-DJQhvrnZ.js.map
