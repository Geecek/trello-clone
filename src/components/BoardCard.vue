<template>
<v-card class="board" hover>
  <v-card-title>
        <h1>{{ title }}</h1>
  </v-card-title>
</v-card>
</template>

<script>
export default {
  props: {
    title: String,
    id: String
  }
}
</script>
