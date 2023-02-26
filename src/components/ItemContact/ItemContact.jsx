import PropTypes from 'prop-types';
import { ContactItem, Text, ButtonDelete } from './ItemContact.styled';
import { GrClose } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';

const ItemContact = ({ id, name, number, onDelete }) => {
  return (
    <ContactItem>
      <Text>
        <FaUser size="16" />
        &nbsp;
        {name}: {number}
      </Text>
      <ButtonDelete
        onClick={() => onDelete(id)}
        type="button"
        // sx={{
        //   variant: 'buttons.primary',
        // }}
      >
        <GrClose size="18" />
        {/* Delete */}
      </ButtonDelete>
    </ContactItem>
  );
};
ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ItemContact;
