import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useModal = defineStore('modal', () => {

  const isActive = ref(false);

  function open () {
    isActive.value = true
  }

  function close () {
    isActive.value = false
  }

  // function listen (fn) {
  //   console.log(fn)
  // }

  // function off (fn) {
  //   console.log(fn)
  // }

    return { open, close  }
})
