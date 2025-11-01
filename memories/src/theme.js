import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const primary = {
  main: "#7C3AED", // purple
  light: "#a78bfa",
  dark: "#5b21b6",
  contrastText: "#ffffff",
};
const secondary = {
  main: "#F43F5E", // rose
  light: "#fb7185",
};

const error = {
  main: "#FF4500", // orange-red
};

// Colorful LIGHT theme (default)
export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary,
    secondary,
    error,
    background: {
      default: "#FFFBF8", // A very light, warm off-white
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#757575",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontSize: 14,
    h4: { fontWeight: 700, lineHeight: 1.2 },
    h5: { fontWeight: 700 },
    subtitle2: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 14,
        backgroundImage: "linear-gradient(180deg, rgba(124,58,237,0.06), rgba(244,63,94,0.04))",
      },
      elevation3: {
        boxShadow: "0 10px 24px rgba(124,58,237,0.12)",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: primary.main,
        },
        backgroundColor: "#FFFFFF",
      },
      notchedOutline: {},
      focused: {},
    },
    MuiButton: {
      containedPrimary: {
        color: "#fff",
        boxShadow: "0 6px 16px rgba(124,58,237,0.28)",
      },
      containedSecondary: {
        color: "#fff",
        boxShadow: "0 6px 16px rgba(244,63,94,0.28)",
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#FFFFFF",
      },
    },
  },
});

// DARK theme
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary,
    secondary,
    background: {
      default: "#0f0f14",
      paper: "#161622",
    },
    text: {
      primary: "#E5E7EB",
      secondary: "#A1A1AA",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontSize: 14,
    h4: { fontWeight: 700, lineHeight: 1.2 },
    h5: { fontWeight: 700 },
    subtitle2: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 14,
        backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
      },
      elevation3: {
        boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: primary.main,
        },
        backgroundColor: "#111118",
      },
      notchedOutline: {},
      focused: {},
    },
    MuiButton: {
      containedPrimary: {
        color: "#fff",
        boxShadow: "0 6px 16px rgba(124,58,237,0.35)",
      },
      containedSecondary: {
        color: "#fff",
        boxShadow: "0 6px 16px rgba(244,63,94,0.35)",
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#161622",
      },
    },
  },
});

export const ThemeModeContext = React.createContext({
  mode: "light",
  toggle: () => {},
});

