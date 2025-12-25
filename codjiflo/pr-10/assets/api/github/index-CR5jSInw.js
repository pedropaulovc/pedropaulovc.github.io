import { GitHubReviewBackend } from "./review-backend-CD3ZICDh.js";
import { GitHubFileBackend } from "./file-backend-dG1QI1qP.js";
import "../../features/auth/stores/useAuthStore-BTfEOcTv.js";
function createGitHubBackendFactory() {
  return {
    review: new GitHubReviewBackend(),
    file: new GitHubFileBackend()
  };
}
const githubBackends = createGitHubBackendFactory();
export {
  createGitHubBackendFactory,
  githubBackends
};
//# sourceMappingURL=index-CR5jSInw.js.map
