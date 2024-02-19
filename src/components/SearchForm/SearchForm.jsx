import { FcSearch } from 'react-icons/fc';
import css from './SearchForm.module.css';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Empty string! Please enter text to search images.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          placeholder="Enter search movie"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          <FcSearch className={css.svg} size="30px" />
        </button>
      </form>
    </div>
  );
};
