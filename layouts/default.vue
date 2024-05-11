<template>
    <menu class="flex flex-col md:flex-row justify-between items-center text-black pt-5 md:px-12 lg:px-20 sm:pt-6
        text-center animate__animated animate__fadeIn pb-24">
        <NuxtLink href="https://google.com" class="flex flex-row items-center">
            <img class="" src="/img/logo.png" alt="картинка" style="width: 54px; height: 54px;">
            <div class="mx-2">
                <div class="text-3xl"><span class="font-black">FIT</span>ness</div>
                <div class="text-pale-sky-500 flex-nowrap text-nowrap">Фитнес-центр</div>
            </div>
        </NuxtLink>
        <div id="" class="md:flex space-x-2 sm:space-x-8 items-center hidden md:text-md text-pale-sky-500">
            <NuxtLink class="transition hover:text-pale-sky-800 duration-200" to="/">Главная</NuxtLink>
            <NuxtLink class="transition hover:text-pale-sky-800 duration-200" to="/subscriptions">Абонементы</NuxtLink>
            <NuxtLink class="transition hover:text-pale-sky-800 duration-200" to="/trainers">Тренера</NuxtLink>
            <NuxtLink class="transition hover:text-pale-sky-800 duration-200" to="/classes">Групповые занятия</NuxtLink>
            <NuxtLink class="transition hover:text-pale-sky-800 duration-200" to="/contacts">Контакты</NuxtLink>
        </div>
        <div class="hidden lg:flex flex-col items-start">
            <div class="text-pale-sky-500 text-sm">ул. Пушкина 9</div>
            <div class="font-bold text-2xl">+79999999999</div>
        </div>
    </menu>
    <slot />
</template>

<script setup lang="ts">

import { ref } from 'vue';

</script>

<style></style>