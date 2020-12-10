<template>
    <div class="container-fluid row ">
                <loading :active.sync="processing"
                :can-cancel="true"
                :is-full-page="true"></loading>


                <div class="w-100 m-3">
                    <div class="form-group">
                        <label for="dgCategoryName">Category name</label>
                        <input type="text" class="form-control" v-model="category.name" id="dgCategoryName" placeholder="Enter name">
                        <div class="error" v-if="$v.category.name.$dirty"><span v-if="!$v.category.name.required">Field is required</span></div>
                      </div>
                      <div class="form-group">
                          <label for="dgSku">SKU</label>
                          <input type="text" class="form-control" v-model="category.sku" id="dgSku" placeholder="Enter SKU">
                          <div class="error" v-if="$v.category.sku.$dirty"><span v-if="!$v.category.sku.required">Field is required</span></div>
                    </div>
                    <div class="form-group">
                        <label for="dgCategoryDescription">Description</label>
                        <input type="text" class="form-control" v-model="category.description" id="dgCategoryDescription" placeholder="Enter Description">
                        <div class="error" v-if="$v.category.description.$dirty"><span v-if="!$v.category.description.required">Field is required</span></div>
                  </div>
                    <button class="btn w-20 btn-primary" @click.prevent="saveCategory()">Save</button>
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
                category: {
                    name: '',
                    sku: '',
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
            this.$store.dispatch('Category/getCategoryById', this.$route.params.id).then( category => {
                this.category = category;
            });
            this.$store.dispatch('setPageTitle', 'Edit category');
        },
        validations: {
            category: {
                  name:{
                      required,
                  },
                  sku:{
                      required,
                  },
                  description:{
                      required,
                  },
              },
        },
        methods: {
            saveCategory() {
                this.$v.category.$touch();
                if(!this.$v.product.$anyError){
                    this.$store.dispatch('Category/categorySave', this.category).then(res => {
                        this.$router.push('/category')
                      }).catch((err) => {
                        console.log(err)
                      });
                }
            }
        }
    }
</script>
