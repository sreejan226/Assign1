import React, { useState } from "react";

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");

  const createThread = () => {
    if (!newThreadTitle.trim() || !newThreadContent.trim()) return;

    const newThread = {
      id: Date.now(),
      title: newThreadTitle,
      content: newThreadContent,
      comments: [],
      upvotes: 0,
    };

    setThreads([newThread, ...threads]);
    setNewThreadTitle("");
    setNewThreadContent("");
  };

  const addComment = (threadId, commentText) => {
    if (!commentText.trim()) return;

    const updatedThreads = threads.map((thread) => {
      if (thread.id === threadId) {
        return {
          ...thread,
          comments: [...thread.comments, { id: Date.now(), text: commentText }],
        };
      }
      return thread;
    });

    setThreads(updatedThreads);
  };

  const upvoteThread = (threadId) => {
    const updatedThreads = threads.map((thread) => {
      if (thread.id === threadId) {
        return { ...thread, upvotes: thread.upvotes + 1 };
      }
      return thread;
    });

    setThreads(updatedThreads);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 font-sans">
      <h1 className="text-center font-bold text-4xl mb-9 text-blue-900 tracking-wide font-inter">
        Discussion Forum
      </h1>

      <div className="mb-10 p-8 border border-slate-200 rounded-2xl bg-white shadow-lg">
        <h2 className="font-semibold text-xl mb-5 text-blue-900 tracking-wide">
          Start a New Discussion
        </h2>
        <input
          type="text"
          placeholder="Thread title"
          value={newThreadTitle}
          onChange={(e) => setNewThreadTitle(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg border border-slate-300 text-base bg-slate-50 outline-none transition-colors font-inherit"
        />
        <textarea
          placeholder="Thread content"
          value={newThreadContent}
          onChange={(e) => setNewThreadContent(e.target.value)}
          className="w-full p-3 min-h-[90px] mb-3 rounded-lg border border-slate-300 text-base bg-slate-50 outline-none transition-colors font-inherit resize-y"
        />
        <button
          onClick={createThread}
          className="py-3 px-8 bg-gradient-to-r from-blue-700 to-blue-400 text-white border-none rounded-lg cursor-pointer font-semibold text-base shadow-md transition-colors font-inherit"
        >
          Create Thread
        </button>
      </div>

      {threads.length === 0 ? (
        <p className="text-center mt-16 text-gray-500 text-lg">
          No discussions yet. Start one!
        </p>
      ) : (
        threads.map((thread) => (
          <div
            key={thread.id}
            className="mb-10 p-7 border border-slate-200 rounded-xl bg-white shadow-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-900 m-0">
                {thread.title}
              </h3>
              <button
                onClick={() => upvoteThread(thread.id)}
                className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900 border-none rounded-lg cursor-pointer py-2 px-5 font-bold text-base shadow transition-colors font-inherit"
              >
                👍 {thread.upvotes}
              </button>
            </div>
            <p className="text-base text-gray-700 mb-2 mt-0">
              {thread.content}
            </p>

            <div className="mt-6 border-t border-slate-200 pt-4">
              <h4 className="font-medium text-base mb-2 text-blue-700">
                Comments
              </h4>
              {thread.comments.length === 0 ? (
                <p className="text-gray-400 italic mb-2">No comments yet.</p>
              ) : (
                thread.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-lime-50 p-3 rounded-lg mb-2 text-base text-slate-700 font-inherit"
                  >
                    {comment.text}
                  </div>
                ))
              )}
              <CommentInput threadId={thread.id} addComment={addComment} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const CommentInput = ({ threadId, addComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    addComment(threadId, commentText);
    setCommentText("");
  };

  return (
    <div className="mt-2 flex items-center gap-2">
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full p-3 rounded-lg border border-slate-300 text-base bg-slate-50 outline-none transition-colors font-inherit"
      />
      <button
        onClick={handleAddComment}
        className="py-2 px-6 bg-gradient-to-r from-green-600 to-green-400 text-white border-none rounded-lg cursor-pointer font-medium text-base ml-2 shadow transition-colors font-inherit"
      >
        Comment
      </button>
    </div>
  );
};

export default Forum;