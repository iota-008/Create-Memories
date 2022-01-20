import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { loginUser } from "../../actions/Users";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import useStyles from "./styles";
import Register from "./Register";

//* Login component for sign in form

const Login = ({ currentId, setCurrentId }) => {
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
		dispatch(loginUser(userData));
		clear();
	};
	if (redirect) {
		return <Register />;
	}
	return (
		<Paper className={classes.paper}>
			<form
				autoComplete='off'
				noValidate
				className={`${classes.root}  ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography className={classes.formHeading} variant='h4'>
					Sign In
				</Typography>

				<TextField
					name='email'
					variant='outlined'
					label='Email'
					type='email'
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
					name='password'
					variant='outlined'
					label='Password'
					type='password'
					fullWidth
					value={userData.password}
					onChange={(e) =>
						setUserData({
							...userData,
							password: e.target.value,
						})
					}
				></TextField>

				<div className={classes.buttonContainer}>
					<Button
						className={classes.buttonSubmit}
						onClick={handleSubmit}
						variant='contained'
						color='primary'
						type='submit'
						fullWidth
					>
						Submit
					</Button>
					<Button
						className={classes.buttonClear}
						variant='contained'
						color='secondary'
						onClick={clear}
						fullWidth
					>
						Clear
					</Button>
				</div>
			</form>
			<br />
			<Typography color='textSecondary'>New here?</Typography>
			<Button
				className={classes.buttonSwitch}
				variant='contained'
				color='secondary'
				onClick={() => setRedirect((redirect) => (redirect = true))}
				fullWidth
			>
				Register
			</Button>
		</Paper>
	);
};

export default Login;
