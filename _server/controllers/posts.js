// @ts-nocheck
import PostMessage from "../models/PostMessage.js";
import jsonwebtoken from "jsonwebtoken";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
	// console.log("req-headers of getposts : ", req.headers);
	// console.log(`loggedIn user : ${req.user.userName}`);
	try {
		const posts = await PostMessage.find();
		// console.log(`first post id : ${posts[0]._id}`);
		return res.status(200).json({ posts, message: "Fetched all posts" });
	} catch (error) {
		// console.log(error);
		return res.status(404).json({
			message: error,
		});
	}
};

export const createPost = async (req, res) => {
	// const post = res.body;
	// const newPost = new PostMessage(post);
	// console.log(req.body);
	const { title, message, selectedFile, creator, tags, userName } = req.body;
	const newPostMessage = new PostMessage({
		title,
		message,
		selectedFile,
		creator,
		tags,
		userName,
	});

	try {
		await newPostMessage.save();
		// console.log(newPostMessage);
		return res
			.status(201)
			.json({ post: newPostMessage, message: "Post created successfully" });
	} catch (error) {
		return res.status(409).json({
			message: error,
		});
	}
};

export const updatePost = async (req, res) => {
	const { id } = req.params;
	const { title, message, creator, selectedFile, tags, userName } = req.body;
	// const post = req.body;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with id : ${id}");
	const updatedPost = {
		creator,
		title,
		message,
		tags,
		selectedFile,
		userName,
		_id: id,
	};
	await PostMessage.findByIdAndUpdate(id, updatedPost, {
		new: true,
	});

	return res.json({ post: updatedPost, message: "Post updated successfully" });
};
export const deletePost = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with id : ${id}");
	await PostMessage.findByIdAndRemove(id);
	return res.json({ message: `Post Deleted Successfully` });
};

export const likePost = async (req, res) => {
	// console.log("req-headers of likePost : ", req.headers);
	// console.log( "req-params : ", req.params );

	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with id : ${id}");

	const authHeader = req.headers["auth-token"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) return res.status(401).json({ message: "access-denied" });

	// console.log("likepost token : ", token);

	const user = jsonwebtoken.verify(token, process.env.SECRET_KEY);

	// console.log(" user liking the post  : ", user);

	const post = await PostMessage.findById(id);

	let likedPost;
	let message = "";

	if (post.likedPosts.indexOf(user.userName) != -1) {
		likedPost = await PostMessage.findByIdAndUpdate(
			id,
			{
				likeCount: post.likeCount - 1,
				likedPosts: post.likedPosts.filter(
					(userName) => userName !== user.userName
				),
			},
			{ new: true }
		);
		message = "Like removed from post";
	} else {
		likedPost = await PostMessage.findByIdAndUpdate(
			id,
			{
				likeCount: post.likeCount + 1,
				likedPosts: [...post.likedPosts, user.userName],
			},
			{ new: true }
		);
		message = "Post liked";
	}
	return res.json({ post: likedPost, message: message });
};
