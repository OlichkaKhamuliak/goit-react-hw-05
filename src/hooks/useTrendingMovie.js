import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../api';

export const useTrendingMovies = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const { results } = await getTrendingMovie({ controller: controller.signal });
        setTrendFilms(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);
  return { trendFilms, loading, error };
};
