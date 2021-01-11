import mongoose from "mongoose";
import PostMessage from "../models/PostMessage.js";
export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		return res.status(200).json(postMessages);
	} catch (error) {
		return res.status(404).json({
			message: error,
		});
	}
};

export const createPost = async (req, res) => {
	// const post = res.body;
	// const newPost = new PostMessage(post);
	const { title, message, selectedFile, creator, tags } = req.body;

	const newPostMessage = new PostMessage({
		title,
		message,
		selectedFile,
		creator,
		tags,
	});

	try {
		await newPostMessage.save();
		return res.status(201).json(newPostMessage);
	} catch (error) {
		return res.status(409).json({
			message: error,
		});
	}
};

export const updatePost = async (req, res) => {
	const { id } = req.params;
	const { title, message, creator, selectedFile, tags } = req.body;
	// const post = req.body;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with id : ${id}");
	const updatedPost = {
		creator,
		title,
		message,
		tags,
		selectedFile,
		_id: id,
	};
	await PostMessage.findByIdAndUpdate(id, updatedPost, {
		new: true,
	});

	res.json(updatedPost);
};
export const deletePost = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with id : ${id}");
	await PostMessage.findByIdAndRemove(id);
	res.json({ message: `Post Deleted Successfully` });
};

export const likePost = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with id : ${id}");
	const post = await PostMessage.findById(id);
	const likedPost = await PostMessage.findByIdAndUpdate(
		id,
		{ likeCount: post.likeCount + 1 },
		{ new: true }
	);

	res.json(likedPost);
};
