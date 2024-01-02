import Vue from 'vue';
import Router from 'vue-router';
import HomeSection from '@/components/HomeSection';
import SearchIndex from '@/components/search/SearchIndex.vue';
//import Search from '@/views/Search.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeSection,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchIndex,
      props: (route) => ({ query: route.query.q }),
    },
    // Define other routes as needed
  ]
});