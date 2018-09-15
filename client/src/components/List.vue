<template>
  <v-card hover>
    <span class="title">{{title}}</span>
    <ul class="pt-2 list">
      <li v-for="card in cards"
        :key="card"
        class="card"
      >{{card}}</li>
    </ul>
    <v-btn><span class="plus">+</span> Add a card</v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    cards: Array
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}

.plus {
  font-size: 1.8em;
  margin-right: 0.6em
}

.card {
  font-size: 1.2em;
  margin: 0.2em;
}
</style>
