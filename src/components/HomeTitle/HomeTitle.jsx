import css from './HomeTitle.module.css';

const HomeTitle = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};

export default HomeTitle;
