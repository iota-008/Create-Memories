import mongoose from "mongoose";
import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const registerUser = async (req, res) => {
	// hash password
	const salt = await bcrypt.genSalt(10);
	// console.log(`salt: ${salt}---body:`, req.body);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	try {
		const userData = new Users({
			userName: req.body.userName,
			password: hashedPassword,
			email: req.body.email,
		});
		const userExists = await Users.findOne({ userName: req.body.userName });
		// console.log(userExists);
		if (userExists) return res.json({ message: `username not available` });
		const emailExists = await Users.findOne({
			email: req.body.email,
		});
		if (emailExists) return res.json({ message: `email already registered` });
		const user = await userData.save();
		jsonwebtoken.sign(
			{ _id: user._id, userName: user.userName },
			process.env.SECRET_KEY,
			(err, token) => {
				// console.log("token : ", token);
				// console.log("error : ", err);
				// return res.header("auth-token", token).send(token);
				return res.status(201).json({
					success: true,
					message: "Registration Successful!",
					accessToken: token,
				});
			}
		);
	} catch (error) {
		return res.status(409).json({
			message: error,
		});
	}
};

export const loginUser = async (req, res) => {
	try {
		// console.log(req.body);
		var user = await Users.findOne({ email: req.body.email });
		// console.log(`UserWithEmail :`, user);
		if (!user) {
			return res.status(400).json({ message: "invalid email id" });
		}
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(400).json({ message: "invalid password" });
		else {
			jsonwebtoken.sign(
				{ _id: user._id, userName: user.userName },
				process.env.SECRET_KEY,
				(err, token) => {
					// console.log("token : ", token);
					// console.log("error : ", err);
					// if (typeof window !== "undefined") {
					// 	localStorage.setItem("auth-token", token);
					// }
					// res.cookie("token", token, { httpOnly: true });
					return res.status(201).json({
						success: true,
						message: "Authentication successful!",
						accessToken: token,
					});
				}
			);
		}
	} catch (error) {
		// console.log(e);
		return res.status(409).json({
			message: error,
		});
	}
};

export const logoutUser = async (req, res) => {
	try {
		return res.json({ message: `Logged out Successfully` });
	} catch (error) {
		// console.log(e);
		return res.status(409).json({
			message: error,
		});
	}
};
