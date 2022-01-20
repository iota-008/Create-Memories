import Register from "./componets/UserForm/Register";
import { useSelector } from "react-redux";
import Home from "./componets/Home/Home";
import React from "react";

const App = () => {
	const user = useSelector((state) => state.users);
	const token = localStorage.getItem("auth-token");
	const isLoggedIn = user.length && user[0] != null && token != null;
	return isLoggedIn ? (
		<React.Fragment>
			<Home />
		</React.Fragment>
	) : (
		<React.Fragment>
			<Register />
		</React.Fragment>
	);
};
export default App;
