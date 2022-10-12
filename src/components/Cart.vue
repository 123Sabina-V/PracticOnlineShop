<template>
    <div>
        <HeaderSecond></HeaderSecond>
        <BreadScrumbs></BreadScrumbs>
        <div class="container">
            <p class="title-type-third" style="text-align: left; margin-bottom: 20px;" v-if="cart_data.length">Ваш заказ</p>
        </div>
        <p class="title-type-third" v-if="!cart_data.length">Корзина пустая!</p>
        <CartItem
        v-for="item, index in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement= "decrement(index)"
        ></CartItem>
        <div class="container cart__distance" v-if="cart_data.length">
            <p class="text-type-third" style="margin-right: 10px">К оплате:</p>
            <p class="text-type-first">{{cartTotalCost}} грн</p>
        </div>
        <Order v-if="cart_data.length"></Order>
        <div class="container " v-if="cart_data.length">
            <div class="catalogue__order">
                <p class="subtitle-type-first" style="color: #252525; margin-right: 10px">ДОСТАВКА:</p>
                <p class="text-type-first">По тарифам перевозчика</p>
            </div>
            <div class="catalogue__order">
                <p class="text-type-third" style="margin-right: 10px">ИТОГО:</p>
                <p class="text-type-first">{{cartTotalCost}} грн</p>
            </div>
            <div class="catalogue__order">
                <button  id="btnSend" class="catalogue__button" style="margin: 0px">Оформить заказ</button>
            </div>
            
            
            
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
import CartItem from './CartItem.vue';
import {mapActions} from 'vuex'
import HeaderSecond from './HeaderSecond.vue';
import BreadScrumbs from './BreadScrumbs.vue';
import $ from 'jquery';
import Footer from './Footer.vue';
import Order from './Order.vue';
    export default {
    components: { CartItem, HeaderSecond, BreadScrumbs, Footer, Order },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed:{
        cartTotalCost() {
            let result = []
            if(this.cart_data.length) {
                for(let item of this.cart_data) {
                    result.push(item.price * item.quantity)
                }
                result = result.reduce(function(sum, el) {
                    return sum + el;
                })
                return result;
            } else {
                return 0;
            }
            
              
        }

    },
    mounted() {
        $(document).ready(function () {

            $("#btnSend").click(function (e) {
                var result = window.confirm('Заказ оформлен');
                if (result == false) {
                    e.preventDefault();
                };
            });
        });
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM', 
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) { 
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) { 
            this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) { 
            this.DELETE_FROM_CART(index)
        }
    }

}
</script>