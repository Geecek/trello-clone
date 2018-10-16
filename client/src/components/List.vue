<template>
  <v-card class="list">
    <span class="title pb-3">{{title}}</span>
      <card v-for="(card, index) in cards"
        :key="index"
        :title="card"
        class="card"
        @remove="removeCard($event)"
        @updateCard="update($event)">
      </card>
    <v-btn><span class="plus">+</span> Add a card</v-btn>
  </v-card>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  },
  props: {
    title: String,
    cards: Array
  },
  methods: {
    removeCard (title) {
      const index = this.cards.indexOf(title)
      this.cards.splice(index, 1)
    },
    update (title) {
      const index = this.cards.indexOf(title[0])
      this.cards[index] = title[1]
      console.log(this.cards)
    }
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
