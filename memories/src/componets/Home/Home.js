import {
	Container,
	AppBar,
	Typography,
	Grid,
	Grow,
	Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../actions/Posts";
import { logoutUser } from "../../actions/Users";
import Post from "../Posts/Posts";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import useStyles from "./styles";

import { ReactComponent as LogoutLogo } from "../../svg/logout.svg";
import { ReactComponent as MemoriesLogo } from "../../svg/Memories-logo.svg";

//* Home component for home page of the application

const Home = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [currentId, setCurrentId] = useState(0);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	const handleLogout = () => {
		dispatch(logoutUser());
	};
	return (
		<React.Fragment>
			<Container maxWidth='lg'>
				<AppBar className={classes.appBar} position='static' color='inherit'>
					<div className={classes.logoContainer}>
						<MemoriesLogo className={classes.MemoriesLogo} />
						<Typography className={classes.heading} align='center' variant='h4'>
							Memories
						</Typography>
					</div>

					<Button>
						<LogoutLogo
							className={classes.buttonLogout}
							onClick={handleLogout}
						/>
					</Button>
				</AppBar>

				<Grow in>
					<Container>
						<Grid
							className={classes.mainContainer}
							container
							justify='space-between'
							alignItems='stretch'
							spacing={3}
						>
							<Grid item xs={12} sm={7}>
								<Post setCurrentId={setCurrentId} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<Form currentId={currentId} setCurrentId={setCurrentId} />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</React.Fragment>
	);
};
export default Home;
