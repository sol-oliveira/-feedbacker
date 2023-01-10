import { reactive } from "vue";

export const useGlobalLoading = () => {
  const state = reactive({
    isLoading: false,
  });

  function setGlobalLoading(status) {
    state.isLoading = status;
  }

  return {
    setGlobalLoading,
  };
};
