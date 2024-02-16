import { ThemeProvider, createTheme } from '@mui/material';
import LoginForm from 'components/LoginForm';
import { orange } from 'components/RegistrationForm/RegistrationForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';
import LoginTitleStyled from './LoginPage.styled';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  // const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <>
      <LoginTitleStyled>Please Login</LoginTitleStyled>
      {authLoading && <p>....Login in progress</p>}
      <ThemeProvider theme={theme}>
        <LoginForm onSubmit={handleLogin} />
      </ThemeProvider>
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </>
  );
};

export default LoginPage;
