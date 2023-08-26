<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>

  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Numero del pokemon"
      v-model="pokemonId"
      ref="{{ txtSearchId }}"
    />
  </form>

  <br />
  <span>Presione Enter para buscar</span>

  <div></div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "search-pokemon",

  setup() {
    const router = useRouter();

    const pokemonId = ref(1);
    const txtSearchId = ref();

    return {
      pokemonId,
      txtSearchId,

      onSubmit: () => {
        router.push({
          name: "pokemon-view",
          params: {
            id: pokemonId.value,
          },
        });
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
