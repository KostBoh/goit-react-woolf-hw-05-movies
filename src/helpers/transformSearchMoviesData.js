export const transformSearchMoviesData = data => {
  return data.map(movie => ({
    id: movie.id,
    title: movie.title,
  }));
};
