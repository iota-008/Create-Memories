/* eslint-disable import/no-anonymous-default-export */

import jwt_decode from "jwt-decode";

const token = localStorage.getItem("auth-token");
if (token !== null) {
	var decoded = jwt_decode(token);
}
export default (users = token ? [decoded] : [], action) => {
	// const dispatch = useDispatch();
	switch (action.type) {
		case "REGISTER":
			// console.log(users);
			// console.log(action.payload);
			users = [action.payload];
			// dispatch(getPosts());
			return users;
		case "LOGIN":
			// console.log(action.payload);
			var decoded = jwt_decode(action.payload);
			// console.log(`decoded : `, decoded);
			users = [decoded];
			// dispatch(getPosts());
			return users;
		case "LOGOUT":
			users = [];
			return users;
		default:
			return users;
	}
};
