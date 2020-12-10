<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container col-xl-4 col-xs-12 col-md-8 p-0">

                    <div class="dg-modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <div class="dg-modal-footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="scss" scoped>
    .dg-modal-header{
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
        filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.12));
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
</style>
<script>

    export default {

        data(){
            return {

            }
        },

    }
</script>
