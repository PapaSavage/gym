<template>
    <div class="flex flex-row justify-center">
        <div
            class="md:w-1/2 px-6 lg:px-12 flex flex-col z-10 xl:text-9xl lg:text-8xl text-6xl unbounded-font opacity-25 animate__animated animate__fadeIn tracking-widest">
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
                <button class="text-sm uppercase text-white bg-pale-sky-800 p-4 sm:justify-between hover:bg-white hover:text-black hover:outline
                    active:bg-pale-sky-200 animate__animated hover:animate__fadeIn">Записаться</button>
                <button class="text-sm uppercase outline p-4 hover:bg-black hover:text-white transition duration-150 font-bold
                    active:bg-pale-sky-600 animate__animated hover:animate__fadeIn">Price</button>
            </div>
        </div>

        <img src="/img/kachok.png" class="opacity-5 md:opacity-100 absolute top-0 h-full md:relative md:size-1/4"
            alt="" />
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

<style scoped>
.unbounded-font {
    font-family: Unbounded;
}
</style>
