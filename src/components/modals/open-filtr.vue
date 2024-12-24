<template>
    <div>
        <!-- Include the openFiltr component -->
        <openFiltr @open-modal="openModal"/>

        <!-- Button to trigger modal -->
        <button @click="openModal" class="hidden max-lg:flex">
            <img src="../../../public/productList/filtr.svg" alt=""/>
        </button>

        <!-- Modal structure -->
        <div v-if="isModalVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
            <div class="bg-white w-[300px] p-4 rounded-lg shadow-lg">
                <button @click="closeModal" class="text-[#63676C] text-[14px] font-medium absolute top-2 right-2">
                    ×
                </button>

                <!-- Modal content: Region Selector -->
                <div class="flex flex-col gap-2">
                    <p class="text-[14px] text-[#63676C] font-medium">Район/город</p>

                    <button @click="toggleRegionMenu"
                        class="border border-[#EAEDF0] w-[230px] h-11 rounded-lg text-[14px] font-normal flex justify-between items-center px-[12px]">
                        {{ selectedRegion }} <i class="icon-stroke text-[10px] text-[#8E9297]"></i>
                    </button>

                    <div v-if="isRegionMenuVisible" class="absolute bg-white border border-[#EAEDF0] shadow-blurs w-[230px] mt-[80px] rounded-lg z-50">
                        <input 
                            v-model="customRegion" 
                            type="text" 
                            class="w-full px-4 py-3 text-[14px] text-[#16191D] border-none focus:outline-none"
                            placeholder="Введите район/город..." 
                            @blur="selectCustomRegion"
                        />
                        <ul>
                            <li v-for="region in regions" :key="region" @click="selectRegion(region)"
                                class="px-4 py-3 text-[14px] text-[#16191D] cursor-pointer font-medium">
                                {{ region }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import OpenFiltr from './OpenFiltr.vue'; // Import the child component

    export default {
        name: 'ParentComponent',
        components: {
            OpenFiltr
        },
        setup() {
            const selectedRegion = ref('Все'); 
            const regions = ref([
                'г. Ташкент',
                'Республика Каракалпакстан',
                'Андижанская область',
                'Самаркандская область',
                'Кашкадарьинская область',
                'Джизакская область',
                'Бухарская область',
                'Хорезмская область',
            ]);
            const isRegionMenuVisible = ref(false);
            const customRegion = ref(''); // To store custom region input
            const isModalVisible = ref(false); // To toggle the modal visibility

            const toggleRegionMenu = () => {
                isRegionMenuVisible.value = !isRegionMenuVisible.value;
            };

            const selectRegion = (region) => {
                selectedRegion.value = region;
                isRegionMenuVisible.value = false; 
            };

            const selectCustomRegion = () => {
                if (customRegion.value.trim()) {
                    selectedRegion.value = customRegion.value.trim();
                }
                isRegionMenuVisible.value = false;
                customRegion.value = ''; // Clear input after selection
            };

            const openModal = () => {
                isModalVisible.value = true;
            };

            const closeModal = () => {
                isModalVisible.value = false;
            };

            return {
                selectedRegion,
                regions,
                isRegionMenuVisible,
                toggleRegionMenu,
                selectRegion,
                customRegion,
                selectCustomRegion,
                isModalVisible,
                openModal,
                closeModal
            };
        }
    };
</script>
