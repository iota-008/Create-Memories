import jsonwebtoken from "jsonwebtoken";
export const verify = (req, res, next) => {
	// console.log(`req-headers of verify : `, req.headers);
	const authHeader = req.headers["auth-token"];
	// console.log("authHeaders of verify : ", authHeader);
	const token = authHeader && authHeader.split(" ")[1];
	// const token = req.cookies.token;
	// console.log(`token of verify: `, token);
	if (!token) return res.status(401).json({ message: "access-denied" });
	try {
		jsonwebtoken.verify(token, process.env.SECRET_KEY, (err, user) => {
			// console.log(`verified User :  `, user);
			req.user = user;
			// res.send(user);
			next();
		});
	} catch (error) {
		return res.status(403).json({ message: "invalid token" });
	}
};
