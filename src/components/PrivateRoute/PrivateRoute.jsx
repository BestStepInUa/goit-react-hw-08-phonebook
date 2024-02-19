import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';

const { Outlet, Navigate } = require('react-router-dom');

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }
  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
