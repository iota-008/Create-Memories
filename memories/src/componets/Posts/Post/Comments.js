import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, removeComment } from "../../../actions/Comments";
import { Button, TextField, Typography, Divider } from "@material-ui/core";

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const comments = useSelector((state) => state.comments[postId] || []);
  const user = useSelector((state) => state.users)[0];
  const isOwn = (c) => user && c.userName === user.userName;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    dispatch(addComment(postId, content.trim()));
    setContent("");
  };

  const handleDelete = (id) => {
    dispatch(removeComment(postId, id));
  };

  return (
    <div style={{ width: "100%", marginTop: 8 }}>
      <form onSubmit={handleAdd} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" color="primary" variant="contained">
          Add
        </Button>
      </form>
      <Divider />
      <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
        {comments.length === 0 ? (
          <Typography variant="body2" color="textSecondary">
            No comments yet.
          </Typography>
        ) : (
          comments.map((c) => (
            <div key={c._id} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <div style={{ flex: 1 }}>
                <Typography variant="subtitle2">{c.userName}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {c.content}
                </Typography>
              </div>
              {isOwn(c) && (
                <Button size="small" onClick={() => handleDelete(c._id)}>
                  Delete
                </Button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
