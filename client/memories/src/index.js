import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
import { reducers } from "./reducers";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import React from "react";
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			{/* <ToastContainer /> */}
		</Provider>
	</BrowserRouter>,

	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
