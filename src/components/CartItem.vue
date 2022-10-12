<template>
    <div class="container">
        <div class="cart">
            <div class="cart__block">
                <img class="cart__img" :src="require(`@/assets/img/${cart_item_data.img}`)" alt="">
                <div class="cart__box_text">
                    <p class="text-type-second cart__text">арт. {{cart_item_data.article}}</p>
                    <p class="subtitle-type-second">{{cart_item_data.name}}</p>
                
                </div>
            </div>
            
            <div class="cart__block cart__block-mobile">
                <div class="cart__box">
                    <span class="cart__minus" @click="decrementItem">-</span>
                    <p class="">{{cart_item_data.quantity}}</p>
                    <span class="cart__plus" @click="incrementItem">+</span>
                </div>
                <p class="text-type-first">{{cart_item_data.price}} грн</p>  
                <img class="cart__img_button" src="@/assets/img/delete.png" @click="deleteFromCart"> 
            </div>
            
        </div>
            
    </div>
</template>
<script>

    export default {
      props: {
        cart_item_data: {
          type: Object,
          default() {
            return {}
          }
        },
      },
      
      methods: {
       
        decrementItem() {
            this.$emit('decrement');
        },
        incrementItem() {
            this.$emit('increment');
        },
        deleteFromCart() {
            this.$emit('deleteFromCart');
        }
      },
      

    }
</script> 