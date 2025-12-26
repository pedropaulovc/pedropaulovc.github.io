import { githubClient, GitHubAPIError } from "../../../api/github/github-client-DJQhvrnZ.js";
import { create } from "../../../node_modules/zustand/esm/react-8a6jTf2T.js";
const DEFAULT_CURRENT_USER = {
  id: "local-user",
  login: "you",
  avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4"
};
const createLocalId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${String(Date.now())}-${Math.random().toString(16).slice(2)}`;
};
const mapGitHubComment = (comment) => ({
  id: String(comment.id),
  body: comment.body,
  author: {
    id: String(comment.user.id),
    login: comment.user.login,
    avatarUrl: comment.user.avatar_url
  },
  createdAt: new Date(comment.created_at),
  updatedAt: new Date(comment.updated_at),
  path: comment.path,
  line: comment.line ?? 0,
  side: comment.side,
  position: comment.position,
  ...comment.in_reply_to_id ? { inReplyTo: String(comment.in_reply_to_id) } : {}
});
const groupCommentsIntoThreads = (comments) => {
  const commentMap = /* @__PURE__ */ new Map();
  comments.forEach((comment) => commentMap.set(comment.id, comment));
  const rootCache = /* @__PURE__ */ new Map();
  const getRootId = (comment) => {
    if (rootCache.has(comment.id)) {
      return rootCache.get(comment.id) ?? comment.id;
    }
    let current = comment;
    while (current.in_reply_to_id && commentMap.has(current.in_reply_to_id)) {
      current = commentMap.get(current.in_reply_to_id) ?? current;
    }
    rootCache.set(comment.id, current.id);
    return current.id;
  };
  const threadMap = /* @__PURE__ */ new Map();
  comments.forEach((comment) => {
    const rootId = getRootId(comment);
    const thread = threadMap.get(rootId);
    const mapped = mapGitHubComment(comment);
    if (thread) {
      thread.comments.push(mapped);
      return;
    }
    threadMap.set(rootId, {
      id: String(rootId),
      path: comment.path,
      line: comment.line ?? 0,
      side: comment.side,
      comments: [mapped],
      isResolved: false
    });
  });
  return Array.from(threadMap.values()).map((thread) => ({
    ...thread,
    comments: [...thread.comments].sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    )
  }));
};
const useCommentsStore = create((set, get) => ({
  threads: [],
  isLoading: false,
  error: null,
  announcement: "",
  currentUser: DEFAULT_CURRENT_USER,
  loadThreads: async (owner, repo, number) => {
    set({ isLoading: true, error: null });
    try {
      const data = await githubClient.fetch(
        `/repos/${owner}/${repo}/pulls/${String(number)}/comments`
      );
      set({ threads: groupCommentsIntoThreads(data), isLoading: false });
    } catch (err) {
      let message = "Failed to load comments";
      if (err instanceof GitHubAPIError) {
        message = err.message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      set({ error: message, isLoading: false });
    }
  },
  addComment: ({ path, line, side, body, position }) => {
    const { threads, currentUser } = get();
    const newComment = {
      id: createLocalId(),
      body,
      author: currentUser,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      path,
      line,
      side,
      position
    };
    const existingThreadIndex = threads.findIndex(
      (thread) => thread.path === path && thread.line === line && thread.side === side
    );
    if (existingThreadIndex >= 0) {
      const updatedThreads = threads.map(
        (thread, index) => index === existingThreadIndex ? { ...thread, comments: [...thread.comments, newComment] } : thread
      );
      set({ threads: updatedThreads, announcement: "Comment posted." });
      return Promise.resolve();
    }
    set({
      threads: [
        ...threads,
        {
          id: createLocalId(),
          path,
          line,
          side,
          comments: [newComment],
          isResolved: false
        }
      ],
      announcement: "Comment posted."
    });
    return Promise.resolve();
  },
  addReply: (threadId, body) => {
    const { threads, currentUser } = get();
    const updatedThreads = threads.map((thread) => {
      if (thread.id !== threadId) {
        return thread;
      }
      const lastComment = thread.comments[thread.comments.length - 1];
      const newComment = {
        id: createLocalId(),
        body,
        author: currentUser,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        path: thread.path,
        line: thread.line,
        side: thread.side,
        position: lastComment?.position ?? null,
        ...lastComment?.id ? { inReplyTo: lastComment.id } : {}
      };
      return { ...thread, comments: [...thread.comments, newComment] };
    });
    set({ threads: updatedThreads, announcement: "Reply posted." });
    return Promise.resolve();
  },
  editComment: (commentId, body) => {
    const { threads } = get();
    const updatedThreads = threads.map((thread) => ({
      ...thread,
      comments: thread.comments.map(
        (comment) => comment.id === commentId ? { ...comment, body, updatedAt: /* @__PURE__ */ new Date() } : comment
      )
    }));
    set({ threads: updatedThreads, announcement: "Comment updated." });
    return Promise.resolve();
  },
  deleteComment: (commentId) => {
    const { threads } = get();
    const updatedThreads = threads.map((thread) => ({
      ...thread,
      comments: thread.comments.filter((comment) => comment.id !== commentId)
    })).filter((thread) => thread.comments.length > 0);
    set({ threads: updatedThreads, announcement: "Comment deleted." });
    return Promise.resolve();
  },
  toggleResolved: (threadId) => {
    const { threads } = get();
    set({
      threads: threads.map(
        (thread) => thread.id === threadId ? { ...thread, isResolved: !thread.isResolved } : thread
      )
    });
  },
  clearError: () => set({ error: null }),
  clearAnnouncement: () => set({ announcement: "" }),
  reset: () => set({
    threads: [],
    isLoading: false,
    error: null,
    announcement: ""
  })
}));
export {
  useCommentsStore
};
//# sourceMappingURL=useCommentsStore-Dm4XHZea.js.map
