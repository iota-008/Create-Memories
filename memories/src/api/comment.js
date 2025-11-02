import axios from "axios";
const API_BASE = process.env.REACT_APP_API_URL || "https://memories-api.duckdns.org";
const url = `${API_BASE}/comments`;

const authHeaders = () => {
  const token = localStorage.getItem("auth-token");
  return token ? { headers: { "auth-token": `Bearer ${token}` } } : {};
};

export const fetchComments = (postId, page, limit) =>
  axios.get(`${url}/${postId}`, { params: { page, limit }, ...authHeaders() });

export const createComment = (postId, content) =>
  axios.post(`${url}/${postId}`, { content }, authHeaders());

export const deleteComment = (id) =>
  axios.delete(`${url}/${id}`, authHeaders());
