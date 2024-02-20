import { useRef } from 'react';
import { useFetchMovie } from '../hooks/useFetchMovie';
import { useLocation } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import Loader from '../components/Loader/Loader';

const MoviePage = () => {
  const { movie, loading, error } = useFetchMovie();
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');
  // console.log(location);
  return (
    <div>
      <GoBackBtn path={goBack.current}>Back to movies</GoBackBtn>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {movie && <MovieInfo movie={movie} />}
    </div>
  );
};

export default MoviePage;
