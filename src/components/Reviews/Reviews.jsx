import { useEffect, useState } from 'react';
import { getReviews } from '../../api';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { Loader } from '../Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const reviewsData = await getReviews({ abortController: controller, id: movieId });
        setReviews(reviewsData);
        setTimeout(() => {
          if (reviewsData.length === 0) {
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
      {reviews.length > 0 && <ReviewsList feedbacks={reviews} />}
      {error && <p className={css.error}>{error.message}! Try to Reload the page.</p>}
      {!error && showNoDataMessage && (
        <p className={css.error}>No one has left reviews for this movie yet.</p>
      )}
    </div>
  );
};
