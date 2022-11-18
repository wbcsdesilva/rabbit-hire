import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import JobApplicationFormView from '../views/JobApplicationView.vue'
import AdminHomeView from '../views/AdminHomeView.vue'
import AdminInspectApplicationView from '../views/AdminInspectApplicationView.vue'

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
  },
  {
    path: '/adminlogin',
    name: 'adminlogin',
    component: AdminLoginView
  },
  {
    path: '/apply',
    name: 'jobapplication',
    component: JobApplicationFormView
  },
  {
    path: '/admin',
    name: 'adminhome',
    component: AdminHomeView
  },
  {
    path: '/inspect/:id',
    name: 'admininspectapplication',
    component: AdminInspectApplicationView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
