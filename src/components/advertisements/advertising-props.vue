<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item:{
    type: Object,
    required: true,
  }
});

import { ref, onMounted } from 'vue';

const liked = ref(false);

onMounted(() => {
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
   <div class="bg-white w-[278px] h-[470px] rounded-xl group ">

    <div class="relative">
      <span>
        <img :src="item.img" alt="Item Image" class="rounded-t-xl" />
      </span>

      <span v-if="!liked" class="absolute top-[20px] left-4" @click="toggleLike">
        <span class="text-white icon-black-heart text-[30px] cursor-pointer"></span>
    </span>

    <span v-else class="absolute top-[20px] left-4" @click="toggleLike">
      <span class="text-[30px] icon-like-2 cursor-pointer"></span>
    </span>
    </div>


    <div class="px-[20px] py-5 flex flex-col gap-2">
     
      <span>
        <p class="text-[#63676C] text-[14px] font-normal w-fit px-2 h-[26px] bg-[#EAEDF0] flex justify-center items-center rounded-[6px]">
          {{ item.country }}
        </p>
      </span>


      <span class=" flex flex-col gap-2">      
        <h1 class="text-[18px] font-semibold text-[#16191D] group-hover:text-[#388FF3] duration-500">{{ item.name }}</h1>
        <p class="text-[14px] font-normal text-[#8E9297]">{{ item.time }}</p>
        <a class="text-[16px] font-semibold text-[#8E9297]" :href="'tel:' + item.number">{{ item.number }}</a>
      </span>


      <span class="flex gap-2 items-center">
        <h1 class="text-[24px] font-bold text-[#16191D]">{{ item.price }}</h1>
        <p class="text-[16px] text-[#388FF3] font-medium pt-[6px]">{{ currency }}</p>
      </span>
    </div>
  </div>
  
</template>
