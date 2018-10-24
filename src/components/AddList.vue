<template>
  <section class="new-list">
    <v-btn
      class="absolute"
      :class="{visible: editing, invisible: !editing}"
      @click="newList"
    ><span class="plus">+</span> Add new list</v-btn>
    <v-form
      class="absolute"
      :class="{visible: !editing, invisible: editing}"
    >
      <v-text-field
        ref="text"
        v-model="title"
        :counter="16"
        placeholder="Enter list title..."
        solo
        required
      ></v-text-field>
      <div class="form-menu">
        <v-btn @click="addNewList">Add list</v-btn>
        <v-btn
          class="escape"
          @click="changeView"
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
    newList () {
      this.changeView()
      this.$nextTick(() => this.$refs.text.focus())
    },
    addNewList () {
      if (this.title) {
        this.$store.dispatch('lists/pushList', { title: this.title })
        this.changeView()
      }
    }
  }
}
</script>

<style scoped>
.new-list {
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
