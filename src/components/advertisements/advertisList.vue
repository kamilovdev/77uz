<template>
    <div class="flex flex-col gap-5  containerMain">
        <div class="flex gap-4 max-xl:hidden">
            <router-link to="/" class="text-[14px] text-[#16191D] font-medium">Главная</router-link>
            <router-link to="Product" class="text-[14px] text-[#B8BBBD] font-medium">Рестораны и кафе</router-link>
        </div>

        <main class="flex gap-6">
            <div class="flex flex-col gap-4 bg-white w-[262px] h-fit py-[16px] px-[16px] rounded-lg max-lg:hidden ">
                <h1 class="text-[20px] font-semibold text-[#16191D]">Фильтр</h1>
                <div class="flex flex-col gap-5">
                    <div class="flex flex-col gap-[20px]">
                        <span class="flex flex-col gap-2">
                            <filtrModal />
                        </span>

                        <span class="flex flex-col gap-2">
                            <p class="text-[14px] text-[#63676C] font-medium">Район/город</p>
                            <button
                                class="border border-[#EAEDF0] w-[230px] h-11 rounded-lg text-[14px] font-normal flex justify-between items-center px-[12px]">
                                Все <i class="icon-stroke text-[10px] text-[#8E9297]"></i>
                            </button>
                        </span>
                    </div>

                    <div>
                        <h1 class="text-[14px] text-[#63676C] font-medium">Сортировать</h1>

                        <div>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input type="radio" class="w-5">
                                <p>Дешёвые сперва</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input type="radio" class="w-5">
                                <p>Дорогие сперва</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input type="radio" class="w-5">
                                <p>Новые сперва</p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h1 class="text-[14px] text-[#63676C] font-medium">Подкатегории</h1>

                        <div>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Все разделы</p>
                            </span>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D] py-[13px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Парфюмерия</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Ноутбуки и планшеты</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Лицо</p>
                            </span>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D] py-[13px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Тело и ванна</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D] py-[13px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Макияж</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D] py-[13px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Мужчинам</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Лицо</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Премиум</p>
                            </span>

                            <button
                                class="w-[230px] mt-[27px] h-11 bg-[#388FF3] rounded-lg text-white font-semibold transition-all duration-300 hover:bg-[#3879f3]  ">
                                Применить фильтр
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <article>
                <div class="w-full flex flex-col gap-3">
                    <Goback />

                    <div class="flex justify-between">
                        <p class="text-[#8E9297] text-[14px] font-medium">156 объявлений</p>

                        <span class="flex gap-3">

                            <button class="hidden max-lg:flex"  @click="openModal">
                                <img src="../../../public/productList/filtr.svg" alt="" />
                            </button>
                            <button>
                                <img src="../../../public/productList//list.png" alt="">
                            </button>
                            <button>
                                <img src="../../../public/productList//kvadrat.png" alt="">
                            </button>
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-[24px] py-9 max-xl:grid-cols-2 " v-show="!loading">
                    <Advertis v-for="item in product" :key="item.id" :item="item" />
                </div>
                <div class="grid grid-cols-4 gap-[24px] py-9 max-lg:grid-cols-3 max-[880px]:grid-cols-2 ">
                    <LoadingCard type="advertis" v-for="i in 8" :key="i" v-show="loading" />
                </div>
            </article>
         
        </main>

        <advertiseModal :isOpen="isModalOpen" @close="closeModal">
            <div>
                <h1 class="text-[20px] font-semibold text-[#16191D]">Фильтр</h1>
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col gap-[20px]">
                        <span class="flex flex-col gap-2">
                            <filtrModal />
                        </span>

                        <span class="flex flex-col gap-2">
                            <p class="text-[14px] text-[#63676C] font-medium">Район/город</p>
                            <button
                                class="border border-[#EAEDF0] w-[300px] h-11 rounded-lg text-[14px] font-normal flex justify-between items-center px-[12px]">
                                Все <i class="icon-stroke text-[10px] text-[#8E9297]"></i>
                            </button>
                        </span>
                    </div>

                    <div>
                        <h1 class="text-[14px] text-[#63676C] font-medium">Сортировать</h1>

                        <div>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[8px]">
                                <input type="radio" class="w-5">
                                <p>Дешёвые сперва</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[8px]">
                                <input type="radio" class="w-5">
                                <p>Дорогие сперва</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D]  py-[8px]">
                                <input type="radio" class="w-5">
                                <p>Новые сперва</p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h1 class="text-[14px] text-[#63676C] font-medium">Подкатегории</h1>

                        <div>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[8px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Все разделы</p>
                            </span>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D]  py-[8px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Парфюмерия</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D]  py-[8px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Ноутбуки и планшеты</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D]  py-[8px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Лицо</p>
                            </span>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D]  py-[8px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Тело и ванна</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D]  py-[8px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Макияж</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <div
                                class="flex items-center justify-between gap-2 text-[14px] font-medium text-[#16191D]  py-[8px] pr-5">
                                <span class="flex gap-[10px]">
                                    <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                    <p>Мужчинам</p>
                                </span>
                                <span class="rotate-90">
                                    <i class="icon-stroke w-[10px] text-[#8E9297]"></i>
                                </span>
                            </div>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D]  py-[8px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Лицо</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D]  py-[8px]">
                                <input class="w-[20px] rounded-md text-[#D5D8DB]" type="checkbox">
                                <p>Премиум</p>
                            </span>

                            <button
                                class="w-full mt-[27px] h-11 bg-[#388FF3] rounded-lg text-white font-semibold transition-all duration-300 hover:bg-[#3879f3]  ">
                                Применить фильтр
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </advertiseModal>
    </div>
</template>
<script setup>
    import Advertis from './advertising-props.vue';
    import LoadingCard from "../ui/loading.vue";
    import Goback from './goback.vue';
    import filtrModal from '../modals/filtr-modal.vue';
    import advertiseModal from '../modals/advertise-modal.vue';
    import {
        ref,
        onMounted
    } from 'vue'
    import {
        card
    } from '../../data/uz.js'
    const product = ref([]);
    const loading = ref(false);


    const LoadAdvertis = () => {
        loading.value = true
        setTimeout(() => {

            product.value = card.map((item) => ({
                id: item.id,
                name: item.title,
                country: item.country,
                time: item.time,
                number: item.number,
                price: item.price,
                img: item.image,
                currency: item.currency
            }))


            loading.value = false;

        }, 500)
    };
    onMounted(() => {
        LoadAdvertis();
    });
    const isModalOpen = ref(false);



const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<style scoped></style>