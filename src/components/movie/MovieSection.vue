<template>
  <main class="main">
    <transition name="slidedown">
      <SearchForm v-if="searchOpen" />
    </transition>
      <featured-banner :item="featured"/>
      <MovieInfo
        :item="item" />
      <MovieCast
      v-if="item.credits && item.credits.cast"
        :item="item" />
      <MovieRecommendation
        title="Recommended "
        v-if="recommended && recommended.results && recommended.results.length"
        :items="recommended" />

  </main>
</template>

<script>
import { mapState } from 'vuex';
import FeaturedBanner from '@/components/FeaturedBanner.vue';
import SearchForm from '@/components/search/SearchForm.vue';
import { apiImgUrl, getMovie, getMovieRecommended } from '@/services/TMDBService';
import { name, yearStart } from '@/mixins/Details';
import MovieInfo from '@/components/movie/MovieInfo';
import MovieCast from '@/components/movie/MovieCast';
import MovieRecommendation from '@/components/common/MovieRecommendation';

export default {
  components: {
    MovieInfo,
    FeaturedBanner,
    SearchForm,
    MovieCast,
    MovieRecommendation
  },

  mixins: [
    name,
    yearStart,
  ],

  head () {
    return {
      title: this.metaTitle,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.metaTitle },
        { hid: 'og:description', property: 'og:description', content: this.metaDescription },
        { hid: 'description', name: 'description', content: this.metaDescription },
        { hid: 'og:image', property: 'og:image', content: this.metaImage },
        { hid: 'og:url', property: 'og:url', content: `${process.env.FRONTEND_URL}${this.$route.path}` },
      ],
      bodyAttrs: {
        class: 'topnav-active',
      },
    };
  },

  data () {
    return {
      menu: [],
      activeMenu: 'overview',
      recommended: [],
      featured: {},
      item: [],
      id: '',
    };
  },
  mounted() {
    this.getResult()
    //alert(this.$route.params.id)
    //this.items = this.$route.params.id;
  },

  computed: {
    metaTitle () {
      if (this.yearStart) {
        return `${this.name} (${this.yearStart})`;
      } else {
        return `${this.name}`;
      }
    },

    metaDescription () {
      if (this.item.overview) {
        return this.truncate(this.item.overview, 200);
      } else {
        return '';
      }
    },

    metaImage () {
      if (this.item.poster_path) {
        return `${apiImgUrl}/w500${this.item.poster_path}`;
      } else {
        return '';
      }
    },

    showCredits () {
      const credits = this.item.credits;
      return credits && credits.cast && credits.cast.length;
    },
    ...mapState('search', [
        'searchOpen',
      ]),
  },

  created () {
    this.initRecommended();
  },

  methods: {
    truncate (string, length) {
      return this.$options.filters.truncate(string, length);
    },
    async getResult() {
          try {
          const item = await getMovie(this.$route.params.id);
          this.featured = item;
          this.item = item;

        } catch {
          console.log("error");
        }
      },
      initRecommended () {
      // if recommended don't exist, retreive them
      //if (this.recommended !== null) return;

      getMovieRecommended(this.$route.params.id).then((response) => {
        this.recommended = response;
      });
    },
    }
    
};
</script>