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
    async login () {
      try {
        await AuthenticationService.login(this.credentials)
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<style scoped>
  .err {
    height: 3em;
    color: red;
  }
</style>
