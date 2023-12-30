<template>
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-gray-800">
      <img class="w-full" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="Movie poster">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
        <!-- Movie details here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: {
        type: Object,
        required: true
      }
    }
  };
  </script>