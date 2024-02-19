import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from '../../api';
import { Loader } from '../Loader/Loader';
import { CastList } from '../CastList/CastList';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import css from '../ErrorMessage/ErrorMessage.module.css';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const castData = await getCredits({ abortController: controller, id: movieId });
        setActors(castData);
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

  return (
    <div>
      {loading && <Loader />}
      {actors.length > 0 ? (
        <CastList performers={actors} />
      ) : (
        <p>We`re sorry, but there is no information to display about the actors.</p>
      )}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <Toaster
        containerStyle={{
          left: 0,
          right: 0,
        }}
        toastOptions={{
          className: css.toaster,
        }}
      />
    </div>
  );
};
