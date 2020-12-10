<template>
    <div v-if="messages.length || errors.length" class="col-12 p-0">
        <ul v-if="messages.length" class="dg-notification dg-success">
            <li v-for="message in messages">
                {{message}}
            </li>
        </ul>
        <ul v-if="errors.length" class="dg-notification dg-error">
            <li v-for="error in errors">
                {{error}}
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.dg-notification{
    list-style: none;
    padding:5px 0px;
    opacity: 0.8;
}

.dg-notification li{
    margin-left: 10px;
    padding:8px;
}

.dg-success{
    background: #66BB6A;
}

.dg-error{
    background: #D32F2F;
}
</style>
<script>
import {mapState} from 'vuex';
export default {
  name : 'notification',
  data: function() {
    return {

    }
  },
  computed:{
      ...mapState({
          errors: state => state.Notification.errors,
          messages: state => state.Notification.messages,
      }),
  },
  mounted() {
      //console.log(this.errors);
  },
}
</script>
