import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/movie-service';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
      {error && <h2>Something went wrong...</h2>}
    </>
  );
};

export default Home;
