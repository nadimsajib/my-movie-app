<template>
    <div>
      <transition name="slidedown">
      <SearchForm v-if="searchOpen" />
    </transition>
      <featured-banner 
      v-if="featured && featured.id"
      :item="featured"/>
      <MovieRecommendation
      v-if="nowPlaying && nowPlaying.results && nowPlaying.results.length"
      :title="nowPlayingTitle"
      :items="nowPlaying" />
      <!-- <movie-section title="Popular of the week" :movies="popular_movies"/> -->
      <!-- <movie-section title="Just Release" :movies="just_released_movies"/> -->
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  //import TheNavbar from './components/layout/TheNavbar.vue';
  import FeaturedBanner from '@/components/FeaturedBanner.vue';
  import SearchForm from '@/components/search/SearchForm.vue';
  import MovieRecommendation from '@/components/common/MovieRecommendation.vue';
  //import MovieSection from '@/components/MovieSection.vue';
  //import Footer from './components/layout/Footer.vue';
  import { getListItem, getTrending, getMovie, getMovies } from '@/services/TMDBService';
  
  
  export default {
    components: {
      FeaturedBanner,
      SearchForm,
      MovieRecommendation
    },
    data() {
        return {
          nowPlaying: [],
          featured: {}
        };
    },
    created() {
        this.fetchMovies();
    },
    methods: {
      async fetchMovies() {
        const trendingMovies = await getTrending('movie');
        this.nowPlaying = await getMovies('now_playing');
        const items = [...trendingMovies.results];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        this.featured = await getMovie(randomItem.id);
      }
    },
    computed: {
      nowPlayingTitle () {
      return getListItem('movie', 'now_playing').title;
    },

    nowPlayingUrl () {
      return { name: 'movie-category-name', params: { name: 'now_playing' } };
    },
      ...mapState('search', [
        'searchOpen',
      ]),
    },
  };
  </script>