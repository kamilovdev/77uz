<script setup>
import Category from '../components/categories/category.vue';
import Advertising from '../components/advertisements/advertising.vue'
</script>

<template>
     <Category/>
     <Advertising/>
     
     <div class="flex justify-center">
          <RouterLink to="Product" class="bg-[#EAEDF0] px-[26px] py-[11px] rounded-[100px] border-2 font-semibold">
               Загрузить больше <i class="fa-solid fa-angles-down"></i>
          </RouterLink>
     </div>


</template>

<style scoped>

</style>
