import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

const GoBackBtn = ({ children, path }) => {
  return (
    <Link to={path}>
      <button className={css.btn}>{children}</button>
    </Link>
  );
};

export default GoBackBtn;
