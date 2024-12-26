<template>
    <div class="mt-[174px] mb-[108px]">
        <div class="flex flex-col text-center items-center gap-16 justify-center ">
            <span>
                <img src="../../../public/404/404.png" alt="">
            </span>

            <div>
                <h1 class="text-[#16191D] text-[24px] font-bold">Страница,  которую вы ищете, не найдена</h1>
                <p>Нам жаль, но, похоже, мы потеряли эту страницу, но мы не хотим терять вас.</p>
            </div>

            <router-link to="/">
                <button class="px-[34px] py-3 bg-[#388FF3] text-white rounded-lg">
                    Вернуться на главную    
                </button>
            </router-link>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>