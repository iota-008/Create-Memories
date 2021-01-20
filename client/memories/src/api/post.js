import axios from "axios";
// const url = "https://create-memory.herokuapp.com/posts";
const url = "https://create-your-memories.herokuapp.com/posts";
var token = localStorage.getItem("auth-token");
// console.log("token : ", token);

export const fetchPosts = () =>
	axios.get(url, { headers: { "auth-token": `Bearer ${token}` } });
export const createPost = (newPost) =>
	axios.post(url, newPost, { headers: { "auth-token": `Bearer ${token}` } });
export const updatePost = (id, updatedPost) =>
	axios.patch(`${url}/${id}`, updatedPost, {
		headers: { "auth-token": `Bearer ${token}` },
	});
export const deletePost = (id) =>
	axios.delete(`${url}/${id}`, {
		headers: { "auth-token": `Bearer ${token}` },
	});
export const likePost = (id) =>
	axios.patch(`${url}/${id}/likePost`,{},  {
		headers: { "auth-token": `Bearer ${token}` },
	});
