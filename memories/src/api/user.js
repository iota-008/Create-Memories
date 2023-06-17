import axios from "axios";
const url = "https://memories-backend-z796.onrender.com/user";


//* api to register user
export const registerUser = (userData) =>
	axios.post(`${url}/register`, userData);

//* api to login user
export const loginUser = ( userData ) => axios.post( `${ url }/login`, userData );

//* api to logout user
export const logoutUser = () => axios.post( `${ url }/logout` );
