export const transformMovieCreditsData = data => {
  return data.cast.map(actor => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    profilePath: actor.profile_path,
  }));
};
