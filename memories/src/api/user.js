import axios from "axios";
const API_BASE = process.env.REACT_APP_API_URL || "https://memories-backend-z796.onrender.com";
const url = `${API_BASE}/user`;


//* api to register user
export const registerUser = ( userData ) =>
	axios.post( `${ url }/register`, userData );

//* api to login user
export const loginUser = ( userData ) => axios.post( `${ url }/login`, userData );

//* api to logout user
export const logoutUser = () => axios.post( `${ url }/logout` );

//* api to request password reset
export const forgotPassword = (email) => axios.post(`${url}/forgot`, { email });

//* api to reset password using token
export const resetPassword = (token, password) => axios.post(`${url}/reset`, { token, password });
