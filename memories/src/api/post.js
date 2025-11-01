import axios from "axios";
const API_BASE = process.env.REACT_APP_API_URL || "https://memories-backend-z796.onrender.com";
const url = `${API_BASE}/posts`;

const authHeaders = () => {
  const token = localStorage.getItem("auth-token");
  return token ? { headers: { "auth-token": `Bearer ${token}` } } : {};
};

//* api for fetching posts
export const fetchPosts = () => axios.get(url, authHeaders());

//* api to create a post
export const createPost = ( newPost ) => axios.post( url, newPost, authHeaders() );

//* api to update posts
export const updatePost = ( id, updatedPost ) => axios.patch( `${ url }/${ id }`, updatedPost, authHeaders() );

//* api to delete posts
export const deletePost = ( id ) => axios.delete( `${ url }/${ id }`, authHeaders() );

//* api to like posts
export const likePost = ( id ) =>
  axios.patch( `${ url }/${ id }/likePost`, {}, authHeaders() );

//* api to react to posts (emoji reactions)
export const reactToPost = (id, type) =>
  axios.patch(`${url}/${id}/react`, { type }, authHeaders());