import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../api';
import { MoviesList } from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [trendFilms, setTrendFilms] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const { results } = await getTrendingMovie(controller);
        setTrendFilms(results);
        // console.log(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log('error:', error);
          setError(true);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>OOOOOPPPPPSSSS!!! EROOOR!!!!!</p>}
      {trendFilms.length > 0 && <MoviesList films={trendFilms} />}
    </div>
  );
}
