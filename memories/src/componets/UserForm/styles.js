import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "stretch",
    background:
      theme.palette.type === "dark"
        ? theme.palette.background.default
        : "#f5f6f7",
    padding: 0,
  },
  helperLabel: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
  },
  helperLink: {
    fontSize: 12,
    textTransform: "none",
    padding: theme.spacing(0.5, 0.75),
    minWidth: "auto",
  },
  authRoot: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  leftPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6),
    background:
      "radial-gradient(60rem 60rem at -20% -20%, rgba(124,58,237,0.04), transparent 40%), " +
      "radial-gradient(40rem 40rem at 120% 120%, rgba(244,63,94,0.04), transparent 40%)",
  },
  rightPanel: {
    position: "relative",
    background:
      "linear-gradient(135deg, #7C3AED 0%, #a78bfa 50%, #5b21b6 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6),
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      minHeight: "40vh",
    },
  },
  illustration: {
    width: "80%",
    maxWidth: 520,
    borderRadius: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
  },
  brand: {
    position: "absolute",
    top: theme.spacing(4),
    left: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  brandTagline: {
    position: "absolute",
    top: theme.spacing(10),
    left: theme.spacing(4),
    maxWidth: 420,
    opacity: 0.9,
  },
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
    },
  },
  paper: {
    width: "100%",
    maxWidth: 440,
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow:
      "0 10px 25px rgba(0,0,0,0.10), 0 6px 10px rgba(0,0,0,0.06)",
    background: theme.palette.background.paper,
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 12,
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: 0.2,
    height: 44,
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    transition: "transform .06s ease, box-shadow .2s ease",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
    },
  },
  buttonClear: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 12,
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: 0.2,
    height: 44,
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    transition: "transform .06s ease, box-shadow .2s ease",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
    },
  },
  buttonSwitch: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 12,
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: 0.2,
    height: 44,
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    transition: "transform .06s ease, box-shadow .2s ease",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
    },
  },
  buttonContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(1.5),
  },
  formHeading: {
    width: "100%",
    textAlign: "left",
    fontWeight: 700,
    letterSpacing: 0.2,
    marginBottom: theme.spacing(2),
  },
  helperRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    flexWrap: "nowrap",
    columnGap: theme.spacing(1),
  },
  dividerRow: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gap: theme.spacing(1),
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  dividerLine: {
    height: 1,
    background: "rgba(0,0,0,0.12)",
  },
  googleButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: 12,
    textTransform: "none",
    fontWeight: 600,
    height: 44,
  },
}));
