const state = {
  users: [],
};
const getters = {
  getUsers: state => state.users,
};
const mutations = {
  ADD_USER: (state, user) => {
    state.users = [...state.users, user];
  },
};
const actions = {
  addUser: ({ commit }, user) => {
    commit("ADD_USER", user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
