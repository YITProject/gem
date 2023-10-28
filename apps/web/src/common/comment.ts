const comments = [0, 0.2, 0.5, 0.8, 0.95];
const getCommentLevel = (sc) => {
  let commentIndex = "";
  // eslint-disable-next-line @typescript-eslint/no-for-in-array
  for (const c in comments) {
    if (sc >= comments[c]) {
      commentIndex = c;
    }
  }
  return commentIndex;
};
export default getCommentLevel;
