<script setup>

</script>

<template>
    <div class=" bg-slate-50  h-20 mb-24 flex justify-between">
        <div class=" containerMain flex items-center justify-between">
            <div class=" flex items-center gap-2">
                <div class="flex gap-2 items-center pl-5      ">
                    <span><img src="../../public/navbar/Language.svg" alt=""></span>
                    <span class="max-sm:hidden">Русский</span>
                    <span class="sm:hidden max-sm:text-[12px]">РУ</span>
                    <i class="fa-solid fa-chevron-down max-sm:text-[9px]"></i>
                </div>

                <div class="flex items-center max-md:hidden ">
                    <i class="fa-solid fa-phone text-[#B8BBBD] max-md:text-[1px]"></i>

                    +998 88 500 50 00
                </div>

            </div>
            <div>
                <router-link to="/"
                    class="absolute top-0 left-[50%] -translate-x-1/2 bg-white border border-t-0 border-gray-4 rounded-b-[20px] p-3 md:px-4 md:py-3 shadow-3xl">
                    <img class="max-md:h-12" src="../../public/navbar/logo.svg" alt="logo" />
                </router-link>
    
    
            </div>

            <div class=" flex items-center  gap-2 ">
                <button class="flex gap-1 items-center">
                    <span class="icon-blue-heart">

                    </span>
                    <span class="max-md:hidden">
                        Избранные
                    </span>
                </button>

                <button class="flex items-center bg-slate-300 px-6 m-5 p-3 rounded-xl gap-2 ">
                    <span class="max-sm:hidden">Войти</span>
                    <span class="icon-exit"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>