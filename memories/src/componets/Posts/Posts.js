import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

//* Posts compoent for rendering all posts

const Posts = ({ setCurrentId, user }) => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	return posts.length === 0 ? (
		<div>
			<Typography variant='h6' size='medium'>
				Don't have any posts to show now!
			</Typography>
			<CircularProgress />
		</div>
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
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
