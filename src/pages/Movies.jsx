import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/movie-service';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearchSubmit = movie => {
    setSearchParams({ movie });
  };

  useEffect(() => {
    const movie = searchParams.get('movie');
    if (!movie) {
      return;
    }

    searchMovies(movie)
      .then(setMovies)
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  return (
    <>
      <SearchForm onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      <MovieList movies={movies} />
      {error && <h2>Something went wrong...</h2>}
    </>
  );
};

export default Movies;
