<template>
    <div class="container-fluid row ">
                <loading :active.sync="processing"
                :can-cancel="true"
                :is-full-page="true"></loading>


                <div class="w-100 m-3">
                    <div class="form-group">
                        <label for="dgCategoryName">Product name</label>
                        <input type="text" class="form-control" v-model="product.name" id="dgCategoryName" placeholder="Enter name">
                        <div class="error" v-if="$v.product.name.$dirty"><span v-if="!$v.product.name.required">Field is required</span></div>
                    </div>
                    <div class="form-group">
                        <label for="dgPrice">Price</label>
                        <input type="text" class="form-control" v-model="product.price" id="dgPrice" placeholder="Enter Price">
                        <div class="error" v-if="$v.product.price.$dirty"><span v-if="!$v.product.price.required">Field is required</span></div>
                    </div>
                    <div class="form-group">
                        <label for="dgSku">SKU</label>
                        <input type="text" class="form-control" v-model="product.sku" id="dgSku" placeholder="Enter SKU">
                        <div class="error" v-if="$v.product.sku.$dirty"><span v-if="!$v.product.sku.required">Field is required</span></div>
                    </div>
                    <div class="form-group">
                        <label for="dgSku">Category</label>
                        <select class="form-control" v-model="product.category_id">
                            <option>
                                Choose category
                            </option>
                            <option v-for="(item,key) in categories" :key="key" :value="item.id">{{item.name}}</option>
                        </select>
                        <div class="error" v-if="$v.product.category_id.$dirty"><span v-if="!$v.product.category_id.required">Field is required</span></div>
                    </div>
                    <div class="form-group">
                        <label for="dgCategoryDescription">Description</label>
                        <input type="text" class="form-control" v-model="product.description" id="dgCategoryDescription" placeholder="Enter Description">
                        <div class="error" v-if="$v.product.description.$dirty"><span v-if="!$v.product.description.required">Field is required</span></div>
                    </div>
                    <button class="btn w-20 btn-primary" @click.prevent="createProduct()">Create</button>
                </div>
            </div>
    </div>
</template>
<style lang="scss" scoped>
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
</style>
<script>
    import Loading from 'vue-loading-overlay';
    import {mapState} from 'vuex';
    import Notifications from './../../notification/views/Notifications.vue';
    import {required} from 'vuelidate/lib/validators';
    export default {
        components:{
            Loading,
            'notifications': Notifications,
        },
        data(){
            return {
                product: {
                    name: '',
                    price: '',
                    sku: '',
                    category_id: '',
                    description: ''
                }
            }
        },
        computed:{
            ...mapState({
                categories: state => state.Category.categories,
                processing: state => state.processing,
            }),
        },
        mounted(){
            this.$store.dispatch('Category/fetchCategories');
            this.$store.dispatch('setPageTitle', 'Add new product');
        },
        validations: {
            product: {
                  name:{
                      required,
                  },
                  price:{
                      required,
                  },
                  sku:{
                      required,
                  },
                  category_id:{
                      required,
                  },
                  description:{
                      required,
                  },
              },
        },
        methods: {
            createProduct() {
                this.$v.product.$touch();
                if(!this.$v.product.$anyError){
                    this.$store.dispatch('Product/productAdd', this.product).then(res => {
                        this.$store.dispatch('Notification/clearNotifications');
                        this.$router.push('/product')
                      }).catch((err) => {
                          for (var key in err.response.data.errors) {
                              this.$store.dispatch('Notification/addError', err.response.data.errors[key][0]);
                          }
                      });
                }
            }
        }
    }
</script>
