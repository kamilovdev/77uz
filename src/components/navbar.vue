<script setup>
    import {
        ref
    } from "vue";
    import Modal from "@/components/modals/modal.vue";

    const isModalOpen = ref(false);


    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };
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

                <button @click="openModal" class="flex items-center bg-slate-300 px-6 m-5 p-3 rounded-xl gap-2 ">
                    <span class="max-sm:hidden">Войти</span>
                    <span class="icon-exit"></span>
                </button>

                <Modal :isOpen="isModalOpen" @close="closeModal">
                    <div class="flex flex-col gap-[64px]">
                        <div class="flex flex-col gap-7">
                            <div>
                                <h1 class="text-[24px] text-[#16191D] font-bold">Добро пожаловать!</h1>
                                <p class="text-[14px] text-[#8E9297] font-medium">
                                    Войти в систему чтобы торговать в системе
                                </p>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col gap-2">
                                    <label class="text-[14px] text-[#535456] font-medium" for="login">Логин</label>
                                    <input
                                        class="w-[300px] h-11 bg-[#F0F3F7] rounded-lg text-[14px] text-[#535456] font-normal pl-3 outline-none focus:ring-2 focus:ring-[#388FF3]"
                                        type="text" id="login" placeholder="Введите логин" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-[14px] text-[#535456] font-medium" for="password">Пароль</label>
                                    <input
                                        class="w-[300px] h-11 bg-[#F0F3F7] rounded-lg text-[14px] text-[#535456] font-normal pl-3 outline-none focus:ring-2 focus:ring-[#388FF3]"
                                        type="password" id="password" placeholder="Введите пароль" />
                                </div>
                                <router-link to="/" class="text-[12px] text-[#388FF3] font-normal hover:underline">
                                    Забыли пароль?
                                </router-link>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <button class="w-[300px] h-11 bg-[#388FF3] rounded-lg text-white font-semibold transition-all duration-300 hover:bg-[#3879f3]  ">
                                Войти
                            </button>
                            <div class="flex items-center gap-2">
                                <hr class="flex-grow border-t border-[#D5D8DB]" />
                                <p class="text-[12px] text-[#8B8B8C] font-normal whitespace-nowrap">
                                    Хотите стать продавцом?
                                </p>
                                <hr class="flex-grow border-t border-[#D5D8DB]" />
                            </div>
                            <button class="w-[300px] h-11 text-[#388FF3] bg-transparent rounded-lg font-semibold border-2 border-[#388FF3] transition-all duration-300 hover:bg-[#f0f7ff] ">
                                Подать заявку
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>