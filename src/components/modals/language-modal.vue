<script setup>
import { ref, onMounted } from 'vue';

// State
const isLanguageModalOpen = ref(false);
const selectedLanguage = ref('ru');

// Lifecycle
onMounted(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const savedModalState = localStorage.getItem('isLanguageModalOpen');

    if (savedLanguage) {
        selectedLanguage.value = savedLanguage;
    }

    if (savedModalState) {
        isLanguageModalOpen.value = JSON.parse(savedModalState);
    }
});

// Methods
const toggleLanguageModal = () => {
    isLanguageModalOpen.value = !isLanguageModalOpen.value;
    localStorage.setItem('isLanguageModalOpen', JSON.stringify(isLanguageModalOpen.value));
};

const changeLanguage = (lang) => {
    selectedLanguage.value = lang;
    isLanguageModalOpen.value = false;
    localStorage.setItem('selectedLanguage', lang);
    localStorage.setItem('isLanguageModalOpen', JSON.stringify(isLanguageModalOpen.value));
};

const closeLanguages = () => {
    isLanguageModalOpen.value = false;
};
</script>

<template>
    <div class="relative">
      
        <div class="flex gap-2 items-center pl-5 cursor-pointer relative" 
            @click="toggleLanguageModal" 
            v-click-outside="closeLanguages">
            <span>
                <img :src="selectedLanguage === 'ru' ? '/navbar/Language.svg' : '/navbar/Uzbekistan.svg'"
                    class="w-5" alt="Language">
            </span>
    
            <span class="hidden sm:block">{{ selectedLanguage === 'ru' ? 'Русский' : 'O’zbekcha' }}</span>
            <span class="sm:hidden text-[12px] pt-1">{{ selectedLanguage === 'ru' ? 'РУ' : 'UZ' }}</span>
            
        
            <i class="fa-solid fa-chevron-down text-sm"></i>


            <div v-if="isLanguageModalOpen" 
                class="absolute top-full left-0 mt-2 bg-white shadow-lg w-[151px] z-50 rounded-lg overflow-hidden">
                <ul class="divide-y divide-gray-200">
                    <li class="flex items-center hover:bg-gray-100 cursor-pointer px-3 py-2"
                        @click="changeLanguage('ru')">
                        <img src="/navbar/Language.svg" alt="Русский" class="w-5 mr-2">
                        Русский
                    </li>
                    <li class="flex items-center hover:bg-gray-100 cursor-pointer px-3 py-2"
                        @click="changeLanguage('uz')">
                        <img src="/navbar/Uzbekistan.svg" alt="O’zbekcha" class="w-5 mr-2">
                        O’zbekcha
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped></style>