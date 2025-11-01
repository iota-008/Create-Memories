import axios from "axios";
import { USER_URL as url } from "../config/urls";


//* api to register user
export const registerUser = ( userData ) =>
	axios.post( `${ url }/register`, userData );

//* api to login user
export const loginUser = ( userData ) => axios.post( `${ url }/login`, userData );

//* api to logout user
export const logoutUser = () => axios.post( `${ url }/logout` );

//* api to fetch current profile
export const getMe = (token) => axios.get(`${url}/me`, {
    withCredentials: true,
    headers: token ? { 'auth-token': token } : undefined,
});

//* api to request password reset
export const forgotPassword = (email) => axios.post(`${url}/forgot`, { email });

//* api to reset password using token
export const resetPassword = (token, password) => axios.post(`${url}/reset`, { token, password });
