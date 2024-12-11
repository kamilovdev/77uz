<script setup>
    import categoryProps from './category-props.vue';
</script>

<template>
    <div class=" bg-slate-50   mb-24 ">
        <div class=" container   w-full  ">
            <div class="flex justify-center  items-center w-full">
                <div class="flex justify-center items-center pl-24  " style="transform: translateY(-35px);">
                    <span class="" style="transform: translateX(35px);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.9265 17.0396L20.3996 20.3996M19.2796 11.4396C19.2796 15.7695 15.7695 19.2796 11.4396 19.2796C7.1097 19.2796 3.59961 15.7695 3.59961 11.4396C3.59961 7.1097 7.1097 3.59961 11.4396 3.59961C15.7695 3.59961 19.2796 7.1097 19.2796 11.4396Z"
                                stroke="#D5D8DB" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </span>
                    <input type="text" name="" id="" class="p-5 pl-10 rounded-lg w-[580px]  border-2 "
                        placeholder=" Что вы ищите?">
                    <button class="bg-black text-white p-[14px] w-32 rounded-xl "
                        style="transform: translateX(-135px);">
                        Поиск
                    </button>
                </div>
            </div>

            <div class="flex flex-col  text-center">
                <h1 class="text-[32px] font-bold text-[#16191D]">Категории</h1>
                <p class="font-normal text-[16px] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от
                    покупателя</p>
            </div>

            <div class="grid grid-cols-3 gap-4 py-9">
                <categoryProps iconClass="icon-girl" title="Для женщин" subtitle="4 147 объявлений" />
                <categoryProps iconClass="icon-img" title="Красота" subtitle="574 объявлений" />
                <categoryProps iconClass="icon-refrigerator" title="Бытовая техника" subtitle="547 объявлений" />
                <categoryProps iconClass="icon-boy" title="Для мужчин" subtitle="547 объявлений" />
                <categoryProps iconClass="icon-heart" title="Здоровье" subtitle="684 объявлений" />
                <categoryProps iconClass="icon-pc-mobile" title="Электроника" subtitle="4 147 объявлений" />
                
                <categoryProps iconClass="icon-img-2" title="Детские товары" subtitle="635 объявлений" />
                <categoryProps iconClass="icon-jewelry" title="Украшения и бижутерия" subtitle="4 147 объявлений" />
                <categoryProps iconClass="icon-grinder" title="Домашняя утварь" subtitle="4 147 объявлений" />
                <categoryProps iconClass="icon-shoes" title="Обувь" subtitle="684 объявлений" />
                <categoryProps iconClass="icon-repair" title="Канцелярия" subtitle="101 объявлений" />
                <categoryProps iconClass="icon-vacation" title="Спорт и отдых" subtitle="741 объявлений" />

                <categoryProps iconClass="icon-car-repair" title="Автотовары" subtitle="63 объявлений" />
                <categoryProps iconClass="icon-car" title="Новые легковые автомобили" subtitle="847 объявлений" />
                <categoryProps iconClass="icon-motorcycle" title="Мототранспорт" subtitle="4 147 объявлений" />
                <categoryProps iconClass="icon-plant" title="Дача, сады и огороды" subtitle="847 объявлений" />
                <categoryProps iconClass="icon-Component-14" title="Личная гигиена" subtitle="741 объявлений" />
                <categoryProps iconClass="icon-bag" title="Аксессуарлар" subtitle="574 объявлений" />

                <categoryProps iconClass="icon-shoes" title="Бытовая химия и личная гигиена" subtitle="101 объявлений" />
                <categoryProps iconClass="icon-builder" title="Строительство и ремонт" subtitle="4 147 объявлений" />
                <categoryProps iconClass="icon-bigbag" title="Сумки и чемоданы" subtitle="4 147 объявлений" />

               

            </div>
        </div>
    </div>
</template>

<style scoped></style>