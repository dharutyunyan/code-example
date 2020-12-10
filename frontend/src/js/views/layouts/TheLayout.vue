<template>
    <div class="row" id="body-row">
        <sidebar-menu></sidebar-menu>
        <div class="col p-0">
            <appbar></appbar>
            <notifications></notifications>
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
      </div>
</template>
<script>
import SideBar from './TheSideBar.vue';
import AppBar from './TheAppBar.vue';
import Notifications from './../../modules/notification/views/Notifications.vue';
export default {
  name: 'Layout',
  data : function () {
      return {
                
            }
  },

  components: {
      "sidebar-menu" : SideBar,
      "appbar" : AppBar,
      'notifications': Notifications,
  },

  mounted: function(){
      this.$store.dispatch('Auth/initState');
  },
};
</script>
