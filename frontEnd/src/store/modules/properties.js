import api from '@/services/api.js';

const state = {
  properties: [],
  loading: false,
  error: null
};

const mutations = {
  SET_PROPERTIES(state, properties) {
    state.properties = properties;
    state.loading = false;
    state.error = null;
  },
  ADD_PROPERTY(state, property) {
    state.properties.push(property);
  },
  SET_LOADING(state, status) {
    state.loading = status;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

const actions = {
  async fetchProperties({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await api.getProperties();
      commit('SET_PROPERTIES', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
      throw error;
    }
  },
  async createProperty({ commit }, propertyData) {
    try {
      const response = await api.postProperty(propertyData);
      commit('ADD_PROPERTY', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
      throw error;
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
