import api from '@/services/api.js';

const state = {
  transactions: [],
  loading: false,
  error: null
};

const mutations = {
  SET_TRANSACTIONS(state, transactions) {
    state.transactions = transactions;
    state.loading = false;
    state.error = null;
  },
  ADD_TRANSACTION(state, transaction) {
    state.transactions.push(transaction);
  },
  SET_LOADING(state, status) {
    state.loading = status;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

const actions = {
  async fetchTransactions({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await api.getTransactions();
      commit('SET_TRANSACTIONS', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
      throw error;
    }
  },
  async createTransaction({ commit }, transactionData) {
    try {
      const response = await api.postTransaction(transactionData);
      commit('ADD_TRANSACTION', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
      throw error;
    }
  }
  // You can add update and delete actions here
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
