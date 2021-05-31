import axios from "axios";
// const url = "http://localhost:5000/user";
const url = "https://create-your-memories.herokuapp.com/user";

export const registerUser = (userData) =>
	axios.post(`${url}/register`, userData);
export const loginUser = (userData) => axios.post(`${url}/login`, userData);
export const logoutUser = () => axios.post(`${url}/logout`);
