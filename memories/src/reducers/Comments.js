import { COMMENTS_FETCH, COMMENT_CREATE, COMMENT_DELETE } from "../constants/actionTypes";

// State shape: { [postId]: Comment[] }
export default function comments(state = {}, action) {
  switch (action.type) {
    case COMMENTS_FETCH: {
      const { postId, comments } = action.payload;
      return { ...state, [postId]: comments };
    }
    case COMMENT_CREATE: {
      const { postId, comment } = action.payload;
      const prev = state[postId] || [];
      return { ...state, [postId]: [comment, ...prev] };
    }
    case COMMENT_DELETE: {
      const { postId, id } = action.payload;
      const prev = state[postId] || [];
      return { ...state, [postId]: prev.filter((c) => c._id !== id) };
    }
    default:
      return state;
  }
}
