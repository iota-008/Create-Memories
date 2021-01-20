import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		backgroundColor: "transparent",
		borderColor: "rgba(0,183,255, 1)",
		boxShadow: "1px 1px 3px 6px rgba(0,183,255, 1)",
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "97%",
		margin: "10px 0",
	},
	buttonSubmit: {
		marginBottom: 10,
	},
	formHeading: {
		color: "rgba(0,183,255, 1)",
		textSize: "90px",
		textShadow: "3px 3px 3px",
	},
}));
