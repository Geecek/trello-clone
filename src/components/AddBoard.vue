<template>
  <section class="new-board">
    <v-btn
      class="absolute"
      :class="{visible: editing, invisible: !editing}"
      @click.prevent="newBoard"
    ><span class="plus">+</span> Add new board</v-btn>
    <v-form
      class="absolute"
      :class="{visible: !editing, invisible: editing}"
    >
      <v-text-field
        ref="text"
        v-model="title"
        :counter="16"
        placeholder="Enter board title..."
        solo
        required
      ></v-text-field>
      <div class="form-menu">
        <v-btn @click.prevent="addNewBoard">Add board</v-btn>
        <v-btn
          class="escape"
          @click.prevent="changeView"
        >exit</v-btn>
      </div>
    </v-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      editing: true
    }
  },
  methods: {
    changeView () {
      this.editing = !this.editing
      this.title = ''
    },
    newBoard () {
      this.changeView()
      this.$nextTick(() => this.$refs.text.focus())
    },
    addNewBoard () {
      if (this.title) {
        this.$store.dispatch('boards/pushBoard', { title: this.title })
        this.changeView()
      }
    }
  }
}
</script>

<style scoped>
.new-board {
  max-width: 180px;
}

.plus {
  font-size: 1.8em;
  margin-right: 0.6em
}

.visible {
  opacity: 1;
}

.invisible {
  pointer-events: none;
  opacity: 0;
}

.absolute {
  position: absolute;
}
</style>
