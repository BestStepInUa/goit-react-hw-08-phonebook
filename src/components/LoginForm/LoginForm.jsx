import { useState } from 'react';
import {
  InputAdornment,
  CssBaseline,
  Paper,
  Avatar,
  FormControl,
  Input,
  InputLabel,
  Button,
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';

import { withStyles } from '@mui/styles';
import { login } from './LoginForm.styled';

const INITIAL_STATE = {
  email: '',
  password: '',
  hidePassword: true,
};

const LoginForm = ({ onSubmit, classes }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    const { email, password } = state;
    e.preventDefault();
    onSubmit({ email, password });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const showPassword = () => {
    setState(prevState => ({
      ...prevState,
      hidePassword: !prevState.hidePassword,
    }));
  };

  const { hidePassword } = state;

  return (
    <div className={classes.main}>
      <CssBaseline />

      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PeopleAltIcon className={classes.icon} />
        </Avatar>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="name" className={classes.labels}>
              Email:
            </InputLabel>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="passwordConfrim" className={classes.labels}>
              Password:
            </InputLabel>
            <Input
              name="password"
              autoComplete="password"
              className={classes.inputs}
              disableUnderline={true}
              onClick={showPassword}
              onChange={handleChange}
              type={hidePassword ? 'password' : 'input'}
              endAdornment={
                hidePassword ? (
                  <InputAdornment position="end">
                    <VisibilityOffTwoToneIcon
                      fontSize="default"
                      className={classes.passwordEye}
                      onClick={showPassword}
                    />
                  </InputAdornment>
                ) : (
                  <InputAdornment position="end">
                    <VisibilityTwoToneIcon
                      fontSize="default"
                      className={classes.passwordEye}
                      onClick={showPassword}
                    />
                  </InputAdornment>
                )
              }
            />
          </FormControl>
          <Button
            disableRipple
            fullWidth
            variant="outlined"
            className={classes.button}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default withStyles(login)(LoginForm);
