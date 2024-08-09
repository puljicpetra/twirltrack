import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Signup.vue'
import LoginView from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router