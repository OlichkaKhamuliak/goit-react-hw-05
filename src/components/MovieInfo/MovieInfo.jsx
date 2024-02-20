const baseUrl = 'https://image.tmdb.org/t/p/w500';
import { NavLink, Outlet } from 'react-router-dom';
import css from './MovieInfo.module.css';
import clsx from 'clsx';
import imgDefault from '../../assets/filmDefault.png';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const MovieInfo = ({
  movie: { backdrop_path, original_title, overview, release_date, vote_average, genres },
}) => {
  const imageUrl = backdrop_path ? baseUrl + backdrop_path : imgDefault;
  const year = release_date.split('-')[0];
  const scorePercent = Math.round(vote_average * 100) / 10;
  const genresNames = genres.map(genre => genre.name);
  const joinedGenres = genresNames.join(', ');

  return (
    <div>
      <div className={css.wrap}>
        <div className={css.imgWrap}>
          <img src={imageUrl} alt={original_title} />
        </div>
        <div className={css.wrapDesc}>
          <div className={css.description}>
            <h2 className={css.title}>
              {original_title} ({year})
            </h2>
            <p>User Score: {scorePercent}%</p>
          </div>
          {overview ? (
            <div className={css.description}>
              <h3 className={css.title}>Overview</h3>
              <p>{overview}</p>
            </div>
          ) : (
            <div className={css.description}>
              <h3 className={css.title}>Overview</h3>
              <p>No information available.</p>
            </div>
          )}
          {genres.length > 0 ? (
            <div className={css.description}>
              <h3 className={css.title}>Genres</h3>
              <p>{joinedGenres}</p>
            </div>
          ) : (
            <div className={css.description}>
              <h3 className={css.title}>Genres</h3>
              <p>No information available.</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className={css.subpagesTitle}>Additional information</p>
        <ul className={css.subpagesList}>
          <li className={css.subpagesItem}>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li className={css.subpagesItem}>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
