import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main.vue'
import productList from '../components/advertisements/advertisList.vue'
import advertiseSingle from '../components/advertisements/advertiseSingle.vue'
import ads from '../components/ads/terms-of-use.vue'
import notfound from '../components/404/notfound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/',
          name: 'home',
          meta: {
            layout: "Defoult"
          },
          component: HomeView,
        },
        {
          path: '/Product',
          name: 'product',
          meta: {
            layout: "Defoult"
          },
          component: productList
        },
        {
          path: '/Ads',
          name: 'ads',
          meta: {
            layout:"Defoult"
          },
          component: ads
        },
        {
          path: "/:catchAll(.*)",
          name: "Not Found",
          meta: {
            layout: "Empty"
          },
          component: notfound,
        },
        {
          path:"/Product/:id",
          name:"productSingle",
          meta: {
            layout:"Defoult"
          },
          component: advertiseSingle
        }
      ]
})

export default router
