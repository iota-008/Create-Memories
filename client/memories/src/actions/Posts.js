import * as api from "../api/post.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
		toast.success(data.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		dispatch({ type: FETCH_ALL, payload: data.posts });
	} catch (error) {
		// alert(error.message);
		toast.error(error.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log(error);
	}
};
export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		// console.log("datafetch : ", data);
		toast.success(data.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log("dataCreate : ", data);
		dispatch({ type: CREATE, payload: data.post });
	} catch (error) {
		// alert(error.message);
		toast.error(error.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		// console.log("datafetch : ", data);
		toast.success(data.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log("dataUpdate : ", data);
		dispatch({ type: UPDATE, payload: data.post });
	} catch (error) {
		// alert(error.message);
		toast.error(error.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.deletePost(id);
		// console.log("datafetch : ", data);
		toast.success(data.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		// alert(error.message);
		toast.error(error.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		// console.log("datafetch : ", data);
		toast.success(data.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log("dataLike : ", data);
		dispatch({ type: LIKE, payload: data.post });
	} catch (error) {
		// alert(error.message);
		toast.error(error.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log(e);
	}
};
