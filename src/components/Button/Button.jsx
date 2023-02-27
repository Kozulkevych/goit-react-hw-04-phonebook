import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ type = 'button', icon: Icon = null, children }) => {
  return (
    <StyledButton type={type}>
      {Icon && <Icon size="20" />}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  Icon: PropTypes.node,
  children: PropTypes.node.isRequired,
}
