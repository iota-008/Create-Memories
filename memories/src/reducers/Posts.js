//* posts reducers

import {
	FETCH_ALL,
	CREATE,
	LIKE,
	UPDATE,
	DELETE,
} from "../constants/actionTypes";
export default function postActions(posts = [], action) {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload.posts;
		case CREATE:
			return [...posts, action.payload.post];
		case UPDATE:
		case LIKE:
			return posts.map((post) =>
				post._id === action.payload.post._id ? action.payload.post : post
			);
		case DELETE:
			return posts.filter((post) => post._id !== action.payload.id);
		default:
			return posts;
	}
}
