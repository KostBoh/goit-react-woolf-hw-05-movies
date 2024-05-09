export const transformMovieDetailsData = data => {
  return {
    id: data.id,
    title: data.title,
    overview: data.overview,
    releaseDate: data.release_date,
    posterPath: data.poster_path,
    backdropPath: data.backdrop_path,
    genres: data.genres.map(genre => genre.name).join(', '),
    runtime: data.runtime,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
    tagline: data.tagline,
    homepage: data.homepage,
    status: data.status,
  };
};
