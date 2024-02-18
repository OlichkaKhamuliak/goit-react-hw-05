const baseUrl = 'https://image.tmdb.org/t/p/w500';
import css from './MovieInfo.module.css';

export const MovieInfo = ({
  movie: { backdrop_path, original_title, overview, release_date, vote_average, genres },
}) => {
  const year = release_date.split('-')[0];
  const scorePercent = Math.round(vote_average * 10);
  const genresNames = genres.map(genre => genre.name);
  const joinedGenres = genresNames.join(', ');

  return (
    <div className={css.wrap}>
      <div className={css.imgWrap}>
        <img src={baseUrl + backdrop_path} alt={original_title} />
      </div>
      <div className={css.wrapDesc}>
        <div className={css.description}>
          <h2 className={css.title}>
            {original_title} ({year})
          </h2>
          <p>User Score: {scorePercent}%</p>
        </div>
        <div className={css.description}>
          <h3 className={css.title}>Overview</h3>
          <p>{overview}</p>
        </div>
        <div className={css.description}>
          <h3 className={css.title}>Genres</h3>
          <p>{joinedGenres}</p>
        </div>
      </div>
    </div>
  );
};

// backdrop_path
// id
// original_title
// overview;
// popularity;
// release_date;
// vote_average;
// vote_count;