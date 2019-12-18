import Vue from 'vue'
import VueRouter from 'vue-router'
import posts from '../components/posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'posts',
    component: posts
  },
]  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
