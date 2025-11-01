import {
	Container,
	AppBar,
	Typography,
	Grid,
	Grow,
	Button,
	IconButton,
	Tooltip,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getPosts, upsertSinglePostPublic } from "../../actions/Posts";
import { logoutUser } from "../../actions/Users";
import Post from "../Posts/Posts";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import useStyles from "./styles";

// Use MUI icons for consistency
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ThemeModeContext } from "../../theme";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';
import FavoriteIcon from '@material-ui/icons/Favorite';

//* Home component for home page of the application

const Home = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [currentId, setCurrentId] = useState(0);
	const { mode, toggle } = React.useContext(ThemeModeContext);
	const [layout, setLayout] = useState('list');
	const isAuthenticated = Boolean(localStorage.getItem('auth-token'));

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const sharedId = params.get('post');
		const token = localStorage.getItem('auth-token');
		if (sharedId && !token) {
			dispatch(upsertSinglePostPublic(sharedId));
		} else {
			dispatch(getPosts());
		}
	}, [dispatch]);

	const handleLogout = () => {
		dispatch(logoutUser());
	};
	return (
		<React.Fragment>
			<AppBar className={classes.appBar} position='static' color='default'>
				<div className={classes.appBarInner}>
					<div className={classes.logoContainer} style={{ justifyContent: 'center' }}>
						<div className={classes.heartBadge}>
							<FavoriteIcon className={classes.bouncingHeart} style={{ fontSize: 24 }} />
						</div>
						<div>
							<Typography variant='h5' className={classes.headingWhite}>
								Memories <span role="img" aria-label="sparkle" className={classes.star}>✨</span>
							</Typography>
							<Typography variant='body2' className={classes.subheadingWhite}>
								Capture your joyful moments ✨
							</Typography>
						</div>
					</div>

					<div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: 'flex-end' }}>
						<Tooltip title={`Switch to ${layout === 'list' ? 'grid' : 'list'} view`}>
							<IconButton className={classes.headerIcon} onClick={() => setLayout(prev => prev === 'list' ? 'grid' : 'list')}>
								{layout === 'list' ? <ViewModuleIcon /> : <ViewListIcon />}
							</IconButton>
						</Tooltip>
						<Tooltip title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
							<IconButton className={classes.headerIcon} onClick={toggle}>
								{mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
							</IconButton>
						</Tooltip>
						{isAuthenticated && (
							<IconButton className={classes.headerIcon} onClick={handleLogout} size="small" aria-label="logout">
								<ExitToAppIcon fontSize="default" />
							</IconButton>
						)}
					</div>
				</div>
			</AppBar>

			<Grow in>
				<Container maxWidth='lg' className={classes.contentContainer}>
					<Grid
						className={classes.mainContainer}
						container
						justify='center'
						alignItems='flex-start'
						spacing={4}
					>
						<Grid item xs={12} sm={12} md={8}>
							<Post setCurrentId={setCurrentId} layout={layout} />
						</Grid>
						{isAuthenticated && (
							<Grid item xs={12} sm={12} md={4}>
								<Form currentId={currentId} setCurrentId={setCurrentId} />
							</Grid>
						)}
					</Grid>
				</Container>
			</Grow>
		</React.Fragment>
	);
};
export default Home;
