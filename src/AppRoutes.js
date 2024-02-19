import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PrivateRoute />}>
          <Route path="my-contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="signup" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
