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
// import { useSelector } from "react-redux";
// import memories from "./images/memories.png";

const Home = ({user}) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [currentId, setCurrentId] = useState(0);
	// let user = useSelector((state) => state.users);
	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	const handleLogout = () => {
		dispatch(logoutUser());
	};
	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<AppBar className={classes.appBar} position="static" color="inherit">
					<Typography className={classes.heading} variant="h2" align="center">
						MEMORIES
					</Typography>
				</AppBar>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					onClick={handleLogout}
					fullWidth
				>
					Logout
				</Button>
				<Grow in>
					<Container>
						<Grid
							className={classes.mainContainer}
							container
							justify="space-between"
							alignItems="stretch"
							spacing={3}
						>
							<Grid item xs={12} sm={7}>
								<Post setCurrentId={setCurrentId} user={user} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<Form
									currentId={currentId}
									setCurrentId={setCurrentId}
									user={user}
								/>
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</React.Fragment>
	);
};
export default Home;
