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
  popularMovies: (page = 1, sortBy = 'popularity.desc', api_key = API_KEY) => {
    return tmdbApi.get('/movie/popular', {
      params: {
        page: page,
        sort_by: sortBy,
        api_key: api_key
      }
    });
  },
  newMovies: (page = 1, sortBy = 'popularity.desc', api_key = API_KEY) => {
    return tmdbApi.get('/movie/now_playing', {
      params: {
        page: page,
        sort_by: sortBy,
        api_key: api_key
      }
    });
  },
  upcomingMovies: (page = 1, sortBy = 'popularity.desc', api_key = API_KEY) => {
    return tmdbApi.get('/movie/upcoming', {
      params: {
        page: page,
        sort_by: sortBy,
        api_key: api_key,
        'release_date.gte': '2023-12-30',
        'release_date.lte': '2024-12-30'
      }
    });
  },
  // You can add more TMDB API methods here
};

export default TMDBService;