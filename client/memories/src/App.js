import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
// import memories from "./images/memories.png";
import Post from "./componets/Posts/Posts";
import Form from "./componets/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/Posts";

const App = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [currentId, setCurrentId] = useState(0);
	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);
	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<AppBar className={classes.appBar} position="static" color="inherit">
					<Typography className={classes.heading} variant="h2" align="center">
						MEMORIES
					</Typography>
					{/* <img
						className={classes.image}
						src={memories}
						alt="memories"
						align="center"
						height="80"
						background="transparent"
					></img> */}
				</AppBar>

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
export default App;
