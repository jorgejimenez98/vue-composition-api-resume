<template>
  <h1>Counter View</h1>

  <h3>{{ counter }}</h3>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "counter-view",
  props: {},
  emits: [],

  setup() {
    const counter = ref(5);

    return {
      // Data
      counter,

      // Methods
      increase: () => counter.value++,
      decrease: () => counter.value--
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
