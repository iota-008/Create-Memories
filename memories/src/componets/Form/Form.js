import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Button, Typography, Paper } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SendIcon from '@material-ui/icons/Send';
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

	const handleFileChange = async (e) => {
		const file = e.target.files && e.target.files[0];
		if (!file) return;
		const toBase64 = (f) =>
			new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(f);
				reader.onload = () => resolve(reader.result);
				reader.onerror = (error) => reject(error);
			});
		const base64 = await toBase64(file);
		setPostData({ ...postData, selectedFile: base64 });
	};

	return (
		<Paper className={classes.paper} elevation={3}>
			<form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
				<Typography variant='h5' style={{ fontWeight: 700, width: '100%' }}>
					<span className={classes.gradientText}>Create a Memory</span>
					<span className={classes.spinningStarForm}> ✨</span>
				</Typography>
				<Typography variant='body2' color='textSecondary' style={{ width: "100%", marginBottom: 8 }}>
					Share your joyful moments & celebrate life's best times! 🥳
				</Typography>

				<div className={classes.formGroup}>
					<label className={classes.label} style={{ color: '#8A2BE2' }}>Your Name 🌟</label>
					<input name="creator" className={classes.input} placeholder="Enter your name" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
				</div>

				<div className={classes.formGroup}>
					<label className={classes.label} style={{ color: '#FF69B4' }}>Memory Title 🎨</label>
					<input name="title" className={classes.input} placeholder="Give your memory a title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
				</div>

				<div className={classes.formGroup}>
					<label className={classes.label} style={{ color: '#FF4500' }}>Your Story 📖</label>
					<textarea name="message" className={classes.textarea} placeholder="Tell us about this memory..." value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
				</div>

				<div className={classes.formGroup}>
					<label className={classes.label} style={{ color: '#20B2AA' }}>Tags 🏷️</label>
					<input name="tags" className={classes.input} placeholder="#vacation #friends #summer" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
				</div>

				<div className={classes.formGroup}>
					<label className={classes.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><PhotoCameraIcon fontSize="small" /> Add Photo</label>
					<input
						accept='image/*'
						id='upload-image'
						type='file'
						style={{ display: "none" }}
						onChange={handleFileChange}
					/>
					<label htmlFor='upload-image' className={classes.uploadArea}>
						<CloudUploadIcon fontSize="small" />
						{postData.selectedFile ? "Change image" : "Click to upload image"}
					</label>
				</div>

				<div className={classes.buttonContainer}>
					<Button className={classes.buttonSubmit} variant='contained' type='submit' startIcon={<SendIcon />}>
						Share Memory
					</Button>
					<Button className={classes.buttonClear} variant='outlined' onClick={clear}>
						Clear Form
					</Button>
				</div>
			</form>
		</Paper>
	);
};

export default Form;
