import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Demo = resolve => require(['@/views/demo/index.vue'], resolve)

Vue.use(Router)

export default new Router({
  base: '/',
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    }
  ]
})
