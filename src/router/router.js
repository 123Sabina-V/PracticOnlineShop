import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import Product from '../components/Product.vue'
import Cart from '../components/Cart.vue'
import App from '../../src/App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
  
  {
    path: '/catalogue',
    name: 'catalogue',
    component: CatalogueView
  },
  {
    path: '/cart',
    name: 'cart',
    props: true,
    component: Cart
  },
  {
    path: '/product',
    name: 'product',
    props: true,
    component: Product
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
