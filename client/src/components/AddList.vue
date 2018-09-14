<template>
  <section class="new-list">
    <v-btn
      v-bind:class="{visible: addNewList, invisible: !addNewList}"
      @click="changeView"
    ><span class="plus">+</span> Add new list</v-btn>
    <v-form
      v-bind:class="{visible: !addNewList, invisible: addNewList}"
    >
      <v-text-field
        v-model="listTitle"
        :counter="16"
        placeholder="Enter list title..."
        solo
        required
      ></v-text-field>
      <div class="form-menu">
        <v-btn>Add list</v-btn>
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
      addNewList: false
    }
  },
  methods: {
    changeView () {
      this.addNewList = !this.addNewList
      this.listTitle = ''
    }
  }
}
</script>

<style scoped>
.new-list {
  max-width: 220px;
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
</style>
