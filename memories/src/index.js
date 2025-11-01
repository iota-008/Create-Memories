import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import React from "react";
import App from "./App";
import "./index.css";
import { Button } from "@material-ui/core";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Toaster
					position='top-right'
					toastOptions={{
						style: {
							fontSize: "12px",
							fontFamily: "cascadia code",
						},
					}}
				>
					{(t) => (
						<ToastBar toast={t}>
							{({ icon, message }) => (
								<>
									{icon}
									{message}
									{t.type !== "loading" && (
										<Button onClick={() => toast.dismiss(t.id)}>X</Button>
									)}
								</>
							)}
						</ToastBar>
					)}
				</Toaster>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>,

	document.getElementById("root")
);
