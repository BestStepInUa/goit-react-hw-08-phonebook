import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
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
      <Button variant="contained" href="#text-buttons">
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
