import { Toaster } from 'react-hot-toast';
// import AddContactForm from 'components/AddContactForm';
// import ContactsList from 'components/ContactsList';
// import ContactsFilter from 'components/ContactsFilter';
import AppContainer from './App.styled';
import Header from 'components/Header';
import RegistrationPage from 'pages/RegistrationPage';

const App = () => {
  return (
    <>
      <Header />
      <AppContainer>
        {/* <h1>Phonebook</h1>
      <AddContactForm />
      <ContactsFilter />
      <ContactsList /> */}
        <RegistrationPage />
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      </AppContainer>
    </>
  );
};

export default App;
