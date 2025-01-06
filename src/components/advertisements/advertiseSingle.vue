<script setup>
  import {
    ref,
    onMounted
  } from "vue";
  import {
    useRoute
  } from "vue-router";
  import {
    card
  } from "../../data/uz.js";
  import productDel from "../modals/productDel.vue";
  import Goback from './goback.vue';

  const route = useRoute();
  const product = ref("");
  const loading = ref(false);

  onMounted(() => {
    loading.value = true;
    setTimeout(() => {
      const productId = parseInt(route.params.id);
      product.value = card.find((item) => item.id === productId);
      loading.value = false;
    }, 500);
  });
  const isModalOpen = ref(false);
  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };
</script>
<template>
  <div class="containerMain flex flex-col gap-6 max-sm:px-0">
    <span class="pl-4">
      <Goback/>
    </span>
    <div class="flex gap-4 px-3">
      <router-link to="/" class="text-[14px] text-[#16191D] font-medium">Главная</router-link>
      <router-link to="" class="text-[14px] text-[#16191D] font-medium">Электроника</router-link>
      <router-link class="text-[14px] text-[#16191D] font-medium">Фены</router-link>
      <router-link class="text-[14px] text-[#B8BBBD] font-medium">457 147</router-link>
    </div>

    <div class="flex gap-6 max-sm:flex-col">
      <div class="w-[882px] flex flex-col gap-4">
        <div class="relative bg-white w-full px-6 py-6 rounded-lg flex flex-col gap-5  max-sm:w-[375px] max-sm:px-4 max-sm:py-4">
          <!-- <img
            class="w-[834px] h-[481px] object-cover rounded-2xl"
            :src="product.image"
            alt=""
          />
          <div
            class="absolute top-0 flex justify-between w-[834px] px-6 mt-[245px]"
          >
            <span
              class="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <i
                class="icon-stroke w-[10px] rotate-180 transform inline-block text-[#63676C]"
              ></i>
            </span>
            <span
              class="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-[#63676C]"
            >
              <i class="icon-stroke w-[10px]"></i>
            </span>
          </div> -->
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img  :src="product.image" class="d-block w-full h-[481px] rounded-xl object-cover max-sm:w-[343px]" alt="...">
              
              </div>
              <div class="carousel-item">
                <img :src="product.image" class="d-block  w-full  h-[481px]  rounded-xl object-cover max-sm:w-[343px]" alt="...">
               
              </div>
              <div class="carousel-item">
                <img  :src="product.image" class="d-block  w-full  h-[481px]  rounded-xl object-cover max-sm:w-[343px]" alt="...">
               
              </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="flex gap-3">
            <div class="max-sm:hidden" v-for="(img, index) in product.images" :key="index" :src="img" alt="Kichik rasm">
              <button class="border-4 border-transparent focus:border-blue-500 rounded-xl">
                <img class="w-[110px] h-[64px] object-cover rounded-lg" :src="img" alt="" />
              </button>
            </div>
    
          </div>

          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <span class="flex gap-5">
                <p class="cursor-pointer text-[14px] font-normal text-[#8E9297]">
                  Электроника
                </p>
                <p class="cursor-pointer text-[14px] font-normal text-[#8E9297]">
                  Фены
                </p>
              </span>
              <h1 class="text-[20px] font-bold text-[#16191D] max-sm:text-[16px]">
                {{ product.title }}
              </h1>
              <span class="flex gap-2">
                <p
                  class="text-[#63676C] text-[14px] font-normal w-fit px-2 h-[26px] bg-[#EAEDF0] flex justify-center items-center rounded-[6px]  max-sm:text-[12px]">
                  {{ product.time }}
                </p>
                <p
                  class="text-[#63676C] text-[14px] font-normal w-fit px-2 h-[26px] bg-[#EAEDF0] flex justify-center items-center rounded-[6px] max-sm:text-[12px]">
                  {{ product.country }}
                </p>
              </span>
            </div>
            <div class="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <span class="flex gap-2">
                <h1 class="text-[24px] font-bold text-[#16191D] max-sm:text-[24px]">
                  {{ product.price }}
                </h1>
                <p class="text-[16px] text-[#388FF3] font-medium pt-[6px] max-sm:text-[16px]">
                  {{ product.currency }}
                </p>
              </span>
              <span>
                <button class="bg-[#388FF3] text-white py-[10px] px-[47px] rounded-lg max-sm:px-[93px] max-sm:text-[13px]">
                  <i class="fa-solid fa-phone text-white max-sm:text-[14px]"></i>
                  {{ product.number }}
                </button>
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white w-full px-6 py-6 rounded-lg flex flex-col gap-5 max-sm:w-[375px] max-sm:!gap-3">
          <h1 class="text-[24px] font-bold text-[#16191D]">Описание</h1>
          <span class="flex gap-5 flex-col text-[14px] max-sm:!gap-3">
            <p>
              Мультистайлер Dyson Airwrap Complete Long в цветe Vinca blue и
              Rose Бесплатная доставка по ТАШКЕНТУ!!! 100% оригинал С новыми
              цилиндрами для завивки и волнения в обоих направлениях, щетками
              для контроля и придания формы, а также многофункциональной
              сушилкой для разглаживания Coanda для сушки,разглаживания и
              сокрытия разлетающихся волос 3 В комплектацию входят 30-мм
              цилиндрические насадки Airwrap для завивки, 40-мм цилиндрические
              насадки Airwrap для завивки
            </p>
            <p>
              Круглая щетка для создания объема, Мягкая щетка для выпрямления,
              Жесткая щетка для выпрямление Особенности фена В комплекте Чехол
              для хранения Термостойкий коврик Щетка для очистки Для длинных до
              груди или более длинных волос. Пoдxoдит для разных типoв вoлoc.
            </p>
            <p>
              Сoздaние лoконoв и волн. Pазглаживaниe. Высушивaние вoлос. Без
              экстpeмальныx тeмперaтур. В последней версии 2022 Года появились
              новые насадки, такие как: - обновлённый цилиндр для завивки,
              предусматривающий поток воздуха в двух направлениях, то есть
              больше не нужно переставлять насадки. По вопросам пишите в
              телеграм на номер
            </p>
          </span>
        </div>

        <div class="bg-white w-full px-6 py-6 rounded-lg flex flex-col gap-5 max-sm:w-[375px] max-sm:!gap-4">
          <h1 class="text-[24px] font-bold text-[#16191D]">Продавец</h1>
          <div class="flex justify-between max-sm:flex-col max-sm:gap-4">
            <div class="flex gap-3">
              <img class="rounded-md" src="../../../public/productSingle/avtor.png" alt="" />
              <span>
                <h1 class="text-[16px] font-semibold text-[#16191D]">
                  Малика Абдурахимова
                </h1>
                <p class="text-[14px] font-normal text-[#63676C]">
                  ID: 1326547
                </p>
              </span>
            </div>
            <div class="flex gap-4 items-center max-sm:justify-between">
              <h1 class="text-[16px] font-semibold text-[#16191D] max-sm:text-[14px]">
               {{ product.number }}
              </h1>
              <button class="py-[10px] px-6 text-[14px] text-[#16191D] bg-[#EAEDF0] font-semibold rounded-lg max-sm:px-3 max-sm:text-[12px]">
                Показать телефон
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="bg-white px-4 py-4 rounded-lg max-sm:hidden">
          <button @click="openModal"
            class="px-[50px] py-[10px] bg-[#E93C47] rounded-lg text-white text-[14px] font-semibold">
            Удалить объявление
          </button>
        </div>

        <div class="bg-white rounded-lg mt-4 w-[278px] max-sm:w-[375px]">
          <div class="px-4 py-3 max-sm:py-0">
            <h1 class="text-[20px] font-bold">Местоположение</h1>
          </div>
          <hr class="max-sm:hidden" />
          <div class="flex px-4 py-3 gap-2">
            <i class="fa-solid fa-location-dot text-[#388FF3] pt-1"></i>
            <h1 class="text-[14px] font-medium">
              г.Ташкент, ул.Олмачи 1-й 
              проезд 13 дом
            </h1>
          </div>
          <div class="px-1 py-1">
            <img class="rounded-b-lg max-sm:w-[375px]" src="../../../public/productSingle/Map.png" alt="" />
          </div>
        </div>

        <div class="mt-4 flex max-sm:justify-center">
          <button
            class="px-[58px] py-[10px] bg-[#388FF314] rounded-lg text-[14px] text-[#388FF3] flex gap-2 items-center font-semibold max-sm:px-[91px]">
            Скачать в галерею
            <i class="fa-solid fa-cloud-arrow-down text-[18px]"></i>
          </button>
        </div>
      </div>
    </div>

    <productDel :isOpen="isModalOpen" @close="closeModal">
      <div class="flex flex-col justify-center items-center gap-[25px]">
        <div class="pt-11">
          <img src="../../../public//productSingle/trash.png" alt="" />
        </div>
        <div>
          <h1 class="text-center text-[18px] font-semibold text-[#16191D]">
            Удалить объявление
          </h1>
          <p class="text-[14px] font-normal text-[#8E9297] text-center">
            Вы точно хотите удалить объявление, все ваши данные о продукте будут
            потеряны
          </p>
        </div>

        <div class="flex gap-4">
          <button class="px-10 py-[11px] bg-[#EAEDF0] rounded-lg font-semibold text-[#16191D]" @click="closeModal">
            Отменить
          </button>
          <button class="px-10 py-[11px] bg-[#E93C47] rounded-lg font-semibold text-[#FFFFFF]" @click="closeModal">
            Удалить
          </button>
        </div>
      </div>
    </productDel>
  </div>
</template>

<style scoped></style>