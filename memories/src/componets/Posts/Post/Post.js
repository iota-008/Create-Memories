import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/Posts";
import { useSelector, useDispatch } from "react-redux";

//* Post component for each post card

const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();
	const classes = useStyles();

	const user = useSelector((state) => state.users)[0];

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={
					post.selectedFile ||
					"https://images.unsplash.com/photo-1528569937393-ee892b976859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
				}
				title={post.title}
			/>
			<div className={classes.overlay}>
				<Typography variant='h6'>{post.creator}</Typography>
				<Typography variant='body2'>
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>
			{post.userName === user.userName ? (
				<div className={classes.overlay2}>
					<Button
						style={{ color: "white" }}
						size='small'
						onClick={() => setCurrentId(post._id)}
					>
						<MoreHorizIcon fontSize='default'></MoreHorizIcon>
					</Button>
				</div>
			) : (
				<div className={classes.overlay2}></div>
			)}
			<div className={classes.details}>
				<Typography variant='body2' color='textSecondary'>
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<Typography className={classes.title} variant='h5' gutterBottom>
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size='small'
					color='primary'
					onClick={() => dispatch(likePost(post._id))}
				>
					<ThumbUpAltIcon fontSize='small'></ThumbUpAltIcon>
					&nbsp; Like &nbsp;
					{post.likeCount}
				</Button>
				{post.userName === user.userName ? (
					<Button
						size='small'
						color='primary'
						onClick={() => dispatch(deletePost(post._id))}
					>
						<DeleteIcon fontSize='small'></DeleteIcon>
						Delete
					</Button>
				) : null}
			</CardActions>
		</Card>
	);
};

export default Post;
