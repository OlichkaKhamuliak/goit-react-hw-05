import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../api';

export const useTrendingMovies = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendingMovie({ abortController: controller });
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
