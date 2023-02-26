import PropTypes from 'prop-types';
import ItemContact  from '../ItemContact/ItemContact';
import { ContactsList } from './ListContacts.styled';

const ListContacts = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ItemContact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ContactsList>
  );
};

ListContacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ListContacts