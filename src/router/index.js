import Vue from 'vue';
import Router from 'vue-router';
import HomeSection from '@/components/HomeSection';
//import Search from '@/views/Search.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeSection,
    }
    // Define other routes as needed
  ]
});