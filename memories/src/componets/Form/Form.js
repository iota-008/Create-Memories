import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/Posts";

//* Form component for creating new posts

const Form = ({ currentId, setCurrentId }) => {
	const user = useSelector((state) => state.users)[0];
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
		userName: user.userName,
	});
	const post = useSelector((state) =>
		currentId ? state.posts.find((post) => post._id === currentId) : 0
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post]);

	const clear = () => {
		setCurrentId(0);
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentId === 0) {
			dispatch(createPost(postData));
		} else {
			dispatch(updatePost(currentId, postData));
		}
		setCurrentId(0);
		clear();
	};

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete='off'
				noValidate
				className={`${classes.root}  ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography className={classes.formHeading} variant='h5'>
					{currentId ? "Editing" : "Create"} a Memory
				</Typography>
				<TextField
					name='creator'
					variant='outlined'
					label='Creator'
					fullWidth
					value={postData.creator}
					onChange={(e) =>
						setPostData({
							...postData,
							creator: e.target.value,
						})
					}
				></TextField>
				<TextField
					name='title'
					variant='outlined'
					label='Title'
					fullWidth
					value={postData.title}
					onChange={(e) =>
						setPostData({
							...postData,
							title: e.target.value,
						})
					}
				></TextField>
				<TextField
					name='message'
					variant='outlined'
					label='Message'
					fullWidth
					value={postData.message}
					onChange={(e) =>
						setPostData({
							...postData,
							message: e.target.value,
						})
					}
				></TextField>
				<TextField
					name='tags'
					variant='outlined'
					label='Tags'
					fullWidth
					value={postData.tags}
					onChange={(e) =>
						setPostData({
							...postData,
							tags: e.target.value.split(","),
						})
					}
				></TextField>
				<div className={classes.fileInput}>
					<FileBase
						type='file'
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({
								...postData,
								selectedFile: base64,
							})
						}
					/>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						className={classes.buttonSubmit}
						variant='contained'
						color='primary'
						type='submit'
						fullWidth
					>
						Submit
					</Button>
					<Button
						className={classes.buttonClear}
						variant='contained'
						color='secondary'
						onClick={clear}
						fullWidth
					>
						Clear
					</Button>
				</div>
			</form>
		</Paper>
	);
};

export default Form;
