<template>
  <v-card class="list">
    <span class="title pb-3">{{title}}</span>
    <!-- TODO: figure out why getters wouldn't work -->
      <card v-for="(card, index) in cards.cardTitles.filter(card => card._parent === this.id)"
        :key="index"
        :title="card.text"
        :parent="card._parent"
        class="card">
      </card>
    <v-btn @click="addCard"><span class="plus">+</span> Add a card</v-btn>
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
    id: String
  },
  computed: {
    ...mapState({
      board: state => state.lists,
      cards: state => state.cards
    })
  },
  methods: {
    addCard () {
      this.$store.dispatch('cards/addCard', { title: this.title })
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
