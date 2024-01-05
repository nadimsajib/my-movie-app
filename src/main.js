import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import router from './router';
import store from './store';
import '../assets/css/global.scss'

Vue.config.productionTip = false;

Vue.filter('fullDate', function(value) {
  if (!value) return '';
  const date = new Date(value);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return `${day} ${monthNames[monthIndex]} ${year}`;
});

Vue.filter('runtime', function(value) {
  const hours = Math.floor(value / 60);
      const minutes = value % 60;
      return `${hours}h ${minutes}min`;
});

Vue.filter('arrayToList', function(value) {
  return value.map(item => item.name).join(', ');
});
Vue.filter('numberWithCommas', function(value) {
  if (!value) return '0';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});
// Filter to convert language codes to full language names
Vue.filter('fullLang', function(value) {
  const languages = {
    'en': 'English',
    'fr': 'French',
    'es': 'Spanish',
  };
  return languages[value] || value;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
