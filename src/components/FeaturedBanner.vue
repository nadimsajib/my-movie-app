<template>
    <div class="relative overflow-hidden">
    <div
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="flex-none w-full px-4"
      >
        <div class="bg-gray-800 p-4 rounded-md text-center" >
        <img
        :src="'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path"
        :alt="movie.title"
        class="mx-auto"
        style="height: 300px; width: auto;"
        />
          <h2 class="text-xl font-bold mt-2">{{ movie.title }}</h2>
          <p class="text-gray-400 text-sm my-2">{{ movie.overview }}</p>
          <div class="flex justify-center mt-4 space-x-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="watchTrailer(movie)"
            >
              Watch Trailer
            </button>
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              @click="addToWatchlist(movie)"
            >
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4"
      @click="prevSlide"
    >
      &#10094;
    </button>
    <button
      class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4"
      @click="nextSlide"
    >
      &#10095;
    </button>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      movies: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentSlide: 0
      };
    },
    methods: {
      nextSlide() {
        if (this.currentSlide < this.movies.length - 1) {
          this.currentSlide++;
        }
      },
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide--;
        }
      },
      watchTrailer(movie) {
        // Logic to watch the trailer
        console.log('Watching trailer for:', movie.title);
      },
      addToWatchlist(movie) {
        // Logic to add the movie to the watchlist
        console.log('Added to watchlist:', movie.title);
      }
    }
  };
  </script>
  
  <style scoped>
  /* You can add additional styles here */
  </style>