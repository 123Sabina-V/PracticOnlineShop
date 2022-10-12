<template>
    <div>
        <HeaderSecond></HeaderSecond>
        <BreadScrumbs></BreadScrumbs>
        <Catalogue></Catalogue>
        <Footer></Footer>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderSecond from '../components/HeaderSecond.vue';
import BreadScrumbs from '../components/BreadScrumbs.vue';
import Catalogue from '../components/Catalogue.vue';
import Footer  from '@/components/Footer.vue';
    export default {
        name: 'CatalogueView',
        components: {
    HeaderSecond,
    BreadScrumbs,
    Catalogue,
    Footer
},
        
}
</script>
    