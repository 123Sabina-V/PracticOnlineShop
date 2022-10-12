<template>
    <div class="container  header-block-first">
        <nav class="header__menu">
           <span class="header__span-first"></span>
           <span class="header__span-second"></span>
           <span class="header__span-third"></span>
       
        </nav>
        <div id="myLinks" class="header__menu-burger container desktop" style="display: none">
    <nav class="header__span_cross">
        <span class="header__span-fourth"></span>
        <span class="header__span-fives"></span>
    </nav>
    <div class="header__block_link">
        <a href="" class="link-type-first">ОПЛАТА И ДОСТАВКА</a>
        <a href="" class="link-type-first">УСЛОВИЯ ВОЗВРАТА</a>
        <a href="/catalogue" class="link-type-first">КАТАЛОГ</a>
    </div>
    </div>
    <div id="myLinks" class="header__menu-burger container mobile" style="display: none; ">
    <div class="">
        <nav class="header__span_cross">
            <span class="header__span-fourth"></span>
            <span class="header__span-fives"></span>
        </nav>
        <img class="header__logo"  src="@/assets/img/YANKI.png" alt="">
       
        
        <a href="/cart">
            <img  class="" style="cursor: pointer" src="@/assets/img/basket.jpg" alt="">
        </a>
    </div>
    </div>
        <div class="header__link">
            <a href="" class="link-type-first ">NEW</a>
            <a href="/catalogue" class="link-type-first ">КАТАЛОГ</a>
            <a href="" class="link-type-first ">О НАС</a>
        </div>
        <img src="@/assets/img/YANKI.png" alt="">
        <div class="header__link">
            <a href="" class="link-type-first">RU</a>
            <a href="" class="link-type-first">UAH</a>
        </div>
        <div class="header-block">
            <img class="header__icon header__icon-mobile" src="@/assets/img/search.jpg" alt="">
            <img class="header__icon header__icon-mobile" src="@/assets/img/profile.jpg" alt="">
            <img  class="header__icon header__icon-mobile" src="@/assets/img/favorites.jpg" alt="">
            
            <router-link :to="{name: 'cart', params:{cart_data: CART}}">
                <div class="header__box">
                    <img  class="header__icon" src="@/assets/img/basket.jpg" alt="">
                    <p class="header__length">
                        {{CART.length}}
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import $ from 'jquery';
    export default {
        name: 'header-second',
        computed: {
        ...mapGetters([
            'CART',
            'PRODUCT'
        ])
    },
   
        mounted() {
    $(".header__menu").on("click", function () {
        $(".dropdown-menu").slideToggle(300);
        let x = document.getElementById("myLinks");
        if (x.style.display == "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
        });
    
   
    $(".header__span_cross").on("click", function () {
        $(".dropdown-menu").slideToggle(300);
        let x = document.getElementById("myLinks");
        if (x.style.display == "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
        });
    },
    }
</script>