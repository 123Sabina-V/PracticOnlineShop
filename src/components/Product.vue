 < <template>
    <div class="">
         <ProductItem
         v-for="item, index in product_data"
         :key="item.article"
         :product_item_data="item"
         @addToCartProduct="addToCartProduct" 
         ></ProductItem>   
        </div>
</template>

<script>
import CatalogueItem from './CatalogueItem.vue';
import ProductItem from './ProductItem.vue';
import {mapActions, mapGetters} from 'vuex'
    export default {
    props: {
        product_data: {
            type: Array,
            default() {
              return []
            }
        },
    },
    methods: {
      ...mapActions([
            'ADD_TO_CART_PRODUCT',
        ]),
        addToCartProduct(data) {
            this.ADD_TO_CART_PRODUCT(data)
            console.log(data)
        },
        // addToFavorites() {
        //     this.$emit("addToFavorites", this.product);
        // }
    },
    components: { CatalogueItem, ProductItem }
};
    </script> 