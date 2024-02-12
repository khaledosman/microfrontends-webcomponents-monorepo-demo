<template>
  <div>
    Counter component {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Counter-Element',
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
}
}
</script>

<style scoped>

</style>
