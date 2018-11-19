<template>
  <v-layout row wrap>
    <v-flex md6 offset-md3 class="mt-5 elevation-2">
      <v-toolbar flat dense class="green">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <div>
        <v-flex xs10 offset-xs1>
          <v-text-field id="email" v-model="credentials.email" label="Email"/>
        </v-flex>

        <v-flex xs10 offset-xs1>
          <v-text-field id="password" type="password" v-model="credentials.password" label="Password"/>
        </v-flex>
        <v-btn color="green" @click="login">Login</v-btn>
        <p class="err">{{error}}</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

import { mapState } from 'vuex'

export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    login () {
      AuthenticationService.login(this.credentials)
        .then(response => {
          this.$store.dispatch('user/setToken', { token: response.headers['x-auth'] })
          this.$store.dispatch('user/logIn')
          this.$router.push({ name: 'myboards' })
          console.log(this.userState)
        }).catch(err => {
          console.log(err)
          this.error = 'Pass matching email and password!'
        })
    }
  },
  computed: {
    ...mapState({
      userState: state => state.user
    })
  }
}
</script>

<style scoped>
  .err {
    height: 3em;
    color: red;
  }
</style>
