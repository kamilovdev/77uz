<template>
    <div class="container">
        <div class="flex flex-col  text-center">
            <h1 class="text-[32px] font-bold text-[#16191D]">Объявления</h1>
            <p class="font-normal text-[16px] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от
                покупателя</p>
        </div>

        <div class="grid grid-cols-4 gap-[24px] py-9">

            <Advertis imgSrc="../../../public/rek/kepki.png" location="г. Ташкент"
                title="Кепки Corneliani Diamond for him edition." timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="2 599 000" currency="UZS" />
            <Advertis imgSrc="../../../public/rek/onix.png" location="г. Самарканд"
                title="Chevrolet Onix 1.2 Turbo в наличии" timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="204 000 000" currency="UZS" />
            <Advertis imgSrc="../../../public/rek/kepki2.png" location="г. Ташкент" title="7Saber Trucker Cap"
                timestamp="Вчера, 19:20" phone="+998 71 200 70 07" price="280 000" currency="UZS" />
            <Advertis imgSrc="../../../public/rek/shoes.png" location="г. Ташкент"
                title="Оригинальные кроссовки Nike Air Max Plus" timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="4 820 000" currency="UZS" />

            <Advertis imgSrc="../../../public/rek/nike.png" location="г. Ташкент"
                title="Оригинальные кроссовки Nike Air Max 97" timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="4 820 000" currency="UZS" />
            <Advertis imgSrc="../../../public/rek/watch.png" location="г. Ташкент"
                title="Apple Watch Series 8 - USA Non active" timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="4 500 000" currency="UZS" />
            <Advertis imgSrc="../../../public/rek/cadilac.png" location="г. Самарканд" title="Лучший кроссовер Geely Monjaro Limited Edition"
                timestamp="Вчера, 19:20" phone="+998 71 200 70 07" price="320 000 000" currency="UZS" />
            <Advertis imgSrc="../../../public/rek/dyson.png" location="г. Ташкент"
                title="Стайлер для волос Dyson airwrap complete long" timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="500" currency="USD" />

                <Advertis imgSrc="../../../public/rek/kepki2.png" location="г. Ташкент" title="7Saber Trucker Cap"
                timestamp="Вчера, 19:20" phone="+998 71 200 70 07" price="280 000" currency="UZS" />

                <Advertis imgSrc="../../../public/rek/shoes.png" location="г. Ташкент"
                title="Оригинальные кроссовки Nike Air Max Plus" timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="4 820 000" currency="UZS" />

                <Advertis imgSrc="../../../public/rek/onix.png" location="г. Самарканд"
                title="Chevrolet Onix 1.2 Turbo в наличии" timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="204 000 000" currency="UZS" />

                <Advertis imgSrc="../../../public/rek/kepki.png" location="г. Ташкент"
                title="Кепки Corneliani Diamond for him edition." timestamp="Вчера, 19:20" phone="+998 71 200 70 07"
                price="2 599 000" currency="UZS" />
        </div>
    </div>
</template>

<script setup>
    import Advertis from '@/components/advertisements/advertising-props.vue'
</script>

<style scoped></style>