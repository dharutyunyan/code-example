<template>
    <nav class="p-0 navbar navbar-expand app-bar">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="d-md-none d-block " type="button" data-toggle="collapse" data-target="#sidebar-container"
            aria-controls="sidebar-container" aria-expanded="false" aria-label="Toggle navigation">
                <span class="dark-blue-text">
                    <i class="icon icon-sendwich"></i>
                </span>
            </a>
            <h1 class="page-title">{{pageTitle}}</h1>
          <ul v-if="status.loggedIn" class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="icon-message icon mr-0"></i> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="icon-notification icon mr-0"></i> </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="icon-help icon mr-0"></i> </a>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img :src="this.user && this.user.avatar?  'uploads/' + this.user.avatar : 'src/img/profile.png'" />
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Account</a>
                <a class="dropdown-item" href="#" v-on:click.prevent="logout">Log out</a>
              </div>
            </li>
          </ul>
          <ul v-else class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link  class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link" to="/register">Register</router-link>
            </li>
          </ul>
        </div>
    </nav>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      data: function() {
        return {

        }
      },
      computed:{
            ...mapState({
                user: state => state.Auth.user,
                status: state => state.Auth.status,
                pageTitle: state => state.pageTitle,
            }),
        },
      methods:{
        logout: function(){
          this.$store.dispatch('Auth/logout');
        }
      },
    }
</script>
