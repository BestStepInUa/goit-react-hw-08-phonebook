import { AppBar, Toolbar, Link, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NavbarAuth from 'components/NavbarAuth';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import { Link as ContactLink } from 'react-router-dom';

const NavBar = () => {
  const isLogin = useSelector(selectIsLogin);

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
            sx={{ flexGrow: 1 }}
          >
            My phone book
          </Typography>
          {isLogin ? (
            <>
              <Link
                component={ContactLink}
                to="/my-contacts"
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
              <UserMenu />
            </>
          ) : (
            <NavbarAuth />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
