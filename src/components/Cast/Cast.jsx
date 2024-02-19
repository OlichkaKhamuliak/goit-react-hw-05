import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from '../../api';
import { Loader } from '../Loader/Loader';
import { CastList } from '../CastList/CastList';
import css from './Cast.module.css';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const castData = await getCredits({ abortController: controller, id: movieId });
        setActors(castData);
        setTimeout(() => {
          if (castData.length === 0) {
            setShowNoDataMessage(true);
          }
        }, 0);
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
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {actors.length > 0 && <CastList performers={actors} />}
      {error && <p className={css.error}>{error.message}! Try to Reload the page.</p>}
      {!error && showNoDataMessage && (
        <p className={css.error}>
          We`re sorry, but there is no information to display about the actors.
        </p>
      )}
    </div>
  );
};
