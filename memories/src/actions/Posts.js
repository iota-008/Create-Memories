import toast from "react-hot-toast";

import * as api from "../api/post.js";
import {
	FETCH_ALL,
	CREATE,
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

// Bookmark a post
export const bookmarkPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.addBookmark(id);
        dispatch({ type: "BOOKMARK_ADD", payload: data.id || id });
    } catch (error) {
        toast.error(error.message);
    }
};

// Remove bookmark
export const unbookmarkPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.removeBookmark(id);
        dispatch({ type: "BOOKMARK_REMOVE", payload: data.id || id });
    } catch (error) {
        toast.error(error.message);
    }
};

// Fetch a single post without auth (public route) and upsert into the posts array
export const upsertSinglePostPublic = (id) => async (dispatch, getState) => {
    try {
        const { data } = await api.fetchPublicPost(id);
        const post = data.post;
        const state = getState();
        const exists = (state.posts || []).some((p) => p._id === post._id);
        if (exists) {
            dispatch({ type: UPDATE, payload: { post } });
        } else {
            dispatch({ type: CREATE, payload: { post } });
        }
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

// action to react to a post with an emoji type (e.g., "👍", "❤️", "😂", "😮", "🎉").
export const reactToPost = (id, type) => async (dispatch) => {
	try {
		const { data } = await api.reactToPost(id, type);
		toast.success(data.message);
		// Backend returns { post, message }, reuse UPDATE to replace the post in store
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		toast.error(error.message);
	}
};
