import axios from "axios";
import { ref } from "vue";

const useUsers = () => {
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
}

export default useUsers