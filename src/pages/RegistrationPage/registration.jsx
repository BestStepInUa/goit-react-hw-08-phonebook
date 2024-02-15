import { ThemeProvider, createTheme } from '@mui/material';
import RegistrationForm from 'components/RegistrationForm';
import { orange } from 'components/RegistrationForm/RegistrationForm.styled';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

const RegistrationPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <RegistrationForm />
    </ThemeProvider>
  );
};

export default RegistrationPage;
