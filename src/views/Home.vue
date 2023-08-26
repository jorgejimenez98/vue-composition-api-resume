<template>
  <h1>Reactive VS Ref</h1>

  <h3>{{ ironman }}</h3>
  <h3>{{ hulk }}</h3>

  <h3>Ironam {{ ironamIsAlive }}</h3>
  <h3>Hulk {{ hulkIsAlive }}</h3>

  <div>
    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>
    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "home-view",
  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });

    // Reactive is only for numbers and strings, is read-only
    const ironamIsAlive = reactive(false);
    const hulkIsAlive = ref(false);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
    };

    return {
      ironman,
      hulk,

      ironamIsAlive,
      hulkIsAlive,

      changeStatus,
      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 55;
      },

      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 55;
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
