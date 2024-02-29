<template>
  <div class="counter-wrapper">
    <h3>Shared Counter component </h3>
    <p>Count: {{ counter }}</p>
    <button type="button" class="button" @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Counter-Element',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  emits: ['increment'],
  setup(props, { emit }) {
    const counter = ref(props.count)
    const increment = () => {
      counter.value++
      emit('increment')
    }
    return {
      counter,
      increment
    }
}
}
</script>

<style scoped>
.counter-wrapper {
  border: solid 2px green;
  display: flex;
  flex-direction: column;
}

.button {
  /* background: pink; */
}
</style>
