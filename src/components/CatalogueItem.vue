<template>
    <div class="catalogue__block_product">
      <div :data-cat="product.data">
        <div class="catalogue__block_img">
            <img class="catalogue__img" :src="require(`@/assets/img/${product.img}`)" alt="" >
            <a  class="catalogue__button_favorites" >
                <img class="catalogue__img_icon" src="@/assets/img/basket.jpg" link="/cart" @click="addToCart" alt="">
            </a> 
        </div>
        <p class="subtitle-type-first-black catalogue__text">{{product.name}}</p>
        <p class="text-type-first">{{product.price}} грн</p>
      
       <router-link :to="{name: 'product', params:{product_data: PRODUCT}}" >
            <button link="/product" class="catalogue__button" @click="addToFavorites">Подробнее</button>
        </router-link>
        <!-- <a  class="catalogue__button" link="/cart" @click="addToCart">Добавить в корзину</a>  -->
        
        <!-- <a  class="catalogue__button" link="/cart" @click="showInfo">Подробнее</a>        -->
        <!-- <a href="/product">Product</a> -->
       
      </div>
        
            
        <!-- <div class="catalogue__block_size">
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
        </div> -->
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
    export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters([
            'CART',
            'PRODUCT'
        ]),
    },
    data() {
      return {
        
      }
    },
    mounted() {
        this.$set(this.product, "quantity", 1);
    },
    methods: {
        addToCart() {
            this.$emit("addToCart", this.product);
        },
        addToFavorites() {
            this.$emit("addToFavorites", this.product);
        }
        // showInfo() {
        //   this.isInfoPopupVisible = true
        // }
    },
    
};
    </script>
    
    