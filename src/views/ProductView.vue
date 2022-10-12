<template>
    <div class="home">
      <!-- <header class="header"></header> -->
      <HeaderSecond></HeaderSecond>
      <BreadScrumbs></BreadScrumbs>
      <Product></Product>
     <Footer></Footer>
     <router-view></router-view>
      
     
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue';
  import FirstBlock from '@/components/FirstBlock.vue';
  import SecondBlock from '../components/SecondBlock.vue';
  import ThirdBlock from '../components/ThirdBlock.vue';
  import Footer from '../components/Footer.vue';
import HeaderSecond from '@/components/HeaderSecond.vue';
import BreadScrumbs from '@/components/BreadScrumbs.vue';
import Product from '../components/Product.vue';
import CatalogueItem from '@/components/CatalogueItem.vue';
  
  export default {
    name: 'HomeView',
    components: {
    Header,
    FirstBlock,
    SecondBlock,
    ThirdBlock,
    Footer,
    HeaderSecond,
    BreadScrumbs,
    Product,
    CatalogueItem,
    
},
props: {
        product_data: {
            type: Array,
            default() {
              return []
            }
        },
    },
    
  }
  </script>
  