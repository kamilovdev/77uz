<script setup>
  import {
    defineProps,
 
  } from 'vue';

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div class="flex items-center group">
    <div
      class="w-[64px] h-[64px] flex absolute bg-white justify-center items-center rounded-xl border transition-all duration-500  group-hover:bg-[#388FF3] group-active:bg-[#388FF3]">
      <span :class="[
          item.icon,
          'text-[32px] text-[#388FF3] group-hover:text-white group-active:text-white',
        ]"></span>
    </div>
    <div
  class="flex w-[318px] h-[85px] justify-between ml-8 items-center shadow-lg border rounded-xl px-3 transition-all duration-500 max-sm:w-full group-hover:border-[#388FF3] group-active:border-[#388FF3]">
  <span class="px-[44px]">
    <p class="font-semibold text-[#16191D] group-active:text-[#16191D]">
      {{ item.name }}
    </p>
    <p class="font-normal text-[#8E9297] text-[14px] group-active:text-[#8E9297]">
      {{ item.count }}
    </p>
  </span>
  <span>
    <i class="icon-stroke text-[#B8BBBD] group-hover:text-[#388FF3]"></i>
  </span>
</div>

  </div>
</template>