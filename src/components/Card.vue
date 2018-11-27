<template>
<section class="main">
  <v-card
    class="card absolute"
    hover
    >
      <div
        class="default"
        :class="{visible: !editing, invisible: editing}"
        draggable="true"
        @dragstart="startDraggingCard"
        @dragend="dropCard"
      >
        <span
          class="text"
          :class="{ completed }"
          @click="updateCard($event, { id, completed: !completed })"
        >
          {{title}}
        </span>

        <v-card-actions>
          <v-btn icon><v-icon flat @click.prevent="startEditing">create</v-icon></v-btn>
          <v-btn icon><v-icon flat @click.prevent="$store.dispatch('cards/deleteCard', { id })">clear</v-icon></v-btn>
        </v-card-actions>
      </div>
  </v-card>
  <form
    :class="{visible: editing, invisible: !editing}"
    v-on="{ submit: title ? ($event) => updateCard($event, { id, text: newTitle }) : ($event) => addCard($event) }"
  >
    <v-text-field
      autofocus
      ref="text"
      @blur="editing = false"
      v-model="newTitle"
      solo
      height="60px"
      class="absolute text-input"
    ></v-text-field>
  </form>

</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    title: String,
    parent: String,
    id: String,
    completed: Boolean
  },
  data () {
    return {
      editing: false,
      newTitle: ''
    }
  },
  computed: {
    ...mapState({
      board: state => state.lists,
      cards: state => state.cards
    })
  },
  methods: {
    startEditing () {
      this.editing = true
      this.$nextTick(() => this.$refs.text.focus())
    },
    updateCard (event, card) {
      event.preventDefault()
      this.$store.dispatch('cards/updateCard', card)
      this.editing = false
      this.newTitle = ''
    },
    addCard (event) {
      event.preventDefault()
      this.$store.dispatch('cards/addCard', {
        _id: this.parent,
        text: this.newTitle
      })
      this.editing = false
      this.newTitle = ''
    },
    startDraggingCard () {
      this.$store.dispatch('cards/setDraggingCard', this.id)
    },
    dropCard () {
      const cardID = this.cards.draggingCard
      const listID = this.board.droppingList
      this.$store.dispatch('cards/updateCard', {id: cardID, _parent: listID})
      this.$store.dispatch('cards/unsetDraggingCard')
      this.$store.dispatch('lists/unsetDroppingList')
    }
  },
  mounted () {
    if (!this.title) {
      this.startEditing()
    }
  }
}
</script>

<style scoped>
.default {
  display: flex;
}

.visible {
  visibility: visible;
}

.invisible {
  pointer-events: none;
  visibility: hidden;
}

.card {
  min-width: 120px;
  min-height: 60px;
}

.completed {
  color: lightgrey;
  text-decoration: line-through;
}

.main {
  margin: 5px 0 5px 0;
}

.absolute {
  position: absolute;
}

.text {
  min-width: 140px;
  line-height: 1.5em;
}

.text-input {
  width: 236px;
}
</style>
