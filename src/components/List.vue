<template>
  <v-card class="list">
    <span class="title pb-3">{{title}}</span>
      <card v-for="(card, index) in cardsByParent(this.id)"
        :key="index"
        :id="card._id"
        :title="card.text"
        :parent="card._parent"
        :completed="card.completed"
        class="card">
      </card>
    <v-btn @click="addTemporaryCard"><span class="plus">+</span> Add a card</v-btn>
  </v-card>
</template>

<script>
import Card from '@/components/Card.vue'
import { mapState, mapGetters } from 'vuex'

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
    }),
    ...mapGetters({
      cardsByParent: 'cards/getCardsByParent'
    })
  },
  methods: {
    addTemporaryCard () {
      this.$store.dispatch('cards/addTemporaryCard', { text: '', _parent: this.id })
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
