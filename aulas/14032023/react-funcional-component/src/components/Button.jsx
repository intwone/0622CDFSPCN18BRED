import propTypes from 'prop-types';
import './Button.css';

export function Button({ children }) {
  return <button>{children}</button>
}

Button.propTypes = {
  children: propTypes.string
}
