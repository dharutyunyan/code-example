<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form method="POST" action="#" @submit.prevent="submitForm()">

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input
                                id="email"
                                type="email"
                                class="form-control"
                                name="email"
                                v-model="email"
                                required
                                autocomplete="email"
                                autofocus />


                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password"
                                  type="password"
                                  class="form-control"
                                  name="password"
                                  v-model="password"
                                    >
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" >

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login'
                                </button>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
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
      computed: {
      },
      methods: {
        submitForm: function () {
          this.errors = [];
          if (!this.email) {
            //this.errors.push("Email required.");
          }
          if (!this.errors.length) {
            const user = {
              email: this.email,
              password: this.password,
            };
            
            this.login(user);
          }
        },
        ...mapActions({
          'login': 'Auth/login',
        }),
      }
    }
</script>
