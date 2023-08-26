<template>
  <h1>Counter View</h1>

  <h3>{{ counter }}</h3>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import { useCounter } from '@/composables'

export default {
  name: "counter-view",
  props: {},
  emits: [],

  setup() {
    const { counter, increase, decrease } = useCounter(25)

    return { counter, increase, decrease }
  },
};
</script>

<style lang="scss" scoped>
</style>
