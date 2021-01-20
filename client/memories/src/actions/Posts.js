import * as api from "../api/post.js";
import {
	FETCH_ALL,
	CREATE,
	LIKE,
	UPDATE,
	DELETE,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		// console.log("datafetch : ", data);
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		alert(error.message);
		// console.log(error);
	}
};
export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		// console.log("dataCreate : ", data);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		alert(error.message);
		// console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		// console.log("dataUpdate : ", data);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		alert(error.message);
		// console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		alert(error.message);
		// console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		// console.log("dataLike : ", data);
		dispatch({ type: LIKE, payload: data });
	} catch (error) {
		alert(error.message);
		// console.log(e);
	}
};
