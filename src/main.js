import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import '@/assets/sass/main.sass'
import '@/assets/sass/typo.sass'
import '@/assets/sass/font.sass'
import '@/assets/sass/sections/header.sass'
import '@/assets/sass/sections/firstBlock.sass'
import '@/assets/sass/sections/secondBlock.sass'
import '@/assets/sass/sections/thirdBlock.sass'
import '@/assets/sass/sections/footer.sass'
import '@/assets/sass/sections/breadscrumbs.sass'
import '@/assets/sass/sections/catalogue.sass'
import Vuex from 'vuex'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
