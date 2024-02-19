import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'cefd54aeb11f84ed587b9bb960441212';

export const getTrendingMovie = async ({ abortController }) => {
  const { data } = await axios.get('trending/movie/day?language=en-US', {
    params: { api_key: API_KEY },
    signal: abortController.signal,
  });
  return data;
};

export const fetchMovie = async ({ abortController, id }) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: { api_key: API_KEY },
    signal: abortController.signal,
  });
  return data;
};

export const searchMovie = async ({ abortController, keyword }) => {
  const { data } = await axios.get('search/movie', {
    params: { api_key: API_KEY, query: keyword },
    signal: abortController.signal,
  });
  return data;
};

export const getCredits = async ({ abortController, id }) => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: { api_key: API_KEY },
    signal: abortController.signal,
  });
  return data.cast;
};

export const getReviews = async ({ abortController, id }) => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: { api_key: API_KEY },
    signal: abortController.signal,
  });
  return data;
};
