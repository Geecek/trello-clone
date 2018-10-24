<template>
  <section class="board">
    <list v-for="(list, index) in board.lists"
      :key="index"
      :title="list.title"
      :cards="list.cards"
      class="pt-3 pb-1 list"
    ></list>
    <add-list></add-list>
  </section>
</template>

<script>
import AddList from '@/components/AddList.vue'
import List from '@/components/List.vue'

import { mapState } from 'vuex'

export default {
  name: 'Board',
  components: {
    AddList,
    List
  },
  computed: {
    ...mapState({
      board: state => state.lists
    })
  }
}
</script>

<style scoped>
.board {
  display: flex;
  align-items: flex-start;
}

.list {
  margin: 0em 0.5em 0em 0.5em;
  min-width: 180px;
}
</style>
