import { FcSearch } from 'react-icons/fc';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <label className={css.label}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="search"
          />
          <button className={css.button} type="submit">
            <FcSearch className={css.svg} size="30px" />
          </button>
        </label>
      </form>
    </div>
  );
};
