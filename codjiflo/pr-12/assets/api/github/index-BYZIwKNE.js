import { GitHubReviewBackend } from "./review-backend-BTbfKaDn.js";
import { GitHubFileBackend } from "./file-backend-CGydudA5.js";
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
//# sourceMappingURL=index-BYZIwKNE.js.map
