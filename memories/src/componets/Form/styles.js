import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  '@keyframes spinStar': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  spinningStarForm: {
    display: 'inline-block',
    animation: '$spinStar 2s linear infinite',
  },
  paper: {
    padding: theme.spacing(3),
    background: theme.palette.type === 'light'
      ? 'linear-gradient(180deg, #E9D5FF 0%, #FECDD3 100%)'
      : 'linear-gradient(180deg, #3B0764 0%, #4A044E 100%)',
    borderRadius: 16,
    border: `1px solid ${theme.palette.divider}`,
    position: "sticky",
    top: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 600,
    fontSize: '0.8rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
  },
  input: {
    background: theme.palette.type === 'light'
      ? 'linear-gradient(180deg, #FFFFFF 0%, #F7F5FF 100%)'
      : 'linear-gradient(180deg, #1C1C24 0%, #181822 100%)',
    border: theme.palette.type === 'light' ? '1px solid #E8E4F0' : '1px solid #2D2D3A',
    borderRadius: 8,
    padding: theme.spacing(1.25, 1.5),
    fontSize: '0.9rem',
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.type === 'light' ? '#9B96A8' : '#6B6B7B',
    },
    '&:focus': {
      outline: 'none',
      borderColor: theme.palette.primary.main,
    },
  },
  textarea: {
    background: theme.palette.type === 'light'
      ? 'linear-gradient(180deg, #FFFFFF 0%, #F7F5FF 100%)'
      : 'linear-gradient(180deg, #1C1C24 0%, #181822 100%)',
    border: theme.palette.type === 'light' ? '1px solid #E8E4F0' : '1px solid #2D2D3A',
    borderRadius: 8,
    padding: theme.spacing(1.25, 1.5),
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: 80,
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.type === 'light' ? '#9B96A8' : '#6B6B7B',
    },
    '&:focus': {
      outline: 'none',
      borderColor: theme.palette.primary.main,
    },
  },
  uploadArea: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1.5),
    width: "100%",
    border: theme.palette.type === 'light' ? `1px dashed #D0CAE0` : `1px dashed #3A3A4A`,
    borderRadius: 8,
    padding: theme.spacing(1.5),
    color: theme.palette.text.secondary,
    textAlign: "center",
    cursor: "pointer",
    background: theme.palette.type === 'light'
      ? 'linear-gradient(135deg, #FAFBFF 0%, #F3F0FF 100%)'
      : 'linear-gradient(135deg, #16161E 0%, #14141C 100%)',
    transition: "background 0.2s ease, border-color 0.2s ease",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
  gradientText: {
    background: 'linear-gradient(90deg, #A78BFA 0%, #F97316 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  buttonSubmit: {
    padding: theme.spacing(1.25, 3),
    borderRadius: 20,
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#fff',
    background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
    '&:hover': {
      boxShadow: '0 6px 16px rgba(139, 92, 246, 0.4)',
    }
  },
  buttonClear: {
    padding: theme.spacing(1.25, 3),
    borderRadius: 20,
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#FFFFFF',
    background: '#FF5722',
    border: 'none',
    '&:hover': {
      background: '#F4511E',
    }
  },
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(1.5),
  },
}));

