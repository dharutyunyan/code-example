<template>
    <div class="row m-0 ml-3" id="paymet-methods">
                <loading :active.sync="processing"
                :can-cancel="true"
                :is-full-page="true"></loading>

                <div class="p-0 form-group has-search col-12 mt-3">
                    <i class="icon icon-search form-control-feedback"></i>
                    <input type="text" class="form-control" placeholder="Search">
                </div>


                <div class="mt-3 card col-xl-2 col-sm-3 col-xs-15 mr-3">
                    <div class="text-center mt-3">

                    </div>
                    <div class="text-center mt-3 poduct-name mt-5">
                        <router-link to="/product/add">Add a new product</router-link>
                    </div>
                    <div class="text-center mt-3 mb-3 poduct-name">

                    </div>
                </div>
                <div v-for="item in products" class="mr-xs-0 mt-3 mr-3 card col-xl-2 col-sm-3 col-xs-12">
                    <div class="text-center mt-3">
                        <img height="68px" class="img-circle" src="src/img/profile.png" />
                    </div>
                    <div class="text-center mt-3 poduct-name">
                        {{item.name}}
                    </div>
                    <div v-if="item.category" class="text-center mt-3 mb-3 poduct-name">
                        {{item.category.name}}
                    </div>
                    <div class="text-center mt-3 poduct-name">
                        ${{item.price}}
                    </div>
                    <div v-if="item.category" class="text-center mt-3 mb-3 poduct-name">
                        <router-link :to="'/product/' + item.id + '/edit'">Edit</router-link> |
                        <router-link :to="'/product/' + item.id" event="" @click.native.prevent="deleteProduct(item.id)">Delete</router-link>
                    </div>
                </div>
            </div>
    </div>
</template>
<style lang="scss" scoped>

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

.card {
   border: 1px solid #EAEDF0;
   box-shadow: 0px 4px 12px rgba(176, 190, 197, 0.24);
   border-radius: 8px;
   text-transform: uppercase;
}
.poduct-name{
     font-size: 14px;
}

.card-seperator{
   border-color: #EAEDF0
}


.search-input{
    background: #FFFFFF;
    /* Light mode/Search */

    box-shadow: 0px 4px 8px rgba(176, 190, 197, 0.24);
    border-radius: 8px;
}

.form-group label{
    font-size: 14px;
}

.form-control{
    border: 1px solid #EAEDF0;
    border-radius: 8px;
}
</style>
<script>
    import Loading from 'vue-loading-overlay';
    import {mapState} from 'vuex';
    export default {
        components:{
            Loading,
        },
        data(){
            return {

            }
        },
        computed:{
            ...mapState({
                products: state => state.Product.products,
                processing: state => state.processing,
            }),
        },
        mounted(){
            this.$store.dispatch('Product/fetchProducts');
            this.$store.dispatch('setPageTitle', 'Products');

        },
        methods: {
            deleteProduct(id){
                this.$store.dispatch('Product/productDelete', id);
            }
        }
    }
</script>
