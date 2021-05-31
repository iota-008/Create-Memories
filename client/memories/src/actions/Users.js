import * as api from "../api/user.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registerUser = (userData) => async (dispatch) => {
	// console.log(userData);
	try {
		const { data } = await api.registerUser(userData);
		// console.log(` response : `, data);
		localStorage.setItem("auth-token", data.accessToken);
		// alert(data.message);
		toast.success(data.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		dispatch({ type: "REGISTER", payload: data.accessToken });
	} catch (e) {
		// alert(e.message);
		toast.error(e.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		// console.log(e);
	}
};

export const loginUser = (userData) => async (dispatch) => {
	// console.log(`userData login : `, userData);
	try {
		const { data } = await api.loginUser(userData);
		// console.log(` response : `, data);
		localStorage.setItem("auth-token", data.accessToken);
		// alert(data.message);
		toast.success(data.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		dispatch({ type: "LOGIN", payload: data.accessToken });
	} catch (e) {
		// alert(e.message);
		toast.error(e.message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
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
		// alert("logged out successfully ");
		toast.success("logged out successfully ", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		dispatch({ type: "LOGOUT", payload: null });
	} catch (e) {
		alert(e.message);
		// console.log(e);
	}
};
