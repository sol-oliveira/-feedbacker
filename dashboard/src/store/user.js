import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserStore = defineStore('user',() => {

  const userInitialState = {
    currentUser: {}
  }

  let state = reactive(userInitialState)

  function setCurrentUser(value) {
    Object.assign(state.currentUser, value);
  }

  function cleanCurrentUser() {
    Object.assign(state.currentUser, {});
  }

  function setApiKey(apiKey) {
    const currentUser = { ...state.value, apiKey };
    Object.assign(state.currentUser, currentUser);
  }

  return {
    setCurrentUser,
    cleanCurrentUser,
    setApiKey,
    state
   };
});
