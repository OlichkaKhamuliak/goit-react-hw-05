import { MoviesItem } from '../MoviesItem/MoviesItem';
import css from './MoviesList.module.css';

export const MoviesList = ({ films }) => {
  return (
    <ul className={css.list}>
      {films.map(({ id, title, backdrop_path }) => (
        <li key={id}>
          <MoviesItem filmName={title} url={backdrop_path} />
        </li>
      ))}
    </ul>
  );
};
