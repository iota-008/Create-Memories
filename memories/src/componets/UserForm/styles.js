import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		boxShadow: "1px 2px 3px 4px gray",
		width: "50%",
		margin: "auto",
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "50%",
		margin: "10px 0",
	},
	buttonSubmit: {
		marginBottom: 10,
		color: "white",
		borderStyle: "outset",
		height: "auto",
		width: "auto",
		fontWeight: "bold",
		fontSize: "15px",
		textShadow: "none",

		"&:hover": {
			boxShadow: "1px 3px 1px black",
		},
	},
	buttonClear: {
		marginBottom: 10,
		color: "white",
		borderStyle: "outset",
		height: "auto",
		width: "auto",
		fontWeight: "bold",
		fontSize: "15px",
		textShadow: "none",

		"&:hover": {
			boxShadow: "1px 3px 1px black",
		},
	},
	buttonSwitch: {
		marginBottom: 10,
		color: "white",
		borderStyle: "outset",
		height: "auto",
		width: "auto",
		fontWeight: "bold",
		fontSize: "15px",
		textShadow: "none",

		"&:hover": {
			boxShadow: "1px 3px 1px black",
		},
	},
	buttonContainer: {
		width: "100%",
		padding: "5px 10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	formHeading: {
		textSize: "100px",
		fontWeight: "bold",
		fontFamily: "cascadia code",
	},
}));
