<template>
    <div class="flex flex-col gap-2">
        <p class="text-[14px] text-[#63676C] font-medium">Регион</p>
        <button @click="toggleRegionMenu"
            class="border border-[#EAEDF0] w-full h-11 rounded-lg text-[14px] font-normal flex justify-between items-center px-[12px]">
            {{ selectedRegion }} <i class="icon-stroke text-[10px] text-[#8E9297]"></i>
        </button>
        <div v-if="isRegionMenu"
            class="absolute bg-white border border-[#EAEDF0] shadow-blurs w-fit mt-[80px] rounded-lg z-50">
            <ul>
                <li v-for="region in regions" :key="region" @click="selectRegion(region)"
                    class="px-4 py-3 text-[14px] text-[#16191D] cursor-pointer font-medium">
                    {{ region }}
                    
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue';

    export default {
        name: 'RegionSelector',
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
                'Самаркандская область',
       
            ]);
            const isRegionMenu = ref(false);


            const toggleRegionMenu = () => {
                isRegionMenu.value = !isRegionMenu.value;
            };

            const selectRegion = (region) => {
                selectedRegion.value = region;
                isRegionMenu.value = false; 
            };

            return {
                selectedRegion,
                regions,
                isRegionMenu,
                toggleRegionMenu,
                selectRegion
            };
        }
    };
</script>

<style scoped>
    
</style>