import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import ContactItemStyled from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </ContactItemStyled>
  );
};

export default ContactItem;
