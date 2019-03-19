import config from "../config/config.global";

const state = {
  congregation: config.congregation,
  drawer: null,
}

const getters = {}

const actions = {}

const mutations = {
  drawer(state, drawer) {
    state.drawer = drawer
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
