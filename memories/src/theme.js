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
  dark: "#be123c",
  contrastText: "#ffffff",
};

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
  },
  typography: {
    fontSize: 14,
    h4: { fontWeight: 700, lineHeight: 1.2 },
    subtitle2: { fontWeight: 600 },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: primary.main,
        },
      },
      notchedOutline: {},
      focused: {},
    },
    MuiButton: {
      containedPrimary: {
        boxShadow: "0 4px 14px rgba(124,58,237,0.25)",
      },
    },
  },
});

export default theme;
