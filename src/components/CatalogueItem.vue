<template>
    <div class="catalogue__block_product">
        <img :src="require(`@/assets/img/${product.img}`)" alt="">
        <p class="subtitle-type-first-black catalogue__text">Белая куртка</p>
        <p class="text-type-first">2900 грн</p>
        <p>{{product.article}}</p>
        <button @click="sendDataToParent">Add to cart</button>
        <div class="catalogue__block_size">
            <a class="subtitle-type-first-black catalogue__size" href="">XXS</a>
            <a class="subtitle-type-first-black catalogue__size" href="">XS</a>
            <a class="subtitle-type-first-black catalogue__size" href="">S</a>
            <a class="subtitle-type-first-black catalogue__size" href="">M</a>
            <a class="subtitle-type-first-black catalogue__size" href="">L</a>
        </div>
        <div class="catalogue__block_color">
            <div class="catalogue__circle"></div>
            <div class="catalogue__circle-blue"></div>
            <div class="catalogue__circle-beige"></div>
        </div>
    </div>
</template>


<script>
    export default {
      props: {
        product: {
          type: Object,
          required: true,
          
        },
      },
      methods: {
        sendDataToParent(){
            this.$emit('sendDataToParent', this.product.article)
        }

      }
    };
    </script>
    
    