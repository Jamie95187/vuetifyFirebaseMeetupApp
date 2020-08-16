import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/meetups',
    name: 'Meetups',
    component: () => import( '../views/Meetup/Meetups.vue')
  },
  {
    path: '/meetup/new',
    name: 'CreateMeeup',
    component: () => import( '../views/Meetup/CreateMeetup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( '../views/User/Profile.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import( '../views/User/Signup.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import( '../views/User/Signin.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
