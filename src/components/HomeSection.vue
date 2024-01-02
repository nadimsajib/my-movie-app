<template>
    <div>
      <transition name="slidedown">
      <SearchForm v-if="searchOpen" />
    </transition>
      <featured-banner :item="featured"/>
      <!-- <movie-section title="Popular of the week" :movies="popular_movies"/> -->
      <!-- <movie-section title="Just Release" :movies="just_released_movies"/> -->
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  //import TheNavbar from './components/layout/TheNavbar.vue';
  import FeaturedBanner from '@/components/FeaturedBanner.vue';
  import SearchForm from '@/components/search/SearchForm.vue';
  //import MovieSection from '@/components/MovieSection.vue';
  //import Footer from './components/layout/Footer.vue';
  import { getTrending, getMovie } from '@/services/TMDBService';
  
  export default {
    components: {
      FeaturedBanner,
      SearchForm,
    },
    data() {
        return {
          popular_movies: [],
          just_released_movies: [],
          upcoming_movies: [],
          featured: {}
        };
    },
    created() {
        this.fetchMovies();
    },
    methods: {
      async fetchMovies() {
        const trendingMovies = await getTrending('movie');
        const items = [...trendingMovies.results];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        this.featured = await getMovie(randomItem.id);
      }
    },
    computed: {
      ...mapState('search', [
        'searchOpen',
      ]),
    },
  };
  </script>