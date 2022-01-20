//* users reducers

import jwt_decode from "jwt-decode";

const token = localStorage.getItem("auth-token");
let decoded;

if (token !== null) {
	decoded = jwt_decode(token);
}
export default function userActions(users = token ? [decoded] : [], action) {
	switch (action.type) {
		case "REGISTER":
			decoded = jwt_decode(action.payload);
			users = [decoded];
			return users;
		case "LOGIN":
			decoded = jwt_decode(action.payload);
			users = [decoded];
			return users;
		case "LOGOUT":
			users = [];
			return users;
		default:
			return users;
	}
}
