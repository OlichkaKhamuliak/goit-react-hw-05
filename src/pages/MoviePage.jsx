import { useEffect, useRef } from 'react';
import { useFetchMovie } from '../hooks/useFetchMovie';
import { useLocation } from 'react-router-dom';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { Loader } from '../components/Loader/Loader';
import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';

export default function MoviePage() {
  const { movie, loading, error } = useFetchMovie();
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');
  // console.log(location);
  console.log(movie);
  useEffect(() => {}, []);
  return (
    <div>
      <GoBackBtn path={goBack.current}>Back to movies</GoBackBtn>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {movie && <MovieInfo movie={movie} />}
    </div>
  );
}
