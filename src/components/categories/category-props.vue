<script setup>
  import {
    defineProps,
    ref,
    onMounted
  } from 'vue';

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });

  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false; 
    }, 1000);
  });
</script>

<template>
  <div class="flex items-center group">
  
    <div
      class="w-[64px] h-[64px] flex absolute justify-center items-center rounded-xl border transition-all duration-500"
      :class="{
        'bg-white shadow-xl border-[#EAEDF0] group-hover:bg-[#388FF3] group-active:bg-[#388FF3]': !isLoading,
        'bg-gray-200 animate-pulse': isLoading,
      }">
      <span v-if="!isLoading" :class="[
          item.icon,
          'text-[32px] text-[#388FF3] group-hover:text-white group-active:text-white',
        ]"></span>
    </div>

    <div
      class="flex w-[318px] h-[85px] justify-between ml-8 items-center shadow-lg border rounded-xl px-3 transition-all duration-500 max-sm:w-[600px]"
      :class="{
        'border-[#EAEDF0] group-hover:border-[#388FF3] group-active:border-[#388FF3]': !isLoading,
        'border-gray-300 bg-gray-100': isLoading,
      }">

      <span class="px-[44px]">

        <p v-if="!isLoading" class="font-semibold text-[#16191D] group-active:text-[#16191D]">
          {{ item.name }}
        </p>
        <div v-else class="w-[150px] h-[20px] bg-gray-300 rounded-md animate-pulse"></div>

  
        <p v-if="!isLoading" class="font-normal text-[#8E9297] text-[14px] group-active:text-[#8E9297]">
          {{ item.count }}
        </p>
        <div v-else class="w-[100px] h-[16px] bg-gray-300 rounded-md mt-2 animate-pulse"></div>
      </span>

   
      <span>
        <i v-if="!isLoading" class="icon-stroke text-[#B8BBBD] group-hover:text-[#388FF3]"></i>
        <div v-else class="w-[20px] h-[20px] bg-gray-300 rounded-full animate-pulse"></div>
      </span>
    </div>
  </div>
</template>