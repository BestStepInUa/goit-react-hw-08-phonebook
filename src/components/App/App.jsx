import { Toaster } from 'react-hot-toast';

import AppRoutes from 'AppRoutes';

const App = () => {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </>
  );
};

export default App;
