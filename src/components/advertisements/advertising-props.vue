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

  const liked = ref(false);
  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);

   
    const storedLiked = localStorage.getItem('liked');
    if (storedLiked !== null) {
      liked.value = JSON.parse(storedLiked);
    }
  });

  const toggleLike = () => {
    liked.value = !liked.value;
    localStorage.setItem('liked', JSON.stringify(liked.value));
  };
</script>

<template>
  <div class="bg-white w-[278px] h-[470px] rounded-xl group max-sm:w-[161px] max-sm:h-fit">
    <div class="relative">
     
      <span v-if="isLoading">
        <div class="w-full h-[300px] bg-gray-200 animate-pulse rounded-t-xl max-sm:h-[130px]"></div>
      </span>
      <span v-else>
        <img :src="item.img" alt="Item Image" class="rounded-t-xl max-sm:h-[130px] max-sm:w-[161px]" />
      </span>

      <span v-if="!isLoading" class="absolute top-[20px] left-4 max-sm:text-[17px]" @click="toggleLike">
        <span v-if="!liked" class="text-white icon-black-heart text-[30px] cursor-pointer"></span>
        <span v-else class="text-[30px] icon-like-2 cursor-pointer"></span>
      </span>
    </div>

    <div class="px-[20px] py-5 flex flex-col gap-2 h-full">

      <span>
        <p v-if="isLoading" class="w-[60px] h-[26px] bg-gray-200 rounded-[6px] animate-pulse"></p>
        <p v-else
          class="text-[#63676C] text-[14px] font-normal w-fit px-2 h-[26px] bg-[#EAEDF0] flex justify-center items-center rounded-[6px] max-sm:text-[10px]">
          {{ item.country }}
        </p>
      </span>

      <span class="flex flex-col gap-2">
        <h1 v-if="isLoading" class="w-[120px] h-[20px] bg-gray-200 rounded-md animate-pulse "></h1>
        <h1 v-else
          class="text-[18px] font-semibold text-[#16191D] group-hover:text-[#388FF3] h-[56px] duration-500 max-sm:text-[14px] h-">
          {{ item.name }}
        </h1>

        <p v-if="isLoading" class="w-[100px] h-[16px] bg-gray-200 rounded-md animate-pulse"></p>
        <p v-else class="text-[14px] font-normal text-[#8E9297] max-sm:text-[12px]">
          {{ item.time }}
        </p>
      </span>

     
      <span>
        <p v-if="isLoading" class="w-[120px] h-[16px] bg-gray-200 rounded-md animate-pulse"></p>
        <a v-else class="text-[16px] font-semibold text-[#8E9297] max-sm:text-[12px]" :href="'tel:' + item.number">
          {{ item.number }}
        </a>
      </span>

   
      <span class="flex gap-2 items-center">
        <h1 v-if="isLoading" class="w-[80px] h-[24px] bg-gray-200 rounded-md animate-pulse"></h1>
        <h1 v-else class="text-[24px] font-bold text-[#16191D] max-sm:text-[16px]">
          {{ item.price }}
        </h1>

        <p v-if="!isLoading" class="text-[16px] text-[#388FF3] font-medium pt-[6px] max-sm:text-[12px]">
          {{ item.currency }}
        </p>
      </span>
    </div>
  </div>
</template>