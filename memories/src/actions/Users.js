import toast from "react-hot-toast";
import * as api from "../api/user.js";

//* action to register a new user in the application
export const registerUser = (userData) => async (dispatch) => {
	try {
		const { data } = await api.registerUser(userData);
		localStorage.setItem("auth-token", data.accessToken);
		toast.success(data.message);
		dispatch({ type: "REGISTER", payload: data.accessToken });
	} catch (error) {
		toast.error(error.message);
	}
};

//* action to login into the application
export const loginUser = (userData) => async (dispatch) => {
	try {
		const { data } = await api.loginUser(userData);
		localStorage.setItem("auth-token", data.accessToken);
		toast.success(data.message);
		dispatch({ type: "LOGIN", payload: data.accessToken });
	} catch (error) {
		toast.error(error.message);
	}
};

//* action to logout a user
export const logoutUser = () => async (dispatch) => {
	try {
		await api.logoutUser();
		localStorage.removeItem("auth-token");
		toast.success("logged out successfully ");
		dispatch({ type: "LOGOUT", payload: null });
	} catch (error) {
		toast.error(error.message);
	}
};

//* action to request password reset
export const forgotPassword = (email) => async () => {
	try {
		const { data } = await api.forgotPassword(email);
		toast.success(data.message || "If the email exists, we'll send a reset link");
		return data;
	} catch (error) {
		toast.error(error.message);
		throw error;
	}
};

//* action to reset password using token
export const resetPassword = (token, password) => async () => {
	try {
		const { data } = await api.resetPassword(token, password);
		toast.success(data.message || "Password has been reset");
		return data;
	} catch (error) {
		toast.error(error.message);
		throw error;
	}
};
