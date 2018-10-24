<template>
  <v-card class="list">
    <span class="title pb-3">{{title}}</span>
      <card v-for="(card, index) in board.lists.find(list => list.title === title).cards"
        :key="index"
        :title="card"
        class="card">
      </card>
    <v-btn><span class="plus">+</span> Add a card</v-btn>
  </v-card>
</template>

<script>
import Card from '@/components/Card.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Card
  },
  props: {
    title: String,
    cards: Array
  },
  computed: {
    ...mapState({
      board: state => state.lists
    })
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  min-width: 240px;
}

.list:hover {
  cursor: pointer;
}

.title {
  font-size: 2em;
}

.plus {
  font-size: 1.8em;
  margin-right: 0.6em
}

.card {
  font-size: 1.2em;
  margin: 20px 0 20px 0;
}
</style>
