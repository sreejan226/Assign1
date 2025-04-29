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
    <div style={styles.page}>
      <h1 style={styles.heading}>Discussion Forum</h1>


      <div style={styles.newThreadBox}>
        <h2 style={styles.subheading}>Start a New Discussion</h2>
        <input
          type="text"
          placeholder="Thread title"
          value={newThreadTitle}
          onChange={(e) => setNewThreadTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Thread content"
          value={newThreadContent}
          onChange={(e) => setNewThreadContent(e.target.value)}
          style={styles.textarea}
        />
        <button onClick={createThread} style={styles.button}>
          Create Thread
        </button>
      </div>

      {threads.length === 0 ? (
        <p style={styles.noThreads}>No discussions yet. Start one!</p>
      ) : (
        threads.map((thread) => (
          <div key={thread.id} style={styles.threadCard}>
            <div style={styles.threadHeader}>
              <h3 style={styles.threadTitle}>{thread.title}</h3>
              <button onClick={() => upvoteThread(thread.id)} style={styles.upvoteButton}>
                👍 {thread.upvotes}
              </button>
            </div>
            <p style={styles.threadContent}>{thread.content}</p>

            <div style={styles.commentSection}>
              <h4 style={styles.commentHeading}>Comments</h4>
              {thread.comments.length === 0 ? (
                <p style={styles.noComments}>No comments yet.</p>
              ) : (
                thread.comments.map((comment) => (
                  <div key={comment.id} style={styles.comment}>
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
    <div style={styles.commentInput}>
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAddComment} style={styles.smallButton}>
        Comment
      </button>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 16px 80px 16px",
    fontFamily: "'Segoe UI', 'Inter', Arial, sans-serif",
    background: "linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "2.7rem",
    marginBottom: "36px",
    color: "#1a237e",
    letterSpacing: "1px",
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
  },
  subheading: {
    fontWeight: 600,
    fontSize: "1.3rem",
    marginBottom: "18px",
    color: "#263159",
    letterSpacing: "0.5px",
  },
  newThreadBox: {
    marginBottom: "38px",
    padding: "32px",
    border: "1px solid #e3e8ee",
    borderRadius: "18px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 16px 0 rgba(60,72,88,0.07)",
  },
  input: {
    width: "100%",
    padding: "13px",
    marginBottom: "14px",
    borderRadius: "9px",
    border: "1px solid #cfd8dc",
    fontSize: "1rem",
    background: "#f8fafc",
    outline: "none",
    transition: "border 0.2s",
    fontFamily: "inherit",
  },
  textarea: {
    width: "100%",
    padding: "13px",
    minHeight: "90px",
    marginBottom: "14px",
    borderRadius: "9px",
    border: "1px solid #cfd8dc",
    fontSize: "1rem",
    background: "#f8fafc",
    outline: "none",
    transition: "border 0.2s",
    fontFamily: "inherit",
    resize: "vertical",
  },
  button: {
    padding: "13px 32px",
    background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
    boxShadow: "0 2px 8px 0 rgba(25,118,210,0.08)",
    transition: "background 0.2s",
    fontFamily: "inherit",
  },
  smallButton: {
    padding: "10px 22px",
    background: "linear-gradient(90deg, #43a047 0%, #66bb6a 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "0.98rem",
    marginLeft: "10px",
    boxShadow: "0 1px 4px 0 rgba(67,160,71,0.08)",
    transition: "background 0.2s",
    fontFamily: "inherit",
  },
  threadCard: {
    marginBottom: "38px",
    padding: "28px",
    border: "1px solid #e3e8ee",
    borderRadius: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 16px 0 rgba(60,72,88,0.07)",
  },
  threadHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  threadTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#263159",
    margin: 0,
  },
  threadContent: {
    fontSize: "1.05rem",
    color: "#374151",
    marginBottom: "10px",
    marginTop: "0",
  },
  upvoteButton: {
    background: "linear-gradient(90deg, #ffd600 0%, #ffb300 100%)",
    color: "#222",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px 18px",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 1px 4px 0 rgba(255,214,0,0.08)",
    transition: "background 0.2s",
    fontFamily: "inherit",
  },
  commentSection: {
    marginTop: "22px",
    borderTop: "1px solid #e3e8ee",
    paddingTop: "14px",
  },
  commentHeading: {
    fontWeight: 500,
    fontSize: "1.05rem",
    marginBottom: "10px",
    color: "#1976d2",
  },
  comment: {
    backgroundColor: "#f1f8e9",
    padding: "12px",
    borderRadius: "9px",
    marginBottom: "10px",
    fontSize: "1rem",
    color: "#37474f",
    fontFamily: "inherit",
  },
  commentInput: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  noThreads: {
    textAlign: "center",
    marginTop: "60px",
    color: "#789",
    fontSize: "1.2rem",
  },
  noComments: {
    color: "#aaa",
    fontStyle: "italic",
    marginBottom: "10px",
  },
};

export default Forum;