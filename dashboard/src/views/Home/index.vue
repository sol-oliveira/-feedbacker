<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue';
import Contact from './Contact.vue';
import useModal from '@/hooks/useModal';

const router = useRouter()
const modal = useModal()

const handleLogin = () => {
  modal.open({
    component: 'ModalLogin'
  })
}

const handleAccountCreate = () => {
  modal.open({
    component: 'ModalCreateAccount'
  })
 }

onMounted(() => {
  const token = window.localStorage.getItem('token')
  if (token) {
    router.push({ name: 'Feedbacks' })
  }
})

</script>
<template>
  <CustomHeader
    @create-account="handleAccountCreate"
    @login="handleLogin" />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2022 </p>
  </div>
</template>
