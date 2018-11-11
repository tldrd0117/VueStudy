import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
