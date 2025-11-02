import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #F97316 100%)',
    padding: theme.spacing(1, 0),
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
  },
  appBarInner: {
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  },
  heartBadge: {
    background: '#FFFFFF',
    borderRadius: 12,
    width: 48,
    height: 48,
    boxShadow: '0 12px 22px rgba(0,0,0,0.2)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1.25),
  },
  bouncingHeart: {
    animation: '$pulse 2s ease-in-out infinite',
    display: 'inline-block',
    color: '#FF69B4',
  },
  star: {
    animation: '$spin 3s linear infinite',
    marginLeft: theme.spacing(1),
    display: 'inline-block',
    color: '#FDE047',
  },
  headingWhite: {
    color: '#FFFFFF',
    fontFamily: 'Merriweather, serif',
    fontWeight: 800,
    letterSpacing: 0.2,
    textShadow: '0 2px 6px rgba(0,0,0,0.35)',
  },
  subheadingWhite: {
    color: '#FFFFFF',
    opacity: 0.95,
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 600,
    fontSize: 12,
    marginTop: -4,
  },
  heading: {
    fontFamily: "cascadia code",
    color: theme.palette.text.primary,
  },
  subheading: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginTop: -4,
  },
  headerIcon: {
    background: 'linear-gradient(90deg, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.12) 50%, rgba(249,115,22,0.12) 100%)',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 6,
    border: '1px solid rgba(255,255,255,0.25)',
    boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
    '& svg': { fill: '#FFFFFF' },
    '& path': { fill: '#FFFFFF' },
    '&:hover': {
      boxShadow: '0 5px 12px rgba(0,0,0,0.18)'
    },
  },
  buttonLogout: {
    background: 'linear-gradient(90deg, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.12) 50%, rgba(249,115,22,0.12) 100%)',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 6,
    border: '1px solid rgba(255,255,255,0.25)',
    boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
    '& svg': { fill: '#FFFFFF' },
    '& path': { fill: '#FFFFFF' },
    '&:hover': {
      boxShadow: '0 5px 12px rgba(0,0,0,0.18)'
    },
  },
  MemoriesLogo: {
    width: "3em",
    height: "auto",
    padding: "0px 0.5em 0px 0px",
    "&:hover": {
      cursor: "pointer",
      filter: "drop-shadow(0 0 8px rgba(124,58,237,0.45))",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  image: {
    marginLeft: "15px",
  },
  toolbarSpacer: {
    ...theme.mixins.toolbar,
  },
  mainContainer: {},
  contentContainer: {
    paddingTop: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
