<template>
  <h1>About View</h1>

  {{ title }}

  <button @click="changeTitle">Cambiar titulo</button>
</template>

<script>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from "vue";

export default {
  name: "about-view",
  setup() {
    console.log("Setup initiated onMounted");

    const title = ref("about");

    onMounted(() => {
      console.log("onMounted");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });

    onRenderTracked(() => {
      console.log("onRenderTracked");
    });

    onRenderTriggered(() => {
      console.log("onRenderTriggered");
    });

    onActivated(() => {
      console.log("onActivated");
    });

    onDeactivated(() => {
      console.log("onDeactivated");
    });

    onServerPrefetch(() => {
      console.log("onServerPrefetch");
    });

    return {
      title,
      changeTitle: () => (title.value = "New About"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
