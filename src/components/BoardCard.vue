<template>
<v-card class="board" hover @click.native="navigateTo({path: `/board/${id}`})">
  <v-card-title>
    <h1>{{ title }}</h1>
  </v-card-title>
</v-card>
</template>

<script>
export default {
  props: {
    title: String,
    id: String
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
