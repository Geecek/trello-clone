<template>
  <section class="my-boards">
    <board-card v-for="board in boards.boardTitles"
      :key="board._id"
      :id="board._id"
      :title="board.title"
    >
    </board-card>
    <add-board class="mt-5"></add-board>
  </section>
</template>

<script>
import AddBoard from '@/components/AddBoard.vue'
import BoardCard from '@/components/BoardCard.vue'

import { mapState } from 'vuex'

export default {
  name: 'MyBoards',
  components: {
    AddBoard,
    BoardCard
  },
  computed: {
    ...mapState({
      boards: state => state.boards,
      userState: state => state.user
    })
  },
  mounted () {
    if (!this.userState.isLoggedIn) {
      return
    }
    this.$store.dispatch('boards/fetchBoards')
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
