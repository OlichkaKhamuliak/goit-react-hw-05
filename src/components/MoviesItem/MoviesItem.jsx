import css from './MoviesItem.module.css';
import imgDefault from '../../assets/filmDefault.png';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

export const MoviesItem = ({ filmName, url }) => {
  const imageUrl = url ? baseUrl + url : imgDefault;

  return (
    <div className={css.item}>
      <img className={css.image} src={imageUrl} alt={filmName} />
      <p className={css.caption}>{filmName}</p>
    </div>
  );
};
