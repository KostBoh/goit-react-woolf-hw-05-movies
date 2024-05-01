import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/movie-service';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <>
      <div>Home</div>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
