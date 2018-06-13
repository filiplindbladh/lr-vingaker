import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  hashbang: false,
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    }
  ],
  // when we change to a different page
  // we alwalys see the top of the page
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
