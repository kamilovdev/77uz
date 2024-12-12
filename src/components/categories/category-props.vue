<script setup>
import { defineProps , ref} from 'vue';

const props = defineProps({
  item:{
    type: Object,
    required: true,
  }
});
const isRotated = ref(false);

const toggleRotate = () => {
  isRotated.value = !isRotated.value;
};
</script>

<template>
 <div class="flex items-center group" >

  <div  
    class="w-[64px] h-[64px] bg-white shadow-xl flex absolute justify-center items-center rounded-xl border border-[#EAEDF0] group-hover:bg-[#388FF3] group-active:bg-[#388FF3] transition-all duration-500">
    <span :class="item.icon + ' text-[32px] text-[#388FF3] group-hover:text-white group-active:text-white'"></span>
  </div>

  <div  @click="toggleRotate"

   
    class="flex w-[318px] h-[85px] justify-between ml-8 items-center shadow-lg border border-[#EAEDF0] group-hover:border-[#388FF3] group-active:border-[#388FF3] cursor-pointer rounded-xl px-3 transition-all duration-500">
    <span class="px-[44px]">
      <p class="font-semibold text-[#16191D] group-active:text-[#16191D]">{{item.name}}</p>
      <p class="font-normal text-[#8E9297] text-[14px] group-active:text-[#8E9297]">{{item.count}}</p>
    </span>
    <span>
      <i class="icon-stroke text-[#B8BBBD] group-hover:text-[#388FF3] " :class="{'rotate-360': isRotated, '-rotate-90': !isRotated}"></i>
    </span>
  </div>
</div>



</template>
