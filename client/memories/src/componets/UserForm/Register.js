import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import { Redirect } from "react-router-dom";
import { registerUser } from "../../actions/Users";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import useStyles from "./styles";
import Login from "./Login";

const Register = ({ currentId, setCurrentId }) => {
	const [userData, setUserData] = useState({
		userName: "",
		password: "",
		email: "",
	});

	const [redirect, setRedirect] = useState(false);

	const dispatch = useDispatch();

	const classes = useStyles();

	const clear = () => {
		setUserData({
			userName: "",
			password: "",
			email: "",
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(userData));
		clear();
	};

	if (redirect) {
		// console.log(redirect);
		return <Login />;
	}
	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root}  ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography className={classes.formHeading} variant="h4">
					Register
				</Typography>
				<TextField
					name="user-name"
					variant="outlined"
					label="UserName"
					minLength="5"
					fullWidth
					value={userData.userName}
					onChange={(e) =>
						setUserData({
							...userData,
							userName: e.target.value,
						})
					}
				></TextField>
				<TextField
					name="email"
					variant="outlined"
					label="Email"
					type="email"
					fullWidth
					value={userData.email}
					onChange={(e) =>
						setUserData({
							...userData,
							email: e.target.value,
						})
					}
				></TextField>
				<TextField
					name="password"
					variant="outlined"
					label="Password"
					type="password"
					fullWidth
					value={userData.password}
					onChange={(e) =>
						setUserData({
							...userData,
							password: e.target.value,
						})
					}
				></TextField>

				<Button
					className={classes.buttonSubmit}
					onClick={handleSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="large"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
			<br />
			<Typography color="textSecondary">Already a user ?</Typography>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => setRedirect((redirect) => (redirect = true))}
				fullWidth
			>
				Login
			</Button>
		</Paper>
	);
};

export default Register;
