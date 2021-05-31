import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		// backgroundColor: "transparent",
		// backgroundColor: "#faa118",
		borderColor: "#faa118",
		boxShadow: "1px 1px 3px 6px #faa118",
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
		// backgroundColor: "green",
		// width: "80%",
		fontWeight: "bold",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: "5em",
		paddingBottom: 5,
		marginTop: 10,
		marginBottom: 10,
	},
	buttonClear: {
		// backgroundColor: "red",
		// width: "80%",
		fontWeight: "bold",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: "5em",
		paddingBottom: 5,
		marginTop: 10,
		marginBottom: 10,
	},
	formHeading: {
		color: "#f69306",
		fontFamily: "Pattaya",
		textSize: "90px",
		textShadow: "1px 1px 1px",
	},
	textField: {
		"& label.Mui-focused": {
			color: "blue",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "blue",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "red",
			},
			"&:hover fieldset": {
				borderColor: "blue",
			},
			"&.Mui-focused fieldset": {
				borderColor: "green",
			},
			borderRadius: "5em",
		},
		// width: "80%",
		marginLeft: "auto",
		marginRight: "auto",
		paddingBottom: 0,
		marginTop: 0,
	},
}));
