<template>
  <div class="about">
    <h1>Host app</h1>
    <p>This number comes from a package in the monorepo:  {{ four }}</p>
    <p>Received increment event {{ incremented }} times</p>
    <counter-element :count="5" @increment="handleIncrement"></counter-element>
  </div>
</template>

<script lang="ts">
import { four } from '@myscope/packagec';
import { CounterElement } from "@myscope/components-library";
import { ref } from 'vue';

export default {
  name: 'AboutView',
  components: {
    CounterElement
  },
  setup(props, { emit }) {
    const incremented = ref(0);
    const handleIncrement = () => {
      incremented.value++;
    }
   return {
      four,
      handleIncrement,
      incremented
   }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    border: solid 2px pink;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

</style>
