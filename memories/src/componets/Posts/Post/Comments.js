import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, removeComment } from "../../../actions/Comments";
import { TextField, Typography, IconButton, Paper } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

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

  const tint = 'linear-gradient(90deg, rgba(139,92,246,0.10) 0%, rgba(236,72,153,0.10) 50%, rgba(249,115,22,0.10) 100%)';
  const border = '1px solid rgba(139,92,246,0.25)';
  const sendBg = 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)';

  return (
    <div style={{ width: "100%", marginTop: 8 }}>
      <Paper elevation={0} style={{ padding: 8, borderRadius: 14, background: tint, border }}>
        <form onSubmit={handleAdd} style={{ display: "flex", gap: 8, alignItems: 'center' }}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Write a comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <IconButton type="submit" aria-label="send" style={{ background: sendBg, color: '#fff' }} size="small">
            <SendIcon fontSize="small" />
          </IconButton>
        </form>
      </Paper>
      <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
        {comments.length === 0 ? (
          <Typography variant="body2" color="textSecondary">
            No comments yet.
          </Typography>
        ) : (
          comments.map((c) => (
            <Paper key={c._id} elevation={0} style={{ padding: 10, borderRadius: 12, background: tint, border }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle2" style={{ fontWeight: 700 }}>{c.userName}</Typography>
                  <Typography variant="body2" color="textSecondary">{c.content}</Typography>
                </div>
                {isOwn(c) && (
                  <IconButton size="small" aria-label="delete" onClick={() => handleDelete(c._id)} style={{ background: 'rgba(249,115,22,0.15)' }}>
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                )}
              </div>
            </Paper>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
