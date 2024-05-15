import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { getMovieDetails } from 'service/movie-service';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const goBack = useRef(location.state?.from || '/');

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {movie && (
        <>
          <Link to={goBack.current} className={styles.goBackLink}>
            Go Back
          </Link>
          <MovieInfo {...movie} />
          <hr />
          <div className={styles.details}>
            <Outlet />
          </div>
        </>
      )}
      {error && <h2>Something went wrong...</h2>}
    </div>
  );
};

export default MovieDetails;
