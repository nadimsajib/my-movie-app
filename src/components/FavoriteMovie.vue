<template>
  <main class="main">
    <div>
      <transition name="slidedown">
      <SearchForm v-if="searchOpen" />
    </transition>
    <div v-if="favorites && favorites.favorites.length">
    <SearchResults
        v-if="favorites"
        title="My Favorites"
        :items="favorites"/>
  </div>
  <div class="listing" v-else>
    <div
        class="listing__head">
        <h2
          class="listing__title">
          No favorites found
        </h2>
      </div>
  </div>
    </div>
  </main>
    
  </template>
  
  <script>
  import { mapState, mapActions  } from 'vuex';
  //import TheNavbar from './components/layout/TheNavbar.vue';
  import SearchForm from '@/components/search/SearchForm.vue';
  import SearchResults from '@/components/search/SearchResults';
  //import MovieSection from '@/components/MovieSection.vue';
  //import Footer from './components/layout/Footer.vue';
  
  export default {
    components: {
      SearchForm,
      SearchResults
    },
    data() {
        return {
        };
    },
    created() {
        ///this.fetchMovies();
    },
    methods: {
      ...mapActions(['toggleFavorite'])
    },
    computed: {
      ...mapState('search', [
        'searchOpen',
      ]),
      ...mapState(['favorites'])
    },
  };
  </script>

<style lang="scss">
@import '~/assets/css/utilities/_variables.scss';

.page-search .main {
  padding-top: 6rem;

  @media (min-width: $breakpoint-large) {
    padding-top: 8rem;
  }
}
</style>