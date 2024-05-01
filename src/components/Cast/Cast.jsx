import React from 'react';

const Cast = ({ cast }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <ul>
      {cast.map(({ id, original_name, character, profile_path }) => (
        <li key={id}>
          <p> Original name: {original_name}</p>
          <p>Character: {character}</p>
          {profile_path && (
            <img src={`${baseURL}${profile_path}`} alt={original_name} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
