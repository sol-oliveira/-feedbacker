import { reactive } from "vue";

export const useUserStore = () => {
  const state = reactive({
    currentUser: {},
  });

  function setCurrentUser(user) {
    state.currentUser = user;
  }

  function cleanCurrentUser() {
    state.currentUser = {};
  }

  function setApiKey(apiKey) {
    const currentUser = { ...state.currentUser, apiKey };
    state.currentUser = currentUser;
  }

  return {
    setCurrentUser,
    cleanCurrentUser,
    setApiKey,
  };
};
