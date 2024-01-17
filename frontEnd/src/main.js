import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

// Importing Bulma for global styling
import 'bulma/css/bulma.min.css';

// Additional imports for advanced functionalities
import VueAxios from 'vue-axios';
import VueAuthenticate from 'vue-authenticate';

Vue.config.productionTip = false;

// Setup axios as the Vue default $http service
Vue.use(VueAxios, axios);

// VueAuthenticate configuration for token-based authentication
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000', // Your API domain
  tokenName: 'access_token',
  storageType: 'localStorage',
  providers: {
    // OAuth providers if needed
  }
});

// Global registration of frequently used components
// Vue.component('Navbar', require('./components/Navbar.vue').default);
// Vue.component('Footer', require('./components/Footer.vue').default);

// Navigation guard for access control based on user roles
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  const userRole = store.getters['auth/userRole'];

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ path: '/login' });
  } else if (to.matched.some(record => record.meta.role) && record.meta.role !== userRole) {
    next({ path: '/unauthorized' }); // Redirect to an unauthorized page or back to home
  } else {
    next();
  }
});

// Global error handling can be set up here
Vue.config.errorHandler = function (err, vm, info) {
  console.error(`Global Error Handler: ${info}`, err);
  // Error handling logic, like sending to a logging service
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
