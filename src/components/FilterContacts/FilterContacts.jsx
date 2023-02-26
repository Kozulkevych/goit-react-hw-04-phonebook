import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './FilterContacts.styled';

const FilterContacts = ({ value, onChange }) => (
      <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></InputFilter>
    </LabelFilter>
)

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterContacts;
