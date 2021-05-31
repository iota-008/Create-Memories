import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		// width: theme.spacing(100),
		backgroundColor: "transparent",
		boxShadow: "none",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
	},
	form: {
		padding: theme.spacing(2),
		// backgroundColor: "#0000e6",
		borderColor: "rgba(0,183,255, 1)",
		boxShadow: "1px 1px 3px 6px rgba(0,183,255, 1)",
		borderRadius: "20px",
		width: "50%",
		// height: "80vh",
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
	},
	fileInput: {
		width: "97%",
		margin: "10px 0",
	},
	buttonSubmit: {
		// backgroundColor: "green",
		width: "80%",
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
		width: "80%",
		fontWeight: "bold",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: "5em",
		paddingBottom: 5,
		marginTop: 10,
		marginBottom: 10,
	},
	buttonSwitch: {
		// backgroundColor: "red",
		width: "100%",
		fontWeight: "bold",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: "5em",
		paddingBottom: 5,
		marginTop: 10,
		marginBottom: 10,
	},
	formHeading: {
		// color: "rgba(0,183,255, 1)",
		color: "white",
		textSize: "90px",
		fontWeight: "bold",
		textShadow: "1px 2px 3px",
	},
	textField: {
		"& label.Mui-focused": {
			color: "white",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#fb9a95",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#0011e9",
			},
			"&:hover fieldset": {
				borderColor: "#fb9a95",
			},
			"&.Mui-focused fieldset": {
				borderColor: "green",
			},
			borderRadius: "5em",
		},
		width: "80%",
		marginLeft: "auto",
		marginRight: "auto",
		paddingBottom: 0,
		marginTop: 0,
	},
}));
