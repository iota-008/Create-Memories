//* bookmarks reducer

const initialState = [];

export default function bookmarks(state = initialState, action) {
  switch (action.type) {
    case "BOOKMARKS_BOOTSTRAP": {
      const ids = Array.isArray(action.payload) ? action.payload : [];
      return ids;
    }
    case "BOOKMARK_ADD": {
      const id = action.payload;
      if (!id) return state;
      if (state.includes(id)) return state;
      return [...state, id];
    }
    case "BOOKMARK_REMOVE": {
      const id = action.payload;
      return state.filter((x) => x !== id);
    }
    default:
      return state;
  }
}
