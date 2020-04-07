import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login/Login.vue'
import Blog from '../components/Blog/Blog.vue'
import About from '../components/About/About.vue'
import Write from '../components/Write/Write.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: Home,
    children: [
      {
        path: '/index',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Blog
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/write',
        component: Write
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
