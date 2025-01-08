<script setup>
  import {
    defineProps,
    ref
  } from "vue";

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });

  const opencategory = ref(null);


  const toggleCategory = (id) => {

    if (opencategory.value !== id) {
      opencategory.value = id;
    } else {
      opencategory.value = null;
    }
  };
</script>

<template>
  <div class="relative w-full">
    <router-link to="/">
      <div class="flex items-center group cursor-pointer" @click.prevent="toggleCategory(item.id)">
        <div
          class="w-[64px] h-[64px] flex absolute bg-white justify-center items-center rounded-xl border transition-all duration-500 group-hover:!bg-[#388FF3] group-active:bg-[#388FF3]">
          <span :class="[
              item.icon,
              'text-[32px] text-[#388FF3] group-hover:text-[white] group-active:text-white',
            ]"></span>
        </div>
        <div
          class="flex w-full h-[85px] justify-between ml-8 items-center shadow-lg border rounded-xl px-3 transition-all duration-500 max-sm:w-full group-hover:border-[#388FF3] group-active:border-[#388FF3]">
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
    </router-link>


    <div v-if="opencategory === item.id"
      class="absolute top-full left-0 w-full bg-white z-50 mt-2 p-4 rounded-xl shadow-lg">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(category, index) in item.category" :key="index">
          <button class="w-full flex justify-between items-center text-[14px] font-medium text-[#16191D] ">
            {{ category }}
            <i class="icon-stroke text-[8px] text-[#B8BBBD]"></i>
          </button>
        </div>
      </div>


    </div>
  </div>
</template>