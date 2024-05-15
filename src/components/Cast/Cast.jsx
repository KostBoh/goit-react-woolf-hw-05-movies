import React, { useEffect, useState } from 'react';
import styles from './Cast.module.css';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/movie-service';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(setCast)
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const baseURL = 'http://image.tmdb.org/t/p/w185';

  if (isLoading) return <Loader />;
  if (error) return <h2>Something went wrong...</h2>;
  if (!cast) return <p>No cast information available.</p>;

  return (
    <div className={styles.castContainer}>
      <ul className={styles.castList}>
        {cast.map(({ id, name, character, profilePath }) => (
          <li key={id} className={styles.castItem}>
            {profilePath && (
              <img
                src={`${baseURL}${profilePath}`}
                alt={name}
                className={styles.castImage}
              />
            )}
            <h4 className={styles.castName}>{name}</h4>
            <h4 className={styles.castCharacter}>Character: {character}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
