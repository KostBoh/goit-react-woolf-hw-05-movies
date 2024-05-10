import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieInfo = ({
  id,
  title,
  posterPath,
  overview,
  voteAverage,
  onFetchDetails,
  genres,
}) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  return (
    <>
      <h2>{title}</h2>
      <img src={`${baseURL}${posterPath}`} alt={title} />
      <h4>Overview</h4>
      <p>{overview}</p>
      <h4>User score: </h4>
      <p>{voteAverage}</p>
      <h4>Genres: </h4>
      <p>{genres}</p>
      <hr />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link
            to={`/movies/${id}/cast`}
            state={{ from: location.pathname }}
            onClick={() => onFetchDetails('Cast')}
          >
            Casts
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${id}/reviews`}
            state={{ from: location.pathname }}
            onClick={() => onFetchDetails('Reviews')}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MovieInfo;
