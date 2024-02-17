import css from './MoviesItem.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

export const MoviesItem = ({ filmName, url }) => {
  return (
    <div className={css.item}>
      <img className={css.image} src={baseUrl + url} alt={filmName} />
      <p className={css.caption}>{filmName}</p>
    </div>
  );
};
