<template>
  <section class="board">
    <list v-for="item in items"
      :key="item.title"
      :title="item.title"
      :cards="item.cards"
      class="pt-3 pb-1 list"
    ></list>
    <add-list></add-list>
  </section>
</template>

<script>
import AddList from '@/components/AddList.vue'
import List from '@/components/List.vue'

export default {
  name: 'Board',
  components: {
    AddList,
    List
  },
  data () {
    return {
      items: [
        {
          title: 'Shopping',
          cards: [
            'Bread',
            'Cheese',
            'Apples'
          ]
        },
        {
          title: 'Uni',
          cards: []
        }
      ]
    }
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
