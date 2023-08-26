<template>
  <h2>USers</h2>

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
import { ref } from "vue";
import axios from "axios";

export default {
  name: "users-view",

  setup() {
    const users = ref([]);
    const isLoading = ref(true);
    const currentPage = ref(1);
    const errorMessage = ref("");

    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1;
      isLoading.value = true;
      try {
        const {
          data: { data: newUsers },
        } = await axios.get(`https://reqres.in/api/users?page=${page}`);
        users.value = newUsers;
      } catch (error) {
        errorMessage.value = "Error on get data";
      }

      isLoading.value = false;
    };

    getUsers();

    return {
      // Data
      users,
      isLoading,
      currentPage,
      errorMessage,
    };
  },
};
</script>

<style lang="css" scoped></style>
