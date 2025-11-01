import axios from "axios";
const url = "https://memories-backend-z796.onrender.com/comments";
var token = localStorage.getItem("auth-token");

export const fetchComments = (postId, page, limit) =>
  axios.get(`${url}/${postId}`, {
    params: { page, limit },
    headers: { "auth-token": `Bearer ${token}` },
  });

export const createComment = (postId, content) =>
  axios.post(
    `${url}/${postId}`,
    { content },
    { headers: { "auth-token": `Bearer ${token}` } }
  );

export const deleteComment = (id) =>
  axios.delete(`${url}/${id}`, { headers: { "auth-token": `Bearer ${token}` } });
