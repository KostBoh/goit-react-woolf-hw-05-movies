import React, { useEffect, useState } from 'react';
import styles from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movie-service';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <Loader />;
  if (error) return <h2>Something went wrong...</h2>;
  if (!reviews || !reviews.length) return <p>No reviews available.</p>;

  return (
    <div className={styles.reviewsContainer}>
      <ul className={styles.reviewsList}>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={styles.reviewItem}>
            <h4 className={styles.author}>{author}</h4>
            <p className={styles.content}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
