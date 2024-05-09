import React from 'react';

const Cast = ({ cast }) => {
  const baseURL = 'http://image.tmdb.org/t/p/w185';
  if (!cast) {
    return null;
  }
  return (
    <>
      {cast.map(({ id, name, character, profilePath }) => (
        <li key={id}>
          {profilePath && <img src={`${baseURL}${profilePath}`} alt={name} />}
          <p> {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </>
  );
};

export default Cast;
