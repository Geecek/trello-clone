<template>
<section class="main">
  <v-card
    class="card absolute"
    hover
    >
      <div
        class="default"
        :class="{visible: !editing, invisible: editing}"
      >
        <span class="text">
          {{title}}
        </span>

        <v-card-actions>
          <v-btn icon><v-icon flat @click="startEditing">create</v-icon></v-btn>
          <v-btn icon><v-icon flat @click="$store.dispatch('cards/deleteCard', { id })">clear</v-icon></v-btn>
        </v-card-actions>
      </div>
  </v-card>
  <form
    :class="{visible: editing, invisible: !editing}"
    v-on="{ submit: title ? updateCard : addCard}"
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
export default {
  props: {
    title: String,
    parent: String,
    id: String
  },
  data () {
    return {
      editing: false,
      newTitle: ''
    }
  },
  methods: {
    startEditing () {
      this.editing = true
      this.$nextTick(() => this.$refs.text.focus())
    },
    updateCard () {

    },
    addCard () {
      this.$store.dispatch('cards/addCard', {
        _id: this.parent,
        text: this.newTitle
      })
      this.editing = false
      this.newTitle = ''
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
