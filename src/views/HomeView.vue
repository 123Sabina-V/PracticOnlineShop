<template>
  <div class="home">
    <!-- <header class="header"></header> -->
  <div class="header">
    <Header></Header>
    <FirstBlock></FirstBlock>
  </div>
   <SecondBlock></SecondBlock>
   <ThirdBlock></ThirdBlock>
   <Footer></Footer>
    
   
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

export default {
  name: 'HomeView',
  components: {
    Header,
    FirstBlock,
    SecondBlock,
    ThirdBlock,
    Footer,
    HeaderSecond
},
  
}
</script>
