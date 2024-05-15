import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, title }) => (
        <li key={id} className={styles.movieItem}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={styles.movieLink}
          >
            <p className={styles.movieTitle}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
