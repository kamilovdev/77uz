<script setup>
    import {
        ref
    } from 'vue';

    const isLanguageModalOpen = ref(false); 
    const selectedLanguage = ref('ru'); 

    
    const toggleLanguageModal = () => {
        isLanguageModalOpen.value = !isLanguageModalOpen.value;
    }


    const changeLanguage = (lang) => {
        selectedLanguage.value = lang; 
        isLanguageModalOpen.value = false; 
    }
</script>

<template>
    <div>
        <div class="flex gap-1 items-center pl-5 cursor-pointer relative" @click="toggleLanguageModal">
            <span>
                <img :src="selectedLanguage === 'ru' ? '../../../public/navbar/Language.svg' : '../../../public/navbar/Uzbekistan.svg'"
                    class="w-5" alt="Language">
            </span>

            <span class="max-sm:hidden">{{ selectedLanguage === 'ru' ? 'Русский' : 'O’zbekcha' }}</span>
            <span class="sm:hidden max-sm:text-[12px] pt-1">{{ selectedLanguage === 'ru' ? 'РУ' : 'UZ' }}</span>
            <i class="fa-solid fa-chevron-down max-sm:text-[9px]"></i>

            <div v-if="isLanguageModalOpen"
                class="absolute top-full left-0 mt-2 bg-white flex items-center justify-center ml-6  shadow-blurs w-[151px] z-50 h-[81px] rounded-lg">
                <ul>
                    <span class="flex  hover:bg-gray-100 w-[151px] justify-center">
                        <img src="../../../public/navbar/Language.svg" alt="">
                        <li @click="changeLanguage('ru')" class="cursor-pointer p-2">Русский</li>
                    </span>
                    <hr>
                    <span class="flex  hover:bg-gray-100 w-[151px] justify-center ">
                        <img class="w-5" src="../../../public/navbar/Uzbekistan.svg" alt="">
                        <li @click="changeLanguage('uz')" class="cursor-pointer p-2 ">O’zbekcha</li>
                    </span>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped></style>