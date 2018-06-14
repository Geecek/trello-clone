<template>
  <div class="container">
    <h1>Register</h1>
    <input type="email" name="email" placeholder="example@email.com" v-model="credentials.email">
    <br>
    <input type="password" name="password" placeholder="password" v-model="credentials.password">
    <br>
    <button @click="register">Register</button>
    <p class="error">{{error}}</p>
  </div>
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
    async register () {
      try {
        await AuthenticationService.register(this.credentials)
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<style scoped>
  .error {
    height: 3em;
    color: red;
  }

  input {
    margin: 2em;
  }

  .container {
    width: 60%;
    border: solid 2px;
    border-radius: 2em;
  }
</style>
