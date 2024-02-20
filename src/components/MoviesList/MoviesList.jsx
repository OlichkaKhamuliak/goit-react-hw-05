import { Link, useLocation } from 'react-router-dom';
import MoviesItem from '../MoviesItem/MoviesItem';
import css from './MoviesList.module.css';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {films.map(({ id, title, backdrop_path }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <MoviesItem filmName={title} url={backdrop_path} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
