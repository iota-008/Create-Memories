import toast from "react-hot-toast";
import * as api from "../api/comment";
import { COMMENTS_FETCH, COMMENT_CREATE, COMMENT_DELETE } from "../constants/actionTypes";

export const getComments = (postId, page = 1, limit = 20) => async (dispatch) => {
  try {
    const { data } = await api.fetchComments(postId, page, limit);
    dispatch({ type: COMMENTS_FETCH, payload: { postId, comments: data.comments } });
  } catch (error) {
    toast.error(error.message);
  }
};

export const addComment = (postId, content) => async (dispatch) => {
  try {
    const { data } = await api.createComment(postId, content);
    toast.success(data.message || "Comment added");
    dispatch({ type: COMMENT_CREATE, payload: { postId, comment: data.comment } });
  } catch (error) {
    toast.error(error.message);
  }
};

export const removeComment = (postId, id) => async (dispatch) => {
  try {
    const { data } = await api.deleteComment(id);
    toast.success(data.message || "Comment deleted");
    dispatch({ type: COMMENT_DELETE, payload: { postId, id: data.id || id } });
  } catch (error) {
    toast.error(error.message);
  }
};
