import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "0px 0px 3% 0px",
		padding: "0.75rem",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	heading: {
		fontFamily: "cascadia code",
	},
	buttonLogout: {
		width: "2em",
		"&:hover": {
			cursor: "pointer",
		},
	},
	MemoriesLogo: {
		width: "3em",
		height: "auto",
		padding: "0px 0.5em 0px 0px",
		"&:hover": {
			cursor: "pointer",
		},
	},
	logoContainer: {
		display: "flex",
		flexDirection: "row",
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
