import AddContactForm from 'components/AddContactForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactsList from 'components/ContactsList';

const ContactsPage = () => {
  return (
    <>
      <h1>My Phonebook</h1>
      <AddContactForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
