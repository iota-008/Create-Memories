import { TextField, Button, Typography, Paper, IconButton, InputAdornment, Checkbox, FormControlLabel, LinearProgress, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { SvgIcon } from "@material-ui/core";
import { loginUser, forgotPassword as forgotPasswordAction } from "../../actions/Users";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MemoriesLogo } from "../../svg/Memories-logo.svg";
import hero from "../../images/memories.png";
import { GOOGLE_OAUTH_START } from "../../config/urls";

//* Login component for sign in form

const Login = ({ currentId, setCurrentId }) => {
	const [userData, setUserData] = useState({
		userName: "",
		password: "",
		email: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({ email: "", password: "" });
	const [fpOpen, setFpOpen] = useState(false);
	const [fpEmail, setFpEmail] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const classes = useStyles();

	// Handle OAuth redirect: /auth/login?oauth=1&token=... or ?oauth=0&error=...
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const oauth = params.get('oauth');
		const token = params.get('token');
		const error = params.get('error');
		if (oauth === '1' && token) {
			localStorage.setItem('auth-token', token);
			dispatch({ type: 'LOGIN', payload: token });
			navigate('/', { replace: true });
		} else if (oauth === '0') {
			let message = 'Google sign-in failed';
			if (error === 'state') message = 'Sign-in failed: invalid session. Please try again.';
			else if (error === 'token') message = 'Sign-in failed: could not obtain access token.';
			else if (error === 'profile') message = 'Sign-in failed: could not fetch profile.';
			toast.error(message);
			// Clean the query string to avoid repeated toasts on refresh
			const url = new URL(window.location.href);
			url.searchParams.delete('oauth');
			url.searchParams.delete('error');
			url.searchParams.delete('token');
			window.history.replaceState({}, document.title, url.toString());
		}
	}, [dispatch, navigate]);

	const clear = () => {
		setUserData({
			userName: "",
			password: "",
			email: "",
		});
		setErrors({ email: "", password: "" });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// simple validation
		const nextErrors = { email: "", password: "" };
		if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
			nextErrors.email = "Enter a valid email";
		}
		if (!userData.password) {
			nextErrors.password = "Password is required";
		}
		setErrors(nextErrors);
		if (nextErrors.email || nextErrors.password) return;

		setLoading(true);
		dispatch(loginUser(userData)).finally(() => setLoading(false));
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
								Welcome back
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
								error={Boolean(errors.email)}
								helperText={errors.email}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<MailOutlineIcon fontSize='small' />
										</InputAdornment>
									),
								}}
							></TextField>
							<TextField
								name='password'
								variant='outlined'
								label='Password'
								type={showPassword ? 'text' : 'password'}
								fullWidth
								value={userData.password}
								onChange={(e) =>
									setUserData({
										...userData,
										password: e.target.value,
									})
								}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<LockOutlinedIcon fontSize='small' />
										</InputAdornment>
									),
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={() => setShowPassword(!showPassword)}
												edge='end'
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
								error={Boolean(errors.password)}
								helperText={errors.password}
							></TextField>

							<div className={classes.helperRow}>
								<FormControlLabel
									control={
										<Checkbox
											color='primary'
											checked={rememberMe}
											onChange={(e) => setRememberMe(e.target.checked)}
										/>
									}
									label={
										<Typography className={classes.helperLabel} component='span'>
											Remember me for 30 days
										</Typography>
									}
								/>
								<Button className={classes.helperLink} size='small' color='primary' variant='text' onClick={() => setFpOpen(true)}>
									Forgot password?
								</Button>
							</div>

							<div className={classes.dividerRow}>
								<div className={classes.dividerLine} />
								<Typography variant='caption' color='textSecondary'>or</Typography>
								<div className={classes.dividerLine} />
							</div>
							<Button className={classes.googleButton} fullWidth variant='outlined' onClick={() => {
								window.location.href = GOOGLE_OAUTH_START;
							}} startIcon={
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
						<Typography color='textSecondary'>New here?</Typography>
						<Button
							className={classes.buttonSwitch}
							variant='contained'
							color='secondary'
							onClick={() => navigate('/auth/register')}
							fullWidth
						>
							Create an account
						</Button>
					</Paper>
				</div>
				<div className={classes.rightPanel}>
					<div className={classes.brand}>
						<MemoriesLogo width={28} height={28} />
						<Typography variant='h6'>Memories</Typography>
					</div>
					<Typography className={classes.brandTagline} variant='subtitle1'>
						Capture, share, and revisit your favorite moments. Join a community of storytellers.
					</Typography>
					<img className={classes.illustration} src={hero} alt='Memories' />
				</div>
			</div>
			<Dialog open={fpOpen} onClose={() => setFpOpen(false)} maxWidth='xs' fullWidth>
				<DialogTitle>Forgot password</DialogTitle>
				<DialogContent>
					<Typography variant='body2' color='textSecondary'>Enter your account email, and we'll send a reset link.</Typography>
					<TextField
						autoFocus
						margin='dense'
						label='Email'
						type='email'
						fullWidth
						value={fpEmail}
						onChange={(e) => setFpEmail(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setFpOpen(false)}>Cancel</Button>
					<Button color='primary' variant='contained' onClick={async () => {
						if (!fpEmail) return;
						try {
							await dispatch(forgotPasswordAction(fpEmail));
							setFpOpen(false);
							setFpEmail("");
						} catch {}
					}}>Send link</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Login;
