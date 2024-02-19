import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';

const { Outlet, Navigate } = require('react-router-dom');

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }
  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
