import { ref } from "vue";

const useCounter = () => {
    const counter = ref(5);

    return {
      // Data
      counter,

      // Methods
      increase: () => counter.value++,
      decrease: () => counter.value--
    };
}

export default useCounter