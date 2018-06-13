<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="example@email.com" v-model="credentials.email">
    <input type="password" name="password" placeholder="password" v-model="credentials.password">
    <button @click="register">Register</button>
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
      }
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register(this.credentials)
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
