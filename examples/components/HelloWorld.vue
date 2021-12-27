<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

<script>
import { ref } from 'vue'

export default {
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    return { count }
  }
}
</script>
