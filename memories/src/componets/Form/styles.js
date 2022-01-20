import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		boxShadow: "1px 1px 1px 3px gray",
		width: "auto",
		height: "auto",
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "100%",
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
	buttonContainer: {
		width: "100%",
		padding: "5px 10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	formHeading: {
		fontWeight: "bold",
		fontFamily: "cascadia code",
	},
}));
