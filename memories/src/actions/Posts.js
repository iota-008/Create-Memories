import toast from "react-hot-toast";

import * as api from "../api/post.js";
import {
	FETCH_ALL,
	CREATE,
	LIKE,
	UPDATE,
	DELETE,
} from "../constants/actionTypes";

//* action to fectch posts
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		toast.success(data.message);
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		toast.error(error.message);
	}
};

//* action to create a new post
export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		toast.success(data.message);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		toast.error(error.message);
	}
};

//* action tot update a post
export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		toast.success(data.message);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		toast.error(error.message);
	}
};

//* action to delete a post
export const deletePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.deletePost(id);
		toast.success(data.message);
		dispatch({ type: DELETE, payload: data });
	} catch (error) {
		toast.error(error.message);
	}
};

//* action to like/dislike a post
export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		toast.success(data.message);
		dispatch({ type: LIKE, payload: data });
	} catch (error) {
		toast.error(error.message);
	}
};
