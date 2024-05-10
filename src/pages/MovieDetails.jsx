import Cast from 'components/Cast/Cast';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Reviews from 'components/Reviews/Reviews';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
} from 'service/movie-service';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [detailsType, setDetailsType] = useState(null);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
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

  return (
    <>
      {isLoading && <Loader />}
      {movie && (
        <>
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
    </>
  );
};

export default MovieDetails;
