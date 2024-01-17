import api from '@/services/api.js';

const state = {
  users: [],
  currentUser: null,
  loading: false,
  error: null
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
    state.loading = false;
    state.error = null;
  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  },
  ADD_USER(state, user) {
    state.users.push(user);
  },
  SET_LOADING(state, status) {
    state.loading = status;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

const actions = {
  async fetchUsers({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await api.getUsers();
      commit('SET_USERS', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
      throw error;
    }
  },
  async createUser({ commit }, userData) {
    try {
      const response = await api.createUser(userData);
      commit('ADD_USER', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
      throw error;
    }
  },
  // Add actions for updating and deleting users
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
