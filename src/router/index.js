import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import DetalleView from '../views/DetalleView.vue'
import LoginView from '../views/LoginView.vue'
import EditView from '../views/EditView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/detalle/:idMovie',
    name: 'detalle',
    component: DetalleView
  },
  {
    path: '/edit/:idMovie',
    name: 'edit',
    component: EditView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
