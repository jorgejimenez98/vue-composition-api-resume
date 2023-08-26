import { ref } from "vue";

const useCounter = (initialValue) => {
    const counter = ref(initialValue);

    return {
      // Data
      counter,

      // Methods
      increase: () => counter.value++,
      decrease: () => counter.value--
    };
}

export default useCounter