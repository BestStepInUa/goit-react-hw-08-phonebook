import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NavbarAuth from 'components/NavbarAuth';
import UserMenu from 'components/UserMenu';

const NavBar = () => {
  const isLogin = false;
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background:
            'radial-gradient( 189.32% 190.93% at 59.76% -23.42%, #4f2ee8 18.03%, #fff 100% )',
        }}
      >
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
            href="/goit-react-hw-08-phonebook/my-contacts"
            color="inherit"
            fontSize="20px"
            display="flex"
            columnGap="5px"
            alignItems="center"
            sx={{ flexGrow: 1, ml: '40px' }}
            underline="none"
          >
            Contacts
            <ContactPhoneIcon fontSize="large" sx={{ color: '#fff' }} />
          </Link>
          {isLogin ? <UserMenu /> : <NavbarAuth />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
