import HomeTitle from '../components/HomeTitle/HomeTitle';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import { useTrendingMovies } from '../hooks/useTrendingMovie';

const HomePage = () => {
  const { trendFilms, loading, error } = useTrendingMovies();
  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {trendFilms.length > 0 && <MoviesList films={trendFilms} />}
    </div>
  );
};

export default HomePage;
