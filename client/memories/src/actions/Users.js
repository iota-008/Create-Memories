import * as api from "../api/user.js";

export const registerUser = (userData) => async (dispatch) => {
	// console.log(userData);
	try {
		const { data } = await api.registerUser(userData);
		// console.log(` response : `, data);
		localStorage.setItem("auth-token", data.accessToken);
		alert(data.message);
		dispatch({ type: "REGISTER", payload: data.accessToken });
	} catch (e) {
		alert(e.message);
		// console.log(e);
	}
};

export const loginUser = (userData) => async (dispatch) => {
	// console.log(`userData login : `, userData);
	try {
		const { data } = await api.loginUser(userData);
		// console.log(` response : `, data);
		localStorage.setItem("auth-token", data.accessToken);
		alert(data.message);
		dispatch({ type: "LOGIN", payload: data.accessToken });
	} catch (e) {
		alert(e.message);
		// console.log(e);
	}
};
export const logoutUser = () => async (dispatch) => {
	// console.log(`userData logout : `, userData);
	try {
		// const { data } =
		await api.logoutUser();
		// console.log(` response : `, data);
		localStorage.removeItem("auth-token");
		alert("logged out successfully ");
		dispatch({ type: "LOGOUT", payload: null });
	} catch (e) {
		alert(e.message);
		// console.log(e);
	}
};
