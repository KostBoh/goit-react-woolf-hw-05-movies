import React, { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Reviews from 'components/Reviews/Reviews';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
} from 'service/movie-service';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [detailsType, setDetailsType] = useState(null);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const handleFetchDetails = type => {
    setDetailsType(type);
    setIsLoading(true);
    if (type === 'Cast') {
      getMovieCredits(movieId)
        .then(setDetails)
        .catch(({ message }) => setError(message))
        .finally(() => setIsLoading(false));
    } else if (type === 'Reviews') {
      getMovieReviews(movieId)
        .then(setDetails)
        .catch(({ message }) => setError(message))
        .finally(() => setIsLoading(false));
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="styles.container">
      {isLoading && <Loader />}
      {movie && (
        <>
          <Link onClick={goBack} className={styles.goBackLink}>
            Go Back
          </Link>
          <MovieInfo {...movie} onFetchDetails={handleFetchDetails} />
          <hr />
          <Outlet />
          {location.pathname.includes('cast') &&
            detailsType === 'Cast' &&
            !details && <Loader />}
          {location.pathname.includes('cast') &&
            detailsType === 'Cast' &&
            details && <Cast cast={details} />}
          {location.pathname.includes('reviews') &&
            detailsType === 'Reviews' &&
            !details && <Loader />}
          {location.pathname.includes('reviews') &&
            detailsType === 'Reviews' &&
            details && <Reviews reviews={details} />}
        </>
      )}
      {error && <h2>Something went wrong...</h2>}
    </div>
  );
};

export default MovieDetails;
