import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'profesor',
      component: () => import(/* webpackChunkName: "about" */ './views/Profesor.vue')
    },
    {
      path: '/estudiante',
      name: 'estudiante',

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Estudiante.vue')
    }
  ]
})
