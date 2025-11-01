import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import React, { useMemo, useState } from "react";
import App from "./App";
import "./index.css";
import { Button } from "@material-ui/core";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { lightTheme, darkTheme, ThemeModeContext } from "./theme";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const AppRoot = () => {
  const [mode, setMode] = useState("light");
  const value = useMemo(
    () => ({ mode, toggle: () => setMode((m) => (m === "light" ? "dark" : "light")) }),
    [mode]
  );
  const theme = mode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeModeContext.Provider value={value}>
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
    </ThemeModeContext.Provider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRoot />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
