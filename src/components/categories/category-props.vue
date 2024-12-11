<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  iconClass: {
    type: String,
    required: true, 
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
 <div class="flex items-center group">

  <div 
    class="w-[64px] h-[64px] bg-white shadow-xl flex absolute justify-center items-center rounded-xl border border-[#EAEDF0] group-hover:bg-[#388FF3] group-active:bg-[#388FF3] transition-all duration-500">
    <span :class="iconClass + ' text-[32px] text-[#388FF3] group-hover:text-white group-active:text-white'"></span>
  </div>

  <div 
    class="flex w-[318px] h-[85px] justify-between ml-8 items-center shadow-lg border border-[#EAEDF0] group-hover:border-[#388FF3] group-active:border-[#388FF3] rounded-xl px-3 transition-all duration-500">
    <span class="px-[44px]">
      <p class="font-semibold text-[#16191D] group-active:text-[#16191D]">{{title}}</p>
      <p class="font-normal text-[#8E9297] text-[14px] group-active:text-[#8E9297]">{{subtitle}}</p>
    </span>
    <span>
      <span class="icon-stroke text-[#B8BBBD]"></span>
    </span>
  </div>
</div>



</template>
