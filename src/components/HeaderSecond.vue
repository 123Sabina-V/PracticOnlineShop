<template>
    <div class="container header-block-second">
        <nav class="header__menu">
           
           <span class="header__span-first" style="background: #E0BEA2;"></span>
           <span class="header__span-second" style="background: #E0BEA2;"></span>
           <span class="header__span-third" style="background: #E0BEA2;"></span>
       
        </nav>
        <div id="myLinks" class="header__menu-burger container desktop" style="display: none; background: #E0BEA2;">
    
    <nav class="header__span_cross">
        <span class="header__span-fourth" style="background: #FFF;"></span>
        <span class="header__span-fives" style="background: #FFF;"></span>
    </nav>
    <div class="header__block_link">
        <a href="" class="link-type-first">ОПЛАТА И ДОСТАВКА</a>
        <a href="" class="link-type-first">УСЛОВИЯ ВОЗВРАТА</a>
        <a href="/catalogue" class="link-type-first">КАТАЛОГ</a>

    </div>
    </div>
        <div class="header__link">
            <a href="" class="link-type-first link-type-first-black">NEW</a>
            <a href="/catalogue" class="link-type-first link-type-first-black">КАТАЛОГ</a>
            <a href="" class="link-type-first link-type-first-black">О НАС</a>
        </div>
        <img src="@/assets/img/YANKIB.png" alt="">
        <div class="header__link">
            <a href="" class="link-type-first link-type-first-black">RU</a>
            <a href="" class="link-type-first link-type-first-black">UAH</a>
        </div>
        <div class="header-block">
            <img class="header__icon header__icon-mobile" src="@/assets/img/searchb.jpg" alt="">
            <img class="header__icon header__icon-mobile" src="@/assets/img/profileb.jpg" alt="">
            <img  class="header__icon header__icon-mobile" src="@/assets/img/favoritesb.jpg" alt="">
            
            <router-link :to="{name: 'cart', params:{cart_data: CART}}">
                <div class="header__box">
                    <img  class="header__icon" src="@/assets/img/basketb.jpg" alt="">
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