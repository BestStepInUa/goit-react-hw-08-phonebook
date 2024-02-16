import { Button, Typography } from '@mui/material';

const UserMenu = () => {
  return (
    <>
      <Typography
        color="inherit"
        fontSize="20px"
        fontStyle="italic"
        sx={{ mr: '15px' }}
      >
        user@email.com
      </Typography>
      <Button variant="contained" href="#text-buttons">
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
