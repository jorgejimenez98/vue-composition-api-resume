<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>

    <img
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
      width="100"
      heigth="50"
    />
    <router-link :to="{ name: 'search-pokemon' }">Regresar</router-link>
  </template>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { usePokemon } from "@/composables";

export default {
  name: "pokemon-view",
  setup() {
    const route = useRoute();
    const pokemonId = route.params?.id;

    const { pokemon, isLoading, errorMessage, searchPokemon } =
      usePokemon(pokemonId);

    watch(
      () => route.params?.id,
      () => searchPokemon(route.params?.id)
    );

    onBeforeRouteLeave(() => {
      const anwser = window.confirm("Sure out?");
      if (!anwser) return false;
    });

    return {
      pokemon,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
