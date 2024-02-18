import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'cefd54aeb11f84ed587b9bb960441212';

export const getTrendingMovie = async controller => {
  const { data } = await axios.get('trending/movie/day?language=en-US', {
    params: { api_key: API_KEY },
    signal: controller.signal,
  });
  return data;
};

export const fetchMovie = async ({ controller, id }) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: { api_key: API_KEY },
    signal: controller.signal,
  });
  return data;
};
