<script setup></script>

<template>
    <div class="bg-white flex flex-col gap-6 my-2 mt-8">
        <div class="flex justify-center">
            <RouterLink to="/"><img src="../../public/navbar/logo.svg" alt=""></RouterLink>
        </div>

        <div class="flex flex-col text-center font-normal">
            <p>77.uz marketplace - это виртуальная платформа в Узбекистане, которая облегчает  </p>
            <p>покупки и продажи, связывая продавцов с потенциальными клиентами.</p>
        </div>

        <div class="flex justify-center gap-[72px]">
            <div class="flex items-center gap-1">
                <span><img src="../../public/footer/symbol.svg" alt=""></span>
                <p class="text-[20px] font-semibold">Доска объявлений</p>
            </div>

            <div  class="flex items-center gap-1">
                <span><img src="../../public/footer/symbol.svg" alt=""></span>
                <p class="text-[20px] font-semibold">Условия пользования</p>
            </div>

            <div  class="flex items-center gap-1">
                <span><img src="../../public/footer/symbol.svg" alt=""></span>
                <p class="text-[20px] font-semibold">+998 88 500 50 00</p>
            </div>
        </div>

        <div class="flex gap-6 justify-center">
            <RouterLink to="/"><img src="../../public/footer/appStore.png" alt=""></RouterLink>
            <RouterLink to="/"><img src="../../public/footer/playMarket.png" alt=""></RouterLink>
        </div>

        <div class="flex text-center justify-center">
            <p class="font-normal">Загрузите наше <span class="text-[#388FF3] font-semibold">приложение</span> и пользуйтесь с платформой <br> <span class="text-[#388FF3] font-semibold">ещё удобнее</span> </p>
        </div>

        <div class="flex border-1 justify-between px-[128px] h-[48px] border-2 border-[#EAEDF0] items-center">
            <div class="flex gap-[6px]">
                <p>© 77.uz</p>
                <p> 2023. Все права защищены</p>
            </div>

            <div>
               
                <div>
                    <span><img src="../../public/footer/Frame.svg" alt=""></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>