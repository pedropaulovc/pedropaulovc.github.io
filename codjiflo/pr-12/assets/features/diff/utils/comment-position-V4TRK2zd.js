function getDiffLinePosition(diffLines, targetIndex) {
  if (targetIndex < 0 || targetIndex >= diffLines.length) {
    return null;
  }
  const targetLine = diffLines[targetIndex];
  if (!targetLine || targetLine.type === "header") {
    return null;
  }
  let position = 0;
  for (let i = 0; i <= targetIndex; i += 1) {
    if (diffLines[i]?.type !== "header") {
      position += 1;
    }
  }
  return position;
}
export {
  getDiffLinePosition
};
//# sourceMappingURL=comment-position-V4TRK2zd.js.map
