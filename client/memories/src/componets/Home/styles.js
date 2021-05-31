import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "0 0 20px 0 ",
		padding: "5px 10px 5px 20px",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#0000e6",
	},
	heading: {
		fontFamily: "Pattaya",
		justifyContent: "start",
		color: "rgba(250,250,250, 1)",
		textShadow: "1px 1px 1px ",
	},
	buttonLogout: {
		justifyContent: "end",
		fontWeight: "bold",
		// width: "9%",
		color: "white",
		backgroundColor: "#faa118",
		borderRadius: "10px",
		padding: "5px 10px",
	},
	image: {
		marginLeft: "15px",
	},
	[theme.breakpoints.down("sm")]: {
		mainContainer: {
			flexDirection: "column-reverse",
		},
	},
}));
