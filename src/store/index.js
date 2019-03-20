import Vue from 'vue'
import Vuex from 'vuex'
import baseModule from './module/base'
import appModule from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base: baseModule,
    app: appModule
  }
})
