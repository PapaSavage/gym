<template>
    <div class="flex flex-row justify-center">
        <div
            class="md:w-1/2 px-6 lg:px-12 flex flex-col title z-10 opacity-25 animate__animated animate__fadeIn tracking-widest">
            <div class="text-sm text-pale-sky-700">ФИТНЕС КЛУБ</div>
            <div><span class="font-black">FIT</span>ness</div>
            <div class="text-2xl font-thin"><span class="font-bold">work</span> with us</div>
            <div class="text-base text-pale-sky-700 tracking-normal py-6">Фитнес для нас - это комплекс
                спортивно-оздоровительных
                мероприятий, это
                то, что дарит
                человеку силу и
                красоту, здоровье и уверенность в себе!</div>
            <div class="flex flex-row gap-5 tracking-normal">
                <button class="btn__filled">Записаться</button>
                <button class="btn__outlined">Price</button>
            </div>
        </div>
        <img src="/img/kachok.png" class="opacity-5 md:opacity-100 absolute top-0 h-full md:relative md:size-1/4" alt="" />
    </div>
    <div class="mx-6 md:mx-24 lg:mx-36 xl:mx-64">
        <div class="subtitle text-center">Абонементы</div>
        <div class="flex flex-wrap justify-center gap-5">
            <div class="w-96 bg-pale-sky-100">
                <div>Абонемент "Старт"</div>
                <div>200руб/мес</div>
                <div>Неограниченное посещение зала;
                    Участие в групповых занятиях;
                    Индивидуальная программа.</div>
                <button class="btn__outlined">Купить</button>
            </div>
            <div class="w-96 bg-pale-sky-100">
                <div>Абонемент "Старт"</div>
                <div>200руб/мес</div>
                <div>Неограниченное посещение зала;
                    Участие в групповых занятиях;
                    Индивидуальная программа.</div>
                <button class="btn__outlined">Купить</button>
            </div>
            <div class="w-96 bg-pale-sky-100">
                <div>Абонемент "Старт"</div>
                <div>200руб/мес</div>
                <div>Неограниченное посещение зала;
                    Участие в групповых занятиях;
                    Индивидуальная программа.</div>
                <button class="btn__outlined">Купить</button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

useHead({
    title: "Главная",
});
</script>

<style scoped></style>
