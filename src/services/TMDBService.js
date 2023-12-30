import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.VUE_APP_TMDB_API_KEY; // Store your API key in an environment variable

const tmdbApi = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    include_video: false
  }
});

const TMDBService = {
  discoverMovies: (page = 1, sortBy = 'popularity.desc', api_key = API_KEY) => {
    return tmdbApi.get('/discover/movie', {
      params: {
        page: page,
        sort_by: sortBy,
        api_key: api_key
      }
    });
  },
  // You can add more TMDB API methods here
};

export default TMDBService;