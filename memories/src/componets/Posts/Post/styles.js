import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  reactionTrigger: {
    background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
    color: '#fff',
    boxShadow: '0 6px 16px rgba(139,92,246,0.35)',
    '&:hover': {
      boxShadow: '0 8px 20px rgba(139,92,246,0.45)'
    }
  },
  
  mediaOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 10%, rgba(0,0,0,0) 60%)',
    opacity: 0,
    transition: 'opacity 300ms ease',
    pointerEvents: 'none',
  },
  
  mediaBox: {
    position: 'relative',
    overflow: 'hidden',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    cursor: 'pointer',
    '&:hover $mediaImg': { transform: 'scale(1.10)' },
    '&:hover $mediaOverlay': { opacity: 1 },
  },
  mediaImg: {
    width: '100%',
    height: 320,
    objectFit: 'cover',
    display: 'block',
    transform: 'scale(1)',
    transition: 'transform 500ms ease',
    willChange: 'transform',
  },
  card: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'visible',
    border: '2px solid rgba(139,92,246,0.10)',
    background: theme.palette.background.paper,
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
    }
  },
  
  header: {
    padding: theme.spacing(2),
    background: 'linear-gradient(90deg, rgba(139,92,246,0.05) 0%, rgba(236,72,153,0.05) 50%, rgba(249,115,22,0.05) 100%)',
    borderBottom: '2px solid rgba(139,92,246,0.20)'
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(1)
  },
  avatar: {
    width: 32,
    height: 32,
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  creator: {
    fontWeight: 600,
  },
  cardTitle: {
    fontWeight: 700,
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
    display: 'flex',
    gap: 8,
    zIndex: 2,
    opacity: 1,
    pointerEvents: 'auto',
    transform: 'none',
  },
  
  cardActions: {
    padding: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(1),
    background: 'linear-gradient(90deg, rgba(139,92,246,0.05) 0%, rgba(236,72,153,0.05) 50%, rgba(249,115,22,0.05) 100%)',
  },
  reactionsBar: {
    borderTop: '2px solid rgba(139,92,246,0.10)'
  },
  actionButton: {
    padding: theme.spacing(1, 1.5),
    borderRadius: 12,
    fontWeight: 700,
    textTransform: 'none',
  },
  
  reactionsPopperPaper: {
    padding: theme.spacing(1),
    borderRadius: 999,
    border: '1px solid rgba(139,92,246,0.35)',
    background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
    color: '#fff',
    boxShadow: '0 12px 28px rgba(0,0,0,0.22)',
    zIndex: 1300,
  },
  reactionsPopper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  reactionItem: {
    appearance: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: theme.spacing(0.75, 1),
    borderRadius: 16,
    background: 'rgba(255,255,255,0.12)',
    transition: 'transform 120ms ease, background 120ms ease, box-shadow 120ms ease',
    '&:hover': {
      transform: 'translateY(-2px) scale(1.05)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
    }
  },
  reactionActiveItem: {
    background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 100%)',
    color: '#fff',
  },
  reactionEmoji: {
    fontSize: 20,
    lineHeight: 1,
  },
  reactionCount: {
    fontSize: 12,
    opacity: 0.8,
  },
  
  commentButton: {
    background: 'linear-gradient(90deg, rgba(236,72,153,0.20) 0%, rgba(249,115,22,0.20) 100%)',
    color: '#EC4899',
  },
  shareButton: {
    background: 'linear-gradient(90deg, rgba(249,115,22,0.20) 0%, rgba(139,92,246,0.20) 100%)',
    color: '#F97316',
  },
  headerAction: {
    background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
    color: '#fff',
    borderRadius: 10,
    padding: 6,
    boxShadow: '0 6px 16px rgba(139,92,246,0.35)',
    '&:hover': {
      boxShadow: '0 8px 20px rgba(139,92,246,0.45)'
    }
  },
  headerActionDelete: {
    background: 'linear-gradient(90deg, #F43F5E 0%, #F97316 100%)',
    color: '#fff',
    borderRadius: 10,
    padding: 6,
    boxShadow: '0 6px 16px rgba(244,63,94,0.35)',
    '&:hover': {
      boxShadow: '0 8px 20px rgba(244,63,94,0.45)'
    }
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
    '40%': { transform: 'translateY(-10px)' },
    '60%': { transform: 'translateY(-5px)' },
  },
  bounce: {
    animation: '$bounce 1s ease',
  },
  tag: {
    background: 'linear-gradient(90deg, #8A2BE2 0%, #FF69B4 100%)',
    color: '#fff',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: 16,
    fontSize: '0.75rem',
    fontWeight: 600,
    marginRight: theme.spacing(1),
  },
  statsRow: {
    display: 'flex',
    gap: theme.spacing(3),
    padding: theme.spacing(1.25, 2),
    borderTop: '2px solid rgba(139,92,246,0.10)',
    borderBottom: '2px solid rgba(139,92,246,0.10)',
    background: 'linear-gradient(90deg, rgba(139,92,246,0.10) 0%, rgba(236,72,153,0.10) 50%, rgba(249,115,22,0.10) 100%)',
    fontWeight: 700,
  },
}));

