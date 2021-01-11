import postRoutes from "./routes/posts.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(
	bodyParser.json({
		limit: "30mb",
		extended: true,
	})
);
app.use(
	bodyParser.urlencoded({
		limit: "30mb",
		extended: true,
	})
);
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to memories API");
});

const PORT = process.env.PORT || 5000;
mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`server is runing on port ${PORT}`))
	)
	.catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
