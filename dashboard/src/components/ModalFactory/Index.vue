<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import useModal from '@/hooks/useModal';
import { reactive, onMounted, onBeforeUnmount, defineAsyncComponent  } from 'vue';

const ModalLogin = defineAsyncComponent(() => import('@/components/ModalLogin'))
const ModalCreateAccount = defineAsyncComponent(() => import('@/components/ModalCreateAccount'))
const modal = useModal()

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

const modalComponent = {
   ModalLogin,
   ModalCreateAccount
}

const state = reactive({
  isActive: false,
  component: {} ,
  props: {},
  width: DEFAULT_WIDTH
})

const resetModal = () => {
  state.component = {}
  state.props = {}
  state.width = DEFAULT_WIDTH

}

const handleModalToogle = (payload) => {

  if(!payload.status) resetModal
  if (payload.status) {
    state.component = payload.component
    state.props = payload.props
    state.width = payload.width ?? DEFAULT_WIDTH
  }
  state.isActive = payload.status
}

onMounted(() => {
  modal.listen(handleModalToogle)
})

onBeforeUnmount(() => {
  modal.off(handleModalToogle)
})
</script>

<template>
  <teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToogle({ status: false })"
      >
      <div
        class="fixed mx-10"
        :class="state.width"
        >
        <div
          class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="modalComponent[state.component]"/>
          </div>
        </div>
      </div>
    </div>
    </teleport>

</template>
<style lang="scss" scoped>

</style>
