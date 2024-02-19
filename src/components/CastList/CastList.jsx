import defaultPng from '../../assets/person.png';
import css from './CastList.module.css';

export const CastList = ({ performers }) => {
  const defaultImg = defaultPng;
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <ul className={css.list}>
      {performers.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <div className={css.item}>
            <img
              className={profile_path ? css.image : css.defaultImage}
              src={profile_path ? baseUrl + profile_path : defaultImg}
              alt={name}
            />
            <div className={css.caption}>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
