<template>
    <div class="flex flex-col gap-5  containerMain">
        <div class="flex gap-4">
            <router-link to="/" class="text-[14px] text-[#16191D] font-medium">Главная</router-link>
            <router-link to="/" class="text-[14px] text-[#B8BBBD] font-medium">Рестораны и кафе</router-link>
        </div>

        <main class="flex gap-6">
            <div class="flex flex-col gap-4 bg-white w-[262px] h-fit py-[16px] px-[16px] rounded-lg">
                <h1 class="text-[20px] font-semibold text-[#16191D]">Фильтр</h1>
                <div class="flex flex-col gap-5">
                    <div class="flex flex-col gap-[20px]">
                        <span class="flex flex-col gap-2">
                            <p class="text-[14px] text-[#63676C] font-medium">Регион</p>
                            <button
                                class="border border-[#EAEDF0] w-[230px] h-11 rounded-lg text-[14px] font-normal flex justify-between items-center px-[12px]">
                                Самаркандская область <i class="icon-stroke text-[10px] text-[#8E9297]"></i>
                            </button>
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
                                <input type="radio">
                                <p>Дешёвые сперва</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input type="radio">
                                <p>Дорогие сперва</p>
                            </span>
                            <hr>
                            <span class="flex gap-2 text-[14px] font-medium text-[#16191D] py-[13px]">
                                <input type="radio">
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
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full">
                <span>
                    <h1 class="text-[32px] font-bold">Ноутбуки и планшеты</h1>
                </span>

                <div class="flex justify-between">
                    <p class="text-[#8E9297] text-[14px] font-medium">156 объявлений</p>

                    <span class="flex gap-3">
                        <img src="../../../public/productList//list.png" alt="">
                        <img src="../../../public/productList//kvadrat.png" alt="">
                    </span>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup></script>

<style scoped></style>