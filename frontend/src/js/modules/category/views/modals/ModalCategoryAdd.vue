<template>
    <modal v-if="showModal" @close="showModal = false">
        <div slot="header" class="p-3">
            <a href="" @click.prevent="$emit('closeModal')" class="pr-1"><img src="src/img/icons/close.svg" /></a>
            <span class="dg-modal-title">Add New Category</span>
        </div>
        <div slot="body" class="">
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
        </div>
        <div slot="footer" class="">
            <button class="btn w-100 btn-primary" @click.prevent="saveCategory()">Create</button>
        </div>
    </modal>
</template>
<style lang="scss" scoped>
    .btn-primary{
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
</style>
<script>
    import Modal from './Modal.vue';
    import {required} from 'vuelidate/lib/validators';
    export default {
        components:{
            'modal': Modal,
        },
        props: {
            showModal: Boolean,
            editCategory: Object,
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
                if(!this.$v.category.$anyError){
                    this.$store.dispatch('Product/categoryAdd', this.category);
                    this.$emit('closeModal');
                    this.$store.dispatch('Notification/clearNotifications');
                    this.categoy = {
                        name: '',
                        sku: '',
                        description: ''
                    };
                }else{
                    this.$store.dispatch('Notification/addError', 'Fix required fields');
                }
            }
        }

    }
</script>
