<template>
<div class="container">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">

                </div>
            </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
      name : 'login',
      data : function() {
        return {
          email : null,
          password : null,
        }
      },

    }
</script>
