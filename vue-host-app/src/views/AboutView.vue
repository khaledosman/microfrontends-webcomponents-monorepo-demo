<template>
  <div class="about">
    <h1>This is an about page {{ four }}</h1>
    <counter-element></counter-element>
  </div>
</template>

<script lang="ts">
import { four } from '@myscope/packagec';
import { CounterElement } from "@myscope/components-library";

export default {
  name: 'AboutView',
  components: {
    CounterElement
  },
  setup() {
   return {
      four
   }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
