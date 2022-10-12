<template>
    <div>
        <Header></Header>
        <Cart 
            v-if="CART.length"
            :cart_data="CART"
            ></Cart>
    </div>
</template>

<script>

import Cart from '@/components/Cart.vue';
import Header from '@/components/Header.vue';

    export default {
        components: {
    Cart,
    Header
}

    }
</script>