<script setup>
  defineProps({
    type: String
  })
</script>

<template>
<div>
  <div
      v-if="type === 'category'"
      class="skeleton-loading space-x-4 flex items-center justify-between w-full h-[90%] border rounded-2xl border-gray-100 p-8"
    >
      <div class="icon-part h-full w-[16%] flex items-center justify-center">
        <div class="w-full h-full bg-gray-100 animate-pulse"></div>
      </div>
      <div class="w-full h-full text-part">
        <div class="h-4 mb-2 w-[50%] bg-gray-100 animate-pulse"></div>
        <div class="w-full h-2 mb-2 bg-gray-100 animate-pulse"></div>
      </div>
    </div>

</div>
</template>

<style scoped></style>