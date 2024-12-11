import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main.vue'
import Layout from '../layout/layout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ]
    }
 
  ],
})

export default router