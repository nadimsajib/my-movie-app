<template>
    <div>
      <featured-banner />
      <movie-section title="Popular of the week" :movies="popular_movies"/>
      <movie-section title="Just Release" :movies="just_released_movies"/>
    </div>
  </template>
  
  <script>
  //import TheNavbar from './components/layout/TheNavbar.vue';
  import FeaturedBanner from '@/components/FeaturedBanner.vue';
  import MovieSection from '@/components/MovieSection.vue';
  //import Footer from './components/layout/Footer.vue';
import TMDBService from '@/services/TMDBService';
  
  export default {
    components: {
      FeaturedBanner,
      MovieSection,
    },
    data() {
        return {
          popular_movies: [],
          just_released_movies: []
        };
    },
    created() {
        this.fetchMovies();
    },
    methods: {
        fetchMovies() {
            TMDBService.discoverMovies()
            .then(response => {
                this.just_released_movies = response.data.results;
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                // Handle the error as you see fit
            });
        }
    }
  };
  </script>