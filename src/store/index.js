import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    userId:""
  },
  mutations: {
    setLogin(state,boo){
      state.isLogin = boo
    },
    setUserId(state,num){
      state.userId = num
    }
  },
  actions: {
  },
  modules: {
  }
})
