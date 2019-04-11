import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store'
import './plugins/iview.js'
import i18n from '@/i18n'
import globals from '@/common/js/globals'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
// 全局数据和函数
Vue.prototype.$globals = globals
// 中央数据处理栈（注意$on需要在beforeDestroy中使用$off移除，不然会触发多次）
Vue.prototype.$bus = new Vue()