/* eslint-disable import/no-anonymous-default-export */
import {
	FETCH_ALL,
	CREATE,
	LIKE,
	UPDATE,
	DELETE,
} from "../constants/actionTypes";
export default (posts = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			// console.log("fetched posts : ", action.payload);
			return action.payload;
		case CREATE:
			// console.log("created posts : ", action.payload);
			return [...posts, action.payload];
		case UPDATE:
		case LIKE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case DELETE:
			return posts.filter((post) => post._id !== action.payload);
		default:
			return posts;
	}
};
