function parseGitHubPRUrl(url) {
  const regex = /(?:https?:\/\/)?github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/;
  const match = regex.exec(url);
  if (!match?.[1] || !match[2] || !match[3]) return null;
  const owner = match[1];
  const repo = match[2];
  const number = parseInt(match[3], 10);
  if (isNaN(number)) return null;
  return { owner, repo, number };
}
export {
  parseGitHubPRUrl
};
//# sourceMappingURL=parse-pr-url-pV5z854Y.js.map
