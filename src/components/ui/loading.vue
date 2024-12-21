<script setup>
  defineProps({
    type: String
  })
</script>

<template>
  <div>
    <div v-if="type === 'category'"
      class="skeleton-loading space-x-4 flex items-center justify-between w-[350px] h-[90%] border rounded-2xl border-gray-100 p-8">
      <div class="icon-part h-full w-[318px] flex items-center justify-center">
        <div class="w-[64px] h-full bg-gray-100 animate-pulse"></div>
      </div>
      <div class="w-full h-full text-part">
        <div class="h-4 mb-2 w-[50%] bg-gray-100 animate-pulse"></div>
        <div class="w-full h-2 mb-2 bg-gray-100 animate-pulse"></div>
      </div>
    </div>


    
    <div v-if="type === 'advertis'"
     class=" flex flex-col gap-4 bg-white w-[278px] h-[470px] rounded-xl group max-sm:w-[161px] max-sm:h-fit">
  <div class="relative">
    <!-- Loading State for Image -->
    <div class="bg-[#E0E0E0] w-278px  h-[240px] rounded-t-xl max-sm:h-[130px] max-sm:w-[161px] animate-pulse"></div>

  
    <span class="absolute top-[20px] left-4 max-sm:text-[17px]">
      <div class="bg-[#E0E0E0] rounded-full w-[30px] h-[30px] animate-pulse"></div>
    </span>
  </div>

  <div class="px-[20px] py-5 flex flex-col gap-2">
  
    <div class="bg-[#EAEDF0] w-[80px] h-[26px] rounded-[6px] animate-pulse"></div>

    <span class="flex flex-col gap-2">
   
      <div class="bg-[#E0E0E0] w-[150px] h-[22px] rounded-[6px] animate-pulse"></div>

 
      <div class="bg-[#E0E0E0] w-[100px] h-[18px] rounded-[6px] animate-pulse"></div>
    </span>


    <div class="bg-[#E0E0E0] w-[120px] h-[18px] rounded-[6px] animate-pulse"></div>

    <span class="flex gap-2 items-center">
    
      <div class="bg-[#E0E0E0] w-[80px] h-[26px] rounded-[6px] animate-pulse"></div>

      <div class="bg-[#E0E0E0] w-[40px] h-[22px] rounded-[6px] animate-pulse"></div>
    </span>
  </div>
</div>

  </div>
</template>

<style scoped></style>