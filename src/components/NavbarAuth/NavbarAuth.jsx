import { Link } from '@mui/material';
import React from 'react';

const NavbarAuth = () => {
  return (
    <>
      <Link
        href="/goit-react-hw-08-phonebook/login"
        color="inherit"
        fontSize="20px"
        sx={{ mr: '15px' }}
      >
        Login
      </Link>
      <Link
        href="/goit-react-hw-08-phonebook/signup"
        color="inherit"
        fontSize="20px"
      >
        SignUp
      </Link>
    </>
  );
};

export default NavbarAuth;
