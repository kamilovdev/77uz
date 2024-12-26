<script setup>
import { RouterLink, RouterView , useRoute} from 'vue-router'
import Defoult from './layout/Defoult.vue';
import Empty from './layout/empty.vue';
  
const layouts = {
  Empty : Empty,
  Defoult : Defoult
}
const route = useRoute()
</script>

<template>
 <div>
  <component :is="layouts[route.meta.layout]">
    <RouterView />
  </component>
</div>
</template>

<style scoped>

</style>