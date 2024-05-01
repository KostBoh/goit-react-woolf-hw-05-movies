export const transformMovieReviewsData = data => {
  return data.results.map(review => ({
    id: review.id,
    author: review.author,
    content: review.content,
  }));
};
