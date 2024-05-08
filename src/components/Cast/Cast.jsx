import React from 'react';

const Cast = ({ cast }) => {
  const baseURL = 'http://image.tmdb.org/t/p/w185';
  if (!cast) {
    return null;
  }
  return (
    <>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {profile_path && <img src={`${baseURL}${profile_path}`} alt={name} />}
          <p> {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </>
  );
};

export default Cast;
