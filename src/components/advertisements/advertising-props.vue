<script setup>
  import {
    defineProps,
    ref,
    onMounted
  } from 'vue';

  const props = defineProps({
    item: {
      id: Number,
      country: String,
      title: String,
      time: String,
      number: Number,
      price: Number,
      image: String,
      currency: String,
      images: String,

    },
  });

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
<RouterLink :to="/product/ +item.id">
  <div class="bg-white w-full rounded-xl group">
    <div class="relative">
      <div class="w-full">
        <img :src="item.img" alt="Item Image" class="rounded-t-xl w-full" />
      </div>

      <span class="absolute top-[20px] left-4 max-sm:text-[17px]" @click="toggleLike">
        <span v-if="!liked" class="text-white icon-black-heart text-[30px] cursor-pointer"></span>
        <span v-else class="text-[30px] icon-like-2 cursor-pointer"></span>
      </span>
    </div>

    <div class="px-[20px] py-5 flex flex-col gap-2 ">
      <span>
        <p 
          class="text-[#63676C] text-[14px] font-normal w-fit px-2 h-[26px] bg-[#EAEDF0] flex justify-center items-center rounded-[6px] max-sm:text-[10px]">
          {{ item.country }}
        </p>
      </span>
      <span class="flex flex-col gap-2">
        <h1 
          class="text-[18px] font-semibold text-[#16191D] group-hover:text-[#388FF3] h-[56px] duration-500 max-sm:text-[14px]">
          {{ item.name }}
        </h1>
        <p  class="text-[14px] font-normal text-[#8E9297] max-sm:text-[12px]">
          {{ item.time }}
        </p>
      </span>
      <span>
        <a class="text-[16px] font-semibold text-[#8E9297] max-sm:text-[12px]" :href="'tel:' + item.number">
          {{ item.number }}
        </a>
      </span>
      <span class="flex gap-2 items-center"> 
        <h1 class="text-[24px] font-bold text-[#16191D] max-sm:text-[13px]">
          {{ item.price }}
        </h1>
        <p class="text-[16px] text-[#388FF3] font-medium pt-[6px] max-sm:text-[10px]">
          {{ item.currency }}
        </p>
      </span>
    </div>
  </div>
</RouterLink>

</template>