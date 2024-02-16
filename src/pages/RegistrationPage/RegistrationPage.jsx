import { ThemeProvider, createTheme } from '@mui/material';
import RegistrationForm from 'components/RegistrationForm';
import { orange } from 'components/RegistrationForm/RegistrationForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';
import SignUpTitleStyled from './RegistrationPage.styled';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

const RegistrationPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  // const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <SignUpTitleStyled>Please Sign Up</SignUpTitleStyled>
      {authLoading && <p>....Register in progress</p>}
      <ThemeProvider theme={theme}>
        <RegistrationForm onSubmit={handleSignup} />
      </ThemeProvider>
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </>
  );
};

export default RegistrationPage;
