import AddContactForm from 'components/AddContactForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactsList from 'components/ContactsList';
import ContactsTitleStyled from './ContactPage.styled';

const ContactsPage = () => {
  return (
    <>
      <ContactsTitleStyled>My contacts</ContactsTitleStyled>
      <AddContactForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
