<template>
    <div class="container">
  
        <div class="catalogue__block">
            <div class="">
                <a class="title-type-third catalogue__title">Каталог</a>
                <a class="subtitle-type-first catalogue__link">New</a>
                <a class="subtitle-type-first catalogue__link">Bestsellers</a>
                <a class="subtitle-type-first catalogue__link">Верхняя одежда</a>
                <a class="subtitle-type-first catalogue__link">Шубы</a>
                <a class="subtitle-type-first catalogue__link">Тренчи</a>
                <a class="subtitle-type-first catalogue__link">Пальто</a>
                <a class="subtitle-type-first catalogue__link">Пуховики и жилеты</a>
                <a class="subtitle-type-first catalogue__link">Костюмы</a>
                <a class="subtitle-type-first catalogue__link">Жакеты</a>
                <a class="subtitle-type-first catalogue__link">Платья</a>
                <a class="subtitle-type-first catalogue__link">Рубашки и блузы</a>
                <a class="subtitle-type-first catalogue__link">Юбки</a>
                <a class="subtitle-type-first catalogue__link">Футболки и топы</a>
                <a class="subtitle-type-first catalogue__link">Аксессуары</a>
                <a class="subtitle-type-first catalogue__link">Sale</a>
                <a class="subtitle-type-first catalogue__link">Summer</a>
                <a class="subtitle-type-first catalogue__link">Посмотреть всё</a>
            </div>
            <div class="catalogue__box">
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
            </div>
            
            <div 
                v-for="product in this.$store.state.PRODUCTS" 
                :key="product.article">
                <CatalogueItem :product="product"
                @sendDataToParent="showChildArticleInConsole" 
                />
            </div>

            </div>
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
import {mapActions, mapGetters} from 'vuex'
import Vuex from 'vuex'



    export default {
    props: {},
    data() {
        return {
           
        };
    },
    components: { CatalogueItem },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
        showChildArticleInConsole(data) {
            console.log(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        // .then((response) => {
        //     if(response.data) {
        //         console.log('Data arrived!')
        //     }
        // })
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
    