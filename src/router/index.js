import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'

const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(to => {
  window.scrollTo(0, 0)
  iView.LoadingBar.finish()
})
Vue.use(Router)
export default router
