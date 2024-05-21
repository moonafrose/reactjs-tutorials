import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  return <button style={{ backgroundColor: 'red' }}>{children}</button>;
};

export default Button;