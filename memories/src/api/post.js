import axios from "axios";
const url = "https://memories-backend-z796.onrender.com/posts";
var token = localStorage.getItem("auth-token");

//* api for fetching posts
export const fetchPosts = () =>
	axios.get(url, { headers: { "auth-token": `Bearer ${token}` } });

//* api to create a post
export const createPost = (newPost) =>
	axios.post(url, newPost, { headers: { "auth-token": `Bearer ${token}` } });

//* api to update posts
export const updatePost = (id, updatedPost) =>
	axios.patch(`${url}/${id}`, updatedPost, {
		headers: { "auth-token": `Bearer ${token}` },
	});

//* api to delete posts
export const deletePost = (id) =>
	axios.delete(`${url}/${id}`, {
		headers: { "auth-token": `Bearer ${token}` },
	});

//* api to like posts
export const likePost = (id) =>
	axios.patch(
		`${url}/${id}/likePost`,
		{},
		{
			headers: { "auth-token": `Bearer ${token}` },
		}
	);
