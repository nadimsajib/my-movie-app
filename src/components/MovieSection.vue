<template>
    <div class="container mx-auto px-4 py-6">
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </template>
  
  <script>
  import MovieCard from './MovieCard.vue';
  
  export default {
    components: {
      MovieCard
    },
    props: {
      title: String,
      movies: Array
    }
  };
  </script>