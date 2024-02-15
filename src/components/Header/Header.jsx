import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: '#2E3B55' }}>
      <Toolbar sx={{ height: '32px' }}>
        <Typography
          component="h1"
          fontFamily="Helvetica Neue"
          fontSize="40px"
          fontStyle="italic"
          lineHeight="32px"
          variant="overline"
          align="left"
          color="pink"
        >
          My phone book
        </Typography>
        <Link
          color="inherit"
          fontSize="20px"
          display="flex"
          columnGap="5px"
          alignItems="center"
          sx={{ flexGrow: 1, ml: '40px' }}
          underline="none"
        >
          Contacts <ContactPhoneIcon fontSize="large" sx={{ color: '#fff' }} />
        </Link>
        <Link color="inherit" fontSize="20px" sx={{ mr: '15px' }}>
          Login
        </Link>
        <Link color="inherit" fontSize="20px">
          SignUp
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
