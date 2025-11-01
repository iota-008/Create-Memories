import { TextField, Button, Typography, Paper, IconButton, InputAdornment, LinearProgress } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { SvgIcon } from "@material-ui/core";
// import { Redirect } from "react-router-dom";
import { registerUser } from "../../actions/Users";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MemoriesLogo } from "../../svg/Memories-logo.svg";
import hero from "../../images/memories.png";

//* Register component for signup form

const Register = ({ currentId, setCurrentId }) => {
	const [userData, setUserData] = useState({
		userName: "",
		password: "",
		email: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({ userName: "", email: "", password: "" });
	const [strength, setStrength] = useState("");

	const dispatch = useDispatch();

	const classes = useStyles();

	const navigate = useNavigate();

	const clear = () => {
		setUserData({
			userName: "",
			password: "",
			email: "",
		});
		setErrors({ userName: "", email: "", password: "" });
		setStrength("");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// validation
		const nextErrors = { userName: "", email: "", password: "" };
		if (!userData.userName || userData.userName.length < 3) {
			nextErrors.userName = "Username must be at least 3 characters";
		}
		if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
			nextErrors.email = "Enter a valid email";
		}
		if (!userData.password || userData.password.length < 6) {
			nextErrors.password = "Use 6+ characters";
		}
		setErrors(nextErrors);
		if (nextErrors.userName || nextErrors.email || nextErrors.password) return;

		setLoading(true);
		dispatch(registerUser(userData)).finally(() => setLoading(false));
	};

	const evaluateStrength = (pwd) => {
		let score = 0;
		if (pwd.length >= 6) score++;
		if (/[A-Z]/.test(pwd)) score++;
		if (/[0-9]/.test(pwd)) score++;
		if (/[^A-Za-z0-9]/.test(pwd)) score++;
		return ["Weak", "Fair", "Good", "Strong"][Math.max(0, score - 1)] || "";
	};

	return (
		<div className={classes.container}>
			<div className={classes.authRoot}>
				<div className={classes.leftPanel}>
					<Paper className={classes.paper}>
						<form
							autoComplete='off'
							noValidate
							className={`${classes.root}  ${classes.form}`}
							onSubmit={handleSubmit}
						>
							{loading && <LinearProgress color='primary' />}
							<Typography className={classes.formHeading} variant='h4' component='h1'>
								Sign Up
							</Typography>
							<TextField
								name='user-name'
								variant='outlined'
								label='User Name'
								minLength='5'
								fullWidth
								value={userData.userName}
								onChange={(e) =>
									setUserData({
										...userData,
										userName: e.target.value,
									})
								}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<PersonOutlineIcon fontSize='small' />
									</InputAdornment>
								),
							}}
							error={Boolean(errors.userName)}
							helperText={errors.userName}
						></TextField>
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
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<MailOutlineIcon fontSize='small' />
									</InputAdornment>
								),
							}}
							error={Boolean(errors.email)}
							helperText={errors.email}
						></TextField>
							<TextField
								name='password'
								variant='outlined'
								label='Password'
								type={showPassword ? "text" : "password"}
								fullWidth
								value={userData.password}
								onChange={(e) => {
									const v = e.target.value;
									setUserData({
										...userData,
										password: v,
									});
									setStrength(evaluateStrength(v));
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<LockOutlinedIcon fontSize='small' />
										</InputAdornment>
									),
									endAdornment: (
										<InputAdornment position="end">
											<IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((s) => !s)} edge="end">
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
								error={Boolean(errors.password)}
								helperText={errors.password || (strength && `Strength: ${strength}`)}
							></TextField>

							<div className={classes.dividerRow}>
								<div className={classes.dividerLine} />
								<Typography variant='caption' color='textSecondary'>or</Typography>
								<div className={classes.dividerLine} />
							</div>
							<Button className={classes.googleButton} fullWidth variant='outlined' startIcon={
								<SvgIcon viewBox='0 0 533.5 544.3' fontSize='small'>
									<path fill='#4285F4' d='M533.5 278.4c0-17.4-1.6-34-4.6-50.2H272v95h146.9c-6.3 34-25 62.8-53.5 82.1v68h86.5c50.6-46.6 81.6-115.3 81.6-194.9z' />
									<path fill='#34A853' d='M272 544.3c72.9 0 134.1-24.1 178.8-65.6l-86.5-68c-24 16.1-54.7 25.7-92.3 25.7-70.9 0-131-47.8-152.4-112.1h-90v70.6c44.6 88.2 136.2 149.4 242.4 149.4z' />
									<path fill='#FBBC05' d='M119.6 324.3c-10.7-31.9-10.7-66.4 0-98.3V155.4h-90c-36.4 72.7-36.4 157.7 0 230.4l90-61.5z' />
									<path fill='#EA4335' d='M272 107.7c39.6-.6 77.7 14.5 106.6 42.2l79.4-79.4C363.3-20.6 201.8-22.1 119.6 84l90 70.6c21.4-64.3 81.5-112.2 162.4-112.9z' />
								</SvgIcon>
							}>Continue with Google</Button>

							<div className={classes.buttonContainer}>
								<Button
									className={classes.buttonSubmit}
									onClick={handleSubmit}
									variant='contained'
									color='primary'
									type='submit'
									fullWidth
									disabled={loading}
								>
									Submit
								</Button>
								<Button
									className={classes.buttonClear}
									variant='text'
									color='secondary'
									onClick={clear}
									fullWidth
								>
									Clear
								</Button>
							</div>
							<Typography variant='caption' color='textSecondary'>
								By continuing, you agree to our Terms and Privacy Policy.
							</Typography>
						</form>
						<br />
						<Typography color='textSecondary'>Already a user?</Typography>
						<Button
							className={classes.buttonSwitch}
							variant='contained'
							color='secondary'
							onClick={() => navigate('/auth/login')}
							fullWidth
						>
							Login
						</Button>
					</Paper>
				</div>
				<div className={classes.rightPanel}>
					<div className={classes.brand}>
						<MemoriesLogo width={28} height={28} />
						<Typography variant='h6'>Memories</Typography>
					</div>
					<Typography className={classes.brandTagline} variant='subtitle1'>
						Create and share beautiful memories with your friends and family.
					</Typography>
					<img className={classes.illustration} src={hero} alt='Memories' />
				</div>
			</div>
		</div>
	);
};

export default Register;
