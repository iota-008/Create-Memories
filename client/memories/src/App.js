import Register from "./componets/UserForm/Register";
import { useSelector } from "react-redux";
import Home from "./componets/Home/Home";
import React from "react";

const App = () => {
	const user = useSelector((state) => state.users);
	// console.log("state user : ", user);
	const token = localStorage.getItem("auth-token");
	const isLoggedIn = user.length && user[0] != null && token != null;
	// console.log("is-LoggedIn : ", isLoggedIn);
	// console.log("token : ", token);
	return isLoggedIn ? (
		<React.Fragment>
			<Home user={user} />
		</React.Fragment>
	) : (
		<React.Fragment>
			<Register />
		</React.Fragment>
	);
};
export default App;
