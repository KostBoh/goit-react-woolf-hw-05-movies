// import Cast from 'components/Cast/Cast';
import Cast from 'components/Cast/Cast';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieCredits, getMovieDetails } from 'service/movie-service';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
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

  const handleFetchCast = () => {
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(setCast)
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {' '}
      {isLoading && <Loader />}
      {movie && (
        <>
          <MovieInfo {...movie} onFetchCast={handleFetchCast} />
          <Outlet />
          {location.pathname.includes('cast') && cast === null && <Loader />}
          {cast !== null && <Cast cast={cast} />}
        </>
      )}
      {error && <h2>Something went wrong...</h2>}
    </>
  );
};

export default MovieDetails;
