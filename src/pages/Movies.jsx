import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';

const Movies = () => {
  const handleSearchSubmit = value => {
    console.log(value);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearchSubmit} />
    </>
  );
};

export default Movies;
