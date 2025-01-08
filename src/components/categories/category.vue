<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import categoryProps from './category-props.vue';
  import LoadingCard from "../ui/loading.vue";

  import {
    data
  } from '../../data/uz.js';

  const category = ref([]);
  const loading = ref(false);


  const LoadCategory = () => {
    loading.value = true
    setTimeout(() => {
      category.value = data.map((item) => ({
        id: item.id,
        name: item.title,
        icon: item.icon,
        count: item.count,
        category: item.category
      }));

      loading.value = false;

    }, 500)
  };

  onMounted(() => {
    LoadCategory();
  });
</script>

<template>
  <div class="  bg-white">
    <div class="flex flex-col justify-center   containerMain gap-6 max-sm:items-start max-sm:px-5 mt-28 ">

      <div
        class="flex bg-white w-[580px] mx-auto justify-center items-center px-2 rounded-lg max-sm:w-[335px] shadow-lg focus-within:!shadow-custom-focus transition-all transform -translate-y-8">
        <div class="pr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.9265 17.0396L20.3996 20.3996M19.2796 11.4396C19.2796 15.7695 15.7695 19.2796 11.4396 19.2796C7.1097 19.2796 3.59961 15.7695 3.59961 11.4396C3.59961 7.1097 7.1097 3.59961 11.4396 3.59961C15.7695 3.59961 19.2796 7.1097 19.2796 11.4396Z"
              stroke="#D5D8DB" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <input type="text" class="w-[473px] h-[66px] max-sm:w-[170px] focus:outline-none " placeholder="Что вы ищите?" />
        <button class="w-[107px] bg-black text-white rounded-md h-11">
          Поиск
        </button>
      </div>


      <div class="text-center">
        <h1 class="text-[32px] font-bold text-[#16191D]">Категории</h1>
        <p class="font-normal text-[16px] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от покупателя
        </p>
      </div>



      <div>
        <div class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5" v-show="!loading">
          <categoryProps v-for="item in category" :item="item" />
        </div>

        <div class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5" v-show="loading">
          <LoadingCard type="category" v-for="i in 9" :key="i" v-show="loading" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>