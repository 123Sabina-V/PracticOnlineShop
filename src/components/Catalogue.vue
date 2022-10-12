<template>
    <div class="container">
  
        <div class="catalogue__block">
            <div class="catalogue__button_check">
                <a class="title-type-third catalogue__title">Каталог</a>
                <i class="catalogue__check"></i>
            </div>
            
            <div class="catalogue__block_link" id="catalogue">
                <a class="title-type-third catalogue__title-desktop">Каталог</a>
                <a class="subtitle-type-first catalogue__link" data-filter="3">Шубы</a>
                <a class="subtitle-type-first catalogue__link" data-filter="2">Тренчи</a>
                <a class="subtitle-type-first catalogue__link" data-filter="4">Пальто</a>
                <a class="subtitle-type-first catalogue__link" data-filter="1">Парки</a>
                <a class="subtitle-type-first catalogue__link" data-filter="all">Посмотреть всё</a>
            </div>
            <!-- <div class="catalogue__box">
                <div class="catalogue__box_item">
                    <div class="catalogue__parent_block">
                        <div class="catalogue__item">
                            <p  class="subtitle-type-first-black catalogue__group">Размер</p>
                            <i class="catalogue__check"></i>
                        </div> 
                        <div class="catalogue__toggled_block">
                            <p  class="subtitle-type-first-black catalogue__group">XXS</p>
                            <p  class="subtitle-type-first-black catalogue__group">XS</p>
                            <p  class="subtitle-type-first-black catalogue__group">S</p>
                            <p  class="subtitle-type-first-black catalogue__group">M</p>
                            <p  class="subtitle-type-first-black catalogue__group">L</p>
                        </div>                
                    </div>
                    <div class="catalogue__parent_block">
                        <div class="catalogue__item">
                            <p  class="subtitle-type-first-black catalogue__group">Размер</p>
                            <i class="catalogue__check"></i>
                        </div>
                        <div class="catalogue__toggled_block">
                            <p  class="subtitle-type-first-black catalogue__group">XXS</p>
                            <p  class="subtitle-type-first-black catalogue__group">XS</p>
                            <p  class="subtitle-type-first-black catalogue__group">S</p>
                            <p  class="subtitle-type-first-black catalogue__group">M</p>
                            <p  class="subtitle-type-first-black catalogue__group">L</p>
                        </div>                 
                    </div>      
            </div> -->
            
            <div class="catalogue__props">
                <div 
                v-for="product in PRODUCTS" 
                :key="product.article">
                <CatalogueItem :product="product"
                @addToCart="addToCart" 
                @addToFavorites="addToFavorites"
                />
            </div>
            </div>

            
            <!-- <Cart 
            v-if="CART.length"
            :cart_data="CART"
            ></Cart> -->

            </div>
    </div>

</template>

<style>
.catalogue__parent_block {
}

.catalogue__toggled_block {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: none;
}
.open-tab{
    display: block;
}
</style>
<script>
import $ from 'jquery';
import CatalogueItem from './CatalogueItem.vue';
import Cart from './Cart.vue';
import {mapActions, mapGetters} from 'vuex'
import Vuex from 'vuex'



    export default {
    props: {},
    data() {
        return {
           
        };
    },
    components: { CatalogueItem, Cart },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'PRODUCT'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART',
            'ADD_TO_FAVORITES'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        addToFavorites(data) {
            this.ADD_TO_FAVORITES(data)
            //  console.log(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if(response.data) {
                console.log('Data arrived!')
            }
        })

        let filter = $("[data-filter]");
        filter.on("click", function(e) {
            e.preventDefault();
            let cat = $(this).data('filter');

            if(cat == 'all') {
                $("[data-cat]").removeClass('catalogue__hide');
            } else {
                $("[data-cat]").each(function() {
                    let workCat = $(this).data('cat');
                    if(workCat != cat) {
                        $(this).addClass('catalogue__hide');
                    } else {
                        $(this).removeClass('catalogue__hide');
                    }
                })
                console.log(cat)
            }

           
        })

        $(".catalogue__button_check").on("click", function () {
        $(".dropdown-menu").slideToggle(300);
        let p = document.getElementById('catalogue');
        if (p.style.display == "flex") {
            p.style.display = "none";
        } else {
            p.style.display = "flex";
        }
        });
    
        // $(".catalogue__item").click(function () {
        //     $(".catalogue__toggled_block").toggle();
        // });
        // $(document).on("click", function (e) {
        //     if (!$(e.target).closest(".catalogue__parent_block").length) {
        //         e.preventDefault();
        //         $(".catalogue__toggled_block").hide();
        //     }
        //     e.stopPropagation();
        // });
        // $('.catalogue__parent_block')
        //     .on('mouseenter', function () {
        //         $(this).find('.catalogue__toggled_block').show();
        //         ('.catalogue__check').css("transform","rotate(90deg)")
        //     })
        //     .on('mouseleave', function () {
        //         $(this).find('.catalogue__toggled_block').hide();
        //     });
        // $( ".catalogue__parent_block" ).on('click', function(e) {
        //     $(this).find("").toggleClass('open-tab');
        //     $( this ).parent().find( ".catalogue__toggled_block" ).slideToggle( );
        // });
    },
    
}
        
    
    </script>
    