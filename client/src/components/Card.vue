<template>
  <v-card class="card" hover>
    {{title}}
    <v-card hover>
      <v-icon>create</v-icon>
    </v-card>
    <v-card hover>
      <v-icon @click="$emit('remove', title)">clear</v-icon>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  margin: 0.2em 0 0.2em 0;
}
</style>
