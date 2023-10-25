import axios from 'axios';

const API_KEY = '18e5e9750ded436f0496ba91fa6dbaff';

export const getTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );
  return data.results;
};

export const getMovieByKeyWord = async keyWord => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${keyWord}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return data.results;
};
