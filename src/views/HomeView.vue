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
    
   <!-- <character-block 
      v-for="character in characters"  
      :key="character.id" 
      :character="character">
    </character-block>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterBlock from '@/components/CharacterBlock.vue';
import Header from '@/components/Header.vue';
import FirstBlock from '@/components/FirstBlock.vue';
import SecondBlock from '../components/SecondBlock.vue';
import ThirdBlock from '../components/ThirdBlock.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    CharacterBlock,
    Header,
    FirstBlock,
    SecondBlock,
    ThirdBlock,
    Footer
},
  data() {
    return {
      currentPage: 1,
    }
  },
  created() {
    this.$store.dispatch('fetchCharacters', this.currentPage);
  },
  computed: {
    characters() {
      return this.$store.getters['getCharactersByPage'](this.currentPage);
    },
    firstCharacter() {
    return this.$store.getters['getCharacterById']({id: 1, page:1});
    }
  },
}
</script>
