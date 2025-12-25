import { githubClient } from "./github-client-CQStUxWT.js";
import { ReviewState } from "../types-DC8cogV8.js";
class GitHubReviewBackend {
  async getReview(owner, repo, number) {
    const data = await githubClient.fetch(
      `/repos/${owner}/${repo}/pulls/${String(number)}`
    );
    return {
      id: data.id,
      number: data.number,
      title: data.title,
      description: data.body ?? "",
      state: this.mapState(data.state, data.merged, data.draft),
      author: {
        id: String(data.user.id),
        displayName: data.user.login,
        avatarUrl: data.user.avatar_url
      },
      sourceBranch: data.head.ref,
      targetBranch: data.base.ref,
      htmlUrl: data.html_url,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }
  mapState(state, merged, draft) {
    if (draft) return ReviewState.Draft;
    if (merged) return ReviewState.Merged;
    return state === "open" ? ReviewState.Open : ReviewState.Closed;
  }
}
export {
  GitHubReviewBackend
};
//# sourceMappingURL=review-backend-CD3ZICDh.js.map
