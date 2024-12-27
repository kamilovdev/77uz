<script setup>
</script>

<template>
    <footer class="w-[100%] h-auto bg-white flex flex-col items-center mt-16 max-sm:p-2">
     
        <div class="mt-[-32px]">
            <img class="shadow-custom" src="../../public/navbar/logo.svg" alt="">
        </div>
        <div class="w-[669px] text-center font-normal text-[16px] mt-[31px] text-black max-sm:w-full">
            77.uz marketplace - это виртуальная платформа в Узбекистане, которая облегчает покупки и продажи, связывая
            продавцов с потенциальными клиентами.
        </div>
        <div class="flex justify-center  gap-[50px] mt-[21px] max-sm:flex-wrap max-sm:gap-[10px]">
            <div class="flex items-center gap-[5px] font-semibold text-[20px] hover:text-[rgba(56,143,243,1)] cursor-pointer max-sm:text-[14px]">
                <span><img src="../../public/footer/symbol.svg" alt=""></span>
                <p>Доска объявлений</p>
            </div>
            <router-link to="Ads">
                <div class="flex items-center gap-[5px] font-semibold text-[20px] hover:text-[rgba(56,143,243,1)] cursor-pointer  max-sm:text-[14px]">
                    <span><img src="../../public/footer/symbol.svg" alt=""></span>
                    Условия пользования
                </div>
            </router-link>
            <div class="flex items-center gap-[5px] font-semibold text-[20px] hover:text-[rgba(56,143,243,1)] cursor-pointer  max-sm:text-[14px] ">
                <span><img src="../../public/footer/symbol.svg" alt=""></span>
                +998 88 500 50 00
            </div>
        </div>
        <div class="flex gap-[24px] mt-[24px]">
            <div>
                <img class="cursor-pointer  max-sm:w-[110px]" src="../../public/footer/appStore.png">
            </div>
            <div>
                <img class="cursor-pointer  max-sm:w-[120px]" src="../../public/footer/playMarket.png">
            </div>
        </div>
        <div class="w-[470px] font-semibold text-center mt-2 mb-[13px] max-sm:w-full">
            Загрузите наше <span class="text-[rgba(56,143,243,1)]">приложение</span> и пользуйтесь с платформой <span
                class="text-[rgba(56,143,243,1)]">ещё удобнее</span>
        </div>
    </footer>
</template>

<style scoped></style>