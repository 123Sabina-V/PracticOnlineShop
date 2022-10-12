import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuex from 'vuex'
import store from './vuex/store'
// import store from './store';
import '@/assets/sass/main.sass'
import '@/assets/sass/typo.sass'
import '@/assets/sass/font.sass'
import '@/assets/sass/sections/header.sass'
import '@/assets/sass/sections/order.sass'
import '@/assets/sass/sections/cart.sass'
import '@/assets/sass/sections/firstBlock.sass'
import '@/assets/sass/sections/secondBlock.sass'
import '@/assets/sass/sections/thirdBlock.sass'
import '@/assets/sass/sections/product.sass'
import '@/assets/sass/sections/footer.sass'
import '@/assets/sass/sections/breadscrumbs.sass'
import '@/assets/sass/sections/catalogue.sass'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
