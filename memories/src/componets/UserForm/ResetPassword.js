import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Paper, TextField, Typography, LinearProgress, IconButton, InputAdornment } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { resetPassword as resetPasswordAction } from "../../actions/Users";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { ReactComponent as MemoriesLogo } from "../../svg/Memories-logo.svg";
import hero from "../../images/memories.png";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const ResetPassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const token = query.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!password || password.length < 6) {
      setError("Use 6+ characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await dispatch(resetPasswordAction(token, password));
      navigate("/auth/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.authRoot}>
      <div className={classes.leftPanel}>
        <Paper className={classes.paper}>
          {loading && <LinearProgress color='primary' />}
          <Typography className={classes.formHeading} variant='h4' component='h1'>
            Reset password
          </Typography>
          <Typography variant='body2' color='textSecondary' style={{ marginTop: 4 }}>Choose a strong password and keep it safe.</Typography>
          <form className={`${classes.root}  ${classes.form}`} onSubmit={handleSubmit}>
            <TextField
              label='New password'
              type={showPass ? 'text' : 'password'}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlinedIcon color='action' />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={() => setShowPass((s) => !s)} edge='end'>
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label='Confirm password'
              type={showConfirm ? 'text' : 'password'}
              fullWidth
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              helperText={error}
              error={Boolean(error)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlinedIcon color='action' />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={() => setShowConfirm((s) => !s)} edge='end'>
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className={classes.buttonContainer}>
              <Button className={classes.buttonSubmit} variant='contained' color='primary' type='submit' disabled={loading}>Update</Button>
              <Button className={classes.buttonClear} variant='text' color='secondary' onClick={() => navigate('/auth/login')}>Cancel</Button>
            </div>
          </form>
        </Paper>
      </div>
      <div className={classes.rightPanel}>
        <div className={classes.brand}>
          <MemoriesLogo width={28} height={28} />
          <Typography variant='h6'>Memories</Typography>
        </div>
        <Typography className={classes.brandTagline} variant='subtitle1'>
          Choose a strong password to protect your memories.
        </Typography>
        <img className={classes.illustration} src={hero} alt='Memories' />
      </div>
    </div>
  );
};

export default ResetPassword;
