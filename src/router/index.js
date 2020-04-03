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
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/blog'
      },
      {
        path: '/home/blog',
        component: Blog
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/home/write',
        component: Write
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
