import { Toaster } from 'react-hot-toast';
import { current } from '../../redux/auth/auth-operations';
import AppRoutes from 'AppRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </>
  );
};

export default App;
