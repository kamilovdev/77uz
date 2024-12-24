<template>
    <div class=" flex flex-col py-3  containerMain">
        <div class="flex flex-col  text-center">
            <h1 class="text-[32px] font-bold text-[#16191D]">Объявления</h1>
            <p class="font-normal text-[16px] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от
                покупателя</p>
        </div>
        
        <div class="grid w-full grid-cols-4 gap-[24px] py-9 max-lg:grid-cols-3 max-[880px]:grid-cols-2 " v-show="!loading">
            <Advertis v-for="item in product" :key="item.id" :item="item"/>
        </div>
        <div  class="grid grid-cols-4 gap-[24px] py-9 max-lg:grid-cols-3 max-[880px]:grid-cols-2 ">
            <LoadingCard
                type="advertis"
                v-for="i in 8"
                :key="i"
                v-show="loading"    
              />
        </div>
        <div class="flex justify-center">
          <RouterLink to="Product" class="bg-[#EAEDF0] px-[26px] py-[11px] rounded-[100px] border-2 font-semibold">
               Загрузить больше <i class="fa-solid fa-angles-down"></i>
          </RouterLink>
     </div>
    </div>
</template>

<script setup>
    import Advertis from '../../components/advertisements/advertising-props.vue'
    import LoadingCard from "../ui/loading.vue"; 

    import {ref , onMounted} from 'vue'
    import { card } from '../../data/uz.js'
     const product = ref([]);
     const loading = ref(false);


     const LoadAdvertis = () => {
    loading.value = true
    setTimeout(() =>{

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
     

     loading.value = false;

 } ,500)
};
onMounted(() => {
    LoadAdvertis();
});
</script>

<style scoped></style>