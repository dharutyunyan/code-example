<template>
    <div class="container-fluid row ">
                <loading :active.sync="processing"
                :can-cancel="true"
                :is-full-page="true"></loading>

        <div class="m-4 w-30">
            <div class="p-3 category-name">
                <a href="#" @click.prevent="showModal = true">Add a new category</a>
            </div>
        </div>
        <div class="container-fluid row ">
            <div v-for="item in categories" class=" col-3 m-2">
                <div class="p-3 category-name">
                    {{item.name}}
                    <span class="float-right" >
                        <router-link :to="'/category/' + item.id + '/edit'">Edit</router-link> |
                        <router-link :to="'/category/' + item.id" event="" @click.native.prevent="deleteCategory(item.id)">Delete</router-link>
                    </span>
                </div
                </div>
            </div>
        </div>
        <modal-category-add :showModal="showModal" @closeModal="closeModal"></modal-category-add>
    </div>
</template>
<style lang="scss" scoped>
    .category-name{
        border: 1px solid #EAEDF0;
    }
</style>
<script>
    import Loading from 'vue-loading-overlay';
    import {mapState} from 'vuex';
    import Notifications from './../../notification/views/Notifications.vue';
    import Modal from './modals/ModalCategoryAdd.vue';
    export default {
        components:{
            Loading,
            'notifications': Notifications,
            'modal-category-add': Modal,
        },
        data(){
            return {
                showModal: false
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
            this.$store.dispatch('setPageTitle', 'Categories');

        },
        methods: {
            closeModal() {
                this.showModal = false;
            },

            deleteCategory(id){
                this.$store.dispatch('Category/categoryDelete', id);
            }
        }
    }
</script>
