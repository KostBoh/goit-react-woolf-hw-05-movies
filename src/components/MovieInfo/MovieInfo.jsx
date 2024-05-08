import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieInfo = ({
  id,
  title,
  posterPath,
  overview,
  voteAverage,
  releaseDate,
  onFetchCast,
}) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  const handleFetchCast = () => {
    onFetchCast();
  };

  return (
    <>
      <h2>{title}</h2>
      <img src={`${baseURL}${posterPath}`} alt={title} />
      <h3>Overview</h3>
      <p>{overview}</p>
      <p>User score: {voteAverage}</p>
      <p>{releaseDate}</p>
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link
            to={`/movies/${id}/cast`}
            state={{ from: location.pathname }}
            onClick={handleFetchCast}
          >
            Casts
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${id}/reviews`}
            state={{ from: location.pathname }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MovieInfo;
