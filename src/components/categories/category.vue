<script setup>
import {ref} from 'vue'
    import categoryProps from './category-props.vue';

    import { data } from '@/data/uz.js'

    const category = ref([]);


    category.value = data.map((item) => ({
        id: item.id,
        name: item.title,
        icon: item.icon,
        count: item.count,
    }))
</script>

<template>
    <div class=" bg-slate-50   mb-24 ">
        <div class=" container   w-full flex flex-col justify-center items-center ">
            <div class="flex justify-center  items-center w-full">
                <div class="flex justify-center items-center pl-24  " style="transform: translateY(-35px);">
                    <span class="" style="transform: translateX(35px);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.9265 17.0396L20.3996 20.3996M19.2796 11.4396C19.2796 15.7695 15.7695 19.2796 11.4396 19.2796C7.1097 19.2796 3.59961 15.7695 3.59961 11.4396C3.59961 7.1097 7.1097 3.59961 11.4396 3.59961C15.7695 3.59961 19.2796 7.1097 19.2796 11.4396Z"
                                stroke="#D5D8DB" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </span>
                    <input type="text" name="" id="" class="p-5 pl-10 rounded-lg w-[580px]  border-2 "
                        placeholder=" Что вы ищите?">
                    <button class="bg-black text-white p-[14px] w-32 rounded-xl "
                        style="transform: translateX(-135px);">
                        Поиск
                    </button>
                </div>
            </div>

            <div class="flex flex-col  text-center">
                <h1 class="text-[32px] font-bold text-[#16191D]">Категории</h1>
                <p class="font-normal text-[16px] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от
                    покупателя</p>
            </div>

            <div class="grid grid-cols-3 gap-4 py-9 max-[880px]:grid-cols-2 ">
               <categoryProps v-for="item in category" :key="item.id" :item="item"/>
            </div>
        </div>
    </div>
</template>

<style scoped></style>