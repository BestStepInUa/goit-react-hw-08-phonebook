import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filter-slice';

import ContactsFilterStyled from './ContactsFilter.styled';
import { selectFilter } from '../../redux/filter/filter-selectors';

const ContactsFilter = () => {
  const name = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <ContactsFilterStyled>
      Find contacts by name:
      <input
        type="text"
        value={name}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </ContactsFilterStyled>
  );
};

export default ContactsFilter;
