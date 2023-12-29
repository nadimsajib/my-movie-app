<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <the-navbar />
    <featured-banner />
    <movie-section title="Popular of the week" />
    <movie-section title="Just Release" />
    <!-- Add more sections as needed -->
    <footer />
  </div>
</template>

<script>
//import TheNavbar from './components/layout/TheNavbar.vue';
import FeaturedBanner from './components/FeaturedBanner.vue';
import MovieSection from './components/MovieSection.vue';
//import Footer from './components/layout/Footer.vue';

export default {
  components: {
    FeaturedBanner,
    MovieSection,
  }
};
</script>