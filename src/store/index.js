import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  printing: false
}
export const getters = {
  getPrinting (state) {
    return state.printing
  }
}
export const mutations = {
  setPrinting (state, v) {
    return state.printing = Boolean(v)
  }
}
export const actions = {}

export default new Vuex.Store({ state, getters, mutations, actions })
