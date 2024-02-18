import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = ({ children, path }) => {
  return (
    <Link to={path}>
      <button className={css.btn}>{children}</button>
    </Link>
  );
};
