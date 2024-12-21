<script setup>
    import {
        ref
    } from "vue";
    import Modal from "../components/modals/modal.vue";
    import LanguageModal from "./modals/language-modal.vue";
    const isModalOpen = ref(false);



    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };

  

</script>

<template>
    <div class=" bg-slate-50  h-20 mb-5 flex justify-between">
        <div class=" containerMain flex items-center gap-6">
            <div>
               <LanguageModal/>
            </div>

            <div class="flex items-center max-md:hidden cursor-pointer">
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

        <div class=" flex items-center gap-8 max-sm:gap-3">
            <button class="flex gap-1 items-center">
                <span class="icon-blue-heart max-sm:bg-[#F0F3F7] max-sm:p-2 max-sm:rounded-lg">

                </span>
                <span class="max-md:hidden">
                    Избранные
                </span>
            </button>

            <button @click="openModal"
                class="flex items-center bg-[#F0F3F7] py-[13px]  px-[26px] rounded-xl gap-2 max-sm:p-2 max-sm:rounded-lg">
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
                        <button
                            class="w-[300px] h-11 bg-[#388FF3] rounded-lg text-white font-semibold transition-all duration-300 hover:bg-[#3879f3]  ">
                            Войти
                        </button>
                        <div class="flex items-center gap-2">
                            <hr class="flex-grow border-t border-[#D5D8DB]" />
                            <p class="text-[12px] text-[#8B8B8C] font-normal whitespace-nowrap">
                                Хотите стать продавцом?
                            </p>
                            <hr class="flex-grow border-t border-[#D5D8DB]" />
                        </div>
                        <button
                            class="w-[300px] h-11 text-[#388FF3] bg-transparent rounded-lg font-semibold border-2 border-[#388FF3] transition-all duration-300 hover:bg-[#f0f7ff] ">
                            Подать заявку
                        </button>
                    </div>
                </div>
            </Modal>


        </div>
    </div>


</template>

<style scoped>
    /* Optional styling for modal, but since we're using Tailwind CSS, 
   this is just to ensure the modal looks good. */
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
    }
</style>