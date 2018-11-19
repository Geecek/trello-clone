<template>
  <v-toolbar class="green" fixed>
    <v-toolbar-title class="mr-4">
      Trello
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.user.isLoggedIn" @click="navigateTo({name: 'login'})" flat dense>Sign in</v-btn>
      <v-btn v-if="!$store.state.user.isLoggedIn" @click="navigateTo({name: 'register'})" flat dense>Sign up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      console.log(route)
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
