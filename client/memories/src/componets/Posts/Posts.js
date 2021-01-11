import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	console.log(posts);
	return !posts.length ? (
		<div>
			<Typography variant="h6" color="TextPrimary" size="medium">
				0 posts
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
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
