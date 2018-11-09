<template>
  <section class="my-boards">
    <v-card v-for="(board, index) in boards.boardTitles"
      :key="index"
      class="board"
      hover
    >
      <v-card-title>
        <h1>{{ board.title }}</h1>
      </v-card-title>
    </v-card>
    <add-board class="mt-5"></add-board>
  </section>
</template>

<script>
import AddBoard from '@/components/AddBoard.vue'

import { mapState } from 'vuex'

export default {
  name: 'MyBoards',
  components: {
    AddBoard
  },
  computed: {
    ...mapState({
      boards: state => state.boards
    })
  }
}
</script>

<style scoped>
.my-boards {
  display: flex;
  align-items: flex-start;
}

.board {
  margin: 1em 1.5em 1em 1.5em;
  min-width: 220px;
  padding: 3em;
}
</style>
