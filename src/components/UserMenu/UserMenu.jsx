import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <>
      <Typography
        color="inherit"
        fontSize="20px"
        fontStyle="italic"
        sx={{ mr: '15px' }}
      >
        {email}
      </Typography>
      <Button onClick={onLogout} variant="contained" href="#text-buttons">
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
