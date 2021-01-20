import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "20px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "transparent",
	},
	heading: {
		color: "rgba(0,183,255, 1)",
		textShadow: "5px 5px 5px ",
	},
	buttonSubmit: {
		width: 100,
		backgroundColor:"red",
		marginLeft: 830,
		marginBottom: 10,
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
