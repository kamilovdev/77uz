import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main.vue'
import productList from '../components/advertisements/advertisList.vue'
import Layout from '../layout/layout.vue'
import ads from '../components/ads/terms-of-use.vue'
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

        {
          path: 'Product',
          name: 'product',
          component: productList
        },
        {
          path: 'Ads',
          name: 'ads',
          component: ads
        }

      ]
    }
 
  ],
})

export default router
