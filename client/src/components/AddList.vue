<template>
  <section class="new-list">
    <v-btn
      class="absolute"
      :class="{visible: addNewList, invisible: !addNewList}"
      @click="newList"
    ><span class="plus">+</span> Add new list</v-btn>
    <v-form
      class="absolute"
      :class="{visible: !addNewList, invisible: addNewList}"
    >
      <v-text-field
        ref="text"
        v-model="listTitle"
        :counter="16"
        placeholder="Enter list title..."
        solo
        required
      ></v-text-field>
      <div class="form-menu">
        <v-btn
          @click="pushList"
        >Add list</v-btn>
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
      listTitle: '',
      addNewList: true
    }
  },
  methods: {
    changeView () {
      this.addNewList = !this.addNewList
      this.listTitle = ''
    },
    pushList () {
      if (this.listTitle) {
        this.$emit('pushList', this.listTitle)
        this.changeView()
      }
    },
    newList () {
      this.changeView()
      this.$refs.text.focus()
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
