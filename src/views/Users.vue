<template>
  <h2>Users</h2>

  <h2 v-if="isLoading">Espera por favor</h2>

  <h5 v-else-if="errorMessage">{{ errorMessage }}</h5>

  <div v-else>
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{ user.first_name }} {{ user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      </li>
    </ul>
  </div>

  <div>
    <button>Back</button>
    <button>Next</button>

    <span>Page 5</span>
  </div>
</template>

<script>
import { useUsers } from "@/composables";

export default {
  name: "users-view",

  setup() {
    return { ...useUsers() };
  },
};
</script>

<style lang="css" scoped></style>
