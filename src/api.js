import axios from 'axios';

const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZkNTRhZWIxMWY4NGVkNTg3YjliYjk2MDQ0MTIxMiIsInN1YiI6IjY1Y2U1YTgwZDhhZjY3MDE2NDhmYTFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.udXVJL6GVzzlip1fAz4KHA8Wyq-os2y13kavV4CgmlQ';

export const getTrendingMovie = async abortController => {
  const config = {
    headers: {
      Authorization: authorization,
    },
    signal: abortController.signal,
  };
  const { data } = await axios.get(trendingUrl, config);
  return data;
};
