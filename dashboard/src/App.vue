<script setup >
import { watch } from 'vue'
import ModalFactory  from '@/components/ModalFactory';
import { useRouter, useRoute } from 'vue-router';
import services from './services';
import { setCurrentUser } from './store/user';

const router = useRouter()
const route = useRoute()


watch(() => route.path, async () => {
  if (route.meta.hasAuth) {
    const token = window.localStorage.getItem('token')
    if (!token) {
      router.push({ name: 'Home' })
      return
    }
    const { data } = await services.users.getMe()
    setCurrentUser(data)
  }
})

</script>
<template>
  <router-view/>
  <ModalFactory />
</template>



