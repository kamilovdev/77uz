<template>
    <div class="container flex flex-col justify-center items-center">
        <div class="flex flex-col  text-center">
            <h1 class="text-[32px] font-bold text-[#16191D]">Объявления</h1>
            <p class="font-normal text-[16px] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от
                покупателя</p>
        </div>

        <div class="grid grid-cols-4 gap-[24px] py-9 max-lg:grid-cols-3 max-[880px]:grid-cols-2 ">
            <Advertis v-for="item in product" :key="item.id" :item="item"/>
        </div>
    </div>
</template>

<script setup>
    import Advertis from '@/components/advertisements/advertising-props.vue'
    import {ref} from 'vue'
    import { card } from '@/data/uz.js'

     const product = ref([]);


    product.value = card.map((item) => ({
            id: item.id,
            name: item.title,
            country: item.country,
            time: item.time,
            number: item.number,
            price: item.price ,
            img: item.image,
            currency: item.currency
        }))
</script>

<style scoped></style>