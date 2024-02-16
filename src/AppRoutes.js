// import ContactsPage from 'pages/ContactsPage';
// import RegistrationPage from 'pages/RegistrationPage';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import RegistrationPage from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactsPage';

// const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="signup" element={<RegistrationPage />} />
        <Route path="my-contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
