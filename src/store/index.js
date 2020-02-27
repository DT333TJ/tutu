import variables from '@/element-variables.scss'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: variables.theme
  },
  mutations: {
    CHANGE_SETTING: (state, {
      key,
      value
    }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting({
      commit
    }, data) {
      commit('CHANGE_SETTING', data)
    }
  },
  modules: {}
})
