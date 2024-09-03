import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Signup.vue'
import LoginView from '../views/Login.vue'
import Home from '../views/Home.vue'
import PopisNatjecatelja from '../views/PopisNatjecatelja.vue'
import PrijavaNaNatjecanje from '@/views/PrijavaNaNatjecanje.vue'
import { auth } from '@/firebase'

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
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true, hideNav: true } 
  },
  {
    path: '/suci',
    name: 'suci',
    component: () => import('../views/Suci.vue'), 
    meta: { requiresAuth: true, hideNav: true }
  },
  {
    path: '/popis-natjecatelja',
    name: 'popis-natjecatelja',
    component: PopisNatjecatelja,
    meta: { requiresAuth: true, hideNav: true }
  },
  {
    path: '/prijava-na-natjecanje',
    name: 'prijava-na-natjecanje',
    component: PrijavaNaNatjecanje,
    meta: { requiresAuth: true, hideNav: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
