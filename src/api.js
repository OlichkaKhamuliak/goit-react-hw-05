import axios from 'axios';

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer cefd54aeb11f84ed587b9bb960441212',
  },
};

axios
  .get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
