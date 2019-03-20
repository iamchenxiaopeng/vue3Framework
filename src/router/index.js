import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
import iView from 'iview'

Vue.use(Router)
const router = new Router({
  routers
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(to => {
  window.scrollTo(0, 0)
  iView.LoadingBar.finish()
})
export default router
