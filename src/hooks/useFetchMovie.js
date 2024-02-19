// useFetchMovie;

import { useEffect, useState } from 'react';
import { fetchMovie } from '../api';
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const movieData = await fetchMovie({ abortController: controller, id: movieId });
        setMovie(movieData);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error);
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [movieId]);
  return { movie, loading, error };
};
