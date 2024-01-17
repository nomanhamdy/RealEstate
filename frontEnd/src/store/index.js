// Path: C:\Users\Noeman\RealEstateManagement\frontend\src\store\index.js
import Vue from 'vue';
import Vuex from 'vuex';
import propertiesModule from './modules/properties';
import transactionsModule from './modules/transactions'; // Transactions management
import usersModule from './modules/users'; // User management

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Global state (e.g., application-wide settings or user session)
  },
  mutations: {
    // Global mutations (e.g., update user session)
  },
  actions: {
    // Global actions (e.g., fetch user session data)
  },
  modules: {
    properties: propertiesModule,
    transactions: transactionsModule,
    users: usersModule,
    // Add more modules as necessary for handling different aspects of your application
  },
  // Optionally, add getters if needed for accessing combined state from multiple modules
  getters: {
    // Define global getters here (e.g., isAuthenticated, userInfo, etc.)
  }
});
