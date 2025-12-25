import { githubClient } from "./github-client-CQStUxWT.js";
import { FileChangeStatus } from "../types-DC8cogV8.js";
class GitHubFileBackend {
  async getFiles(owner, repo, number) {
    const data = await githubClient.fetch(
      `/repos/${owner}/${repo}/pulls/${String(number)}/files`
    );
    return data.map((file) => {
      const result = {
        filename: file.filename,
        status: this.mapStatus(file.status),
        additions: file.additions,
        deletions: file.deletions,
        changes: file.changes,
        patch: file.patch ?? ""
      };
      if (file.previous_filename) {
        result.previousFilename = file.previous_filename;
      }
      return result;
    });
  }
  mapStatus(status) {
    switch (status) {
      case "added":
        return FileChangeStatus.Added;
      case "removed":
        return FileChangeStatus.Deleted;
      case "renamed":
        return FileChangeStatus.Renamed;
      default:
        return FileChangeStatus.Modified;
    }
  }
}
export {
  GitHubFileBackend
};
//# sourceMappingURL=file-backend-dG1QI1qP.js.map
