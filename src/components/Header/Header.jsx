import { AppBar, Toolbar, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import { CenterFocusStrong } from '@mui/icons-material';
// import ContactsIcon from '@mui/icons-material/Contacts';

const Header = () => {
  return (
    <AppBar>
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
          display="flex"
          columnGap="15px"
          alignItems="center"
        >
          My phone book{' '}
          <ContactPhoneIcon fontSize="large" sx={{ color: '#fff' }} />
        </Typography>
        {/* <IconButton>
          <ContactsIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
