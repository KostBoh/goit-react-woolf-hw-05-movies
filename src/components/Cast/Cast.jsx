import React from 'react';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
  const baseURL = 'http://image.tmdb.org/t/p/w185';
  if (!cast) {
    return null;
  }
  return (
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
  );
};

export default Cast;
