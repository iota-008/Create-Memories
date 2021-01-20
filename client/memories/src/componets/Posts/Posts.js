import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

const Posts = ({ setCurrentId, user }) => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	// console.log(posts);
	// console.log(user);
	return !posts.length ? (
		<div>
			<Typography variant="h6" size="medium">
				don't have any posts to show!
			</Typography>
			<CircularProgress />
		</div>
	) : (
		<Grid
			className={classes.container}
			container
			alignItems="stretch"
			spacing={3}
		>
			{posts.map((post) => (
				<Grid key={post._id} xs={12} xm={6} md={6} item>
					<Post post={post} setCurrentId={setCurrentId} user={user} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
