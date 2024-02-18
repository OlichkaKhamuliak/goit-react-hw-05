import css from './HomeTitle.module.css';

export const HomeTitle = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};
