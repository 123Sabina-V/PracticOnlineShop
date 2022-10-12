<template>
    <div>
        <HeaderSecond></HeaderSecond>
        <BreadScrumbs></BreadScrumbs>
         <div class="container product__block">
            <div class="product__block_img">
                <img class="product__img" :src="require(`@/assets/img/${product_item_data.imgF}`)" alt="">
                <img class="product__img" :src="require(`@/assets/img/${product_item_data.imgS}`)" alt="">
                <img class="product__img" :src="require(`@/assets/img/${product_item_data.imgT}`)" alt="">
                <img class="product__img" :src="require(`@/assets/img/${product_item_data.imgFrth}`)" alt="">
                <img class="product__img" :src="require(`@/assets/img/${product_item_data.imgFth}`)" alt="">
            </div>
            <img class="product__img-big" :src="require(`@/assets/img/${product_item_data.img}`)" alt="" >
            <div class="product__block_text">
                <p class="title-type-third">{{product_item_data.name}}</p>
                
                <p class="text-type-first product__price">{{product_item_data.price}} грн</p>
                <router-link  :to="{name: 'cart', params:{cart_data: CART}}">
                <button class="catalogue__button" link="/cart">B корзину</button>   
            </router-link>
            <p class="subtitle-type-first-black">Подробности</p>
            <p class="subtitle-type-first-black product__text">Состав</p>
            <p class="text-type-second-black">{{product_item_data.storage}}</p>
            <p class="text-type-second-black">{{product_item_data.lining}}</p>
            <p class="text-type-second-black">{{product_item_data.padding}}</p>
            <p class="subtitle-type-first-black product__text">Уход</p>
            <p class="text-type-second-black ">- Не стирать</p>
            <p class="text-type-second-black">- Гладить при температуре утюга до 110°C</p>
            <p class="text-type-second-black">- Не отбеливать</p>
            <p class="text-type-second-black">- Сухая чистка (химчистка)</p>
            <p class="text-type-second-black">- Барабанная сушка запрещена</p>
        </div>
    
        
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
import HeaderSecond from './HeaderSecond.vue';
import BreadScrumbs from './BreadScrumbs.vue';
import Footer from './Footer.vue';
import {mapGetters} from 'vuex'

    export default {
    props: {
        product_item_data: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    computed: {
        ...mapGetters([
            'CART',
            'PRODUCT'
        ])
    },
    methods: {
        // addToCart() {
        //     this.$emit("addToCart", this.product);
        // },
    },
    components: { HeaderSecond, BreadScrumbs, Footer }
}
</script>