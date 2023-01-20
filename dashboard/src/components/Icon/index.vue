<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-undef -->
<script setup>
import Loading from './Loading.vue'
import Copy from './Copy.vue'


const props  = defineProps({
    name: {
        type: String,
        required: true
    }
});

const iconComponent = {
  Loading,
  Copy
}
</script>

<template>
  <div>
    <component :is="iconComponent[props.name]" v-bind="$attrs"/>
  </div>
</template>

