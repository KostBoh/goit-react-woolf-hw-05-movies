import axios from 'axios';
import { transformMoviesData } from '../helpers/transformMoviesData';
import { transformSearchMoviesData } from 'helpers/transformSearchMoviesData';
import { transformMovieDetailsData } from 'helpers/transformMovieDetailsData';
import { transformMovieCreditsData } from 'helpers/transformMovieCreditsData';
import { transformMovieReviewsData } from 'helpers/transformMovieReviewsData';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944',
      },
    });
    return transformMoviesData(response.data.results);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        include_adult: false,
        language: 'en-US',
        page: 1,
        query: query,
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944',
      },
    });
    return transformSearchMoviesData(response.data.results);
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944',
      },
    });
    return transformMovieDetailsData(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944',
      },
    });
    return transformMovieCreditsData(response.data);
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
      params: { language: 'en-US', page: 1 },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944',
      },
    });
    return transformMovieReviewsData(response.data);
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};
