import { ThemeProvider, createTheme } from '@mui/material';
import LoginForm from 'components/LoginForm';
import { orange } from 'components/RegistrationForm/RegistrationForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import {
  selectAuthError,
  selectAuthLoading,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';
import LoginTitleStyled from './LoginPage.styled';
import { Navigate } from 'react-router-dom';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleLogin = credentials => {
    dispatch(login(credentials));
  };

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return (
    <>
      <LoginTitleStyled>Please Login</LoginTitleStyled>
      {authLoading && <p>....Login in progress</p>}
      <ThemeProvider theme={theme}>
        <LoginForm onSubmit={handleLogin} />
      </ThemeProvider>
      {authError && (
        <p style={{ color: 'red' }}>Invalid data. Check them and try again</p>
      )}
    </>
  );
};

export default LoginPage;
