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
  UPDATE_USER: (state, updatedUser) => {
    const index = state.users.findIndex(user => user.id === updatedUser.id);
    state.users[index] = { ...updatedUser };
  },
  DELETE_USER: (state, userId) => {
    let index = state.users.findIndex(user => user.id == userId);
    state.users.splice(index, 1);
  },
};
const actions = {
  addUser: ({ commit }, user) => {
    commit("ADD_USER", user);
  },
  updateUser: ({ commit }, updatedUser) => {
    commit("UPDATE_USER", updatedUser);
  },
  deleteUser: ({ commit }, userId) => {
    commit("DELETE_USER", userId);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
