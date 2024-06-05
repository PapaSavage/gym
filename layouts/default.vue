<template>
    <a name="main"></a>
    <div class="flex flex-col min-h-screen">
        <div
            class="flex justify-between items-center text-black px-10 md:mx-12 lg:mx-20 text-center animate__animated animate__fadeIn md:px-2 rounded-full sticky top-6 backdrop-blur-lg bg-white/30 z-40 py-4 mb-10">
            <!-- <button class="">
                <sidebar></sidebar>
            </button> -->
            <NuxtLink href="/" class="flex flex-row items-center">
                <img class="" src="/img/logo.png" alt="картинка" style="width: 54px; height: 54px" />
                <div class="mx-2">
                    <div class="text-3xl">
                        <span class="font-black">FIT</span>ness
                    </div>
                    <div class="text-pale-sky-500 flex-nowrap text-nowrap">
                        Фитнес-центр
                    </div>
                </div>
            </NuxtLink>
            <div id="" class="lg:flex space-x-2 sm:space-x-8 items-center hidden md:text-md text-pale-sky-600">
                <a class="transition hover:text-pale-sky-800 duration-200" href="#main">Главная</a>
                <a class="transition hover:text-pale-sky-800 duration-200" href="#subscriptions">Абонементы</a>
                <a class="transition hover:text-pale-sky-800 duration-200" href="#trainers">Тренеры</a>
                <a class="transition hover:text-pale-sky-800 duration-200 no-wrap" href="#classes">Групповые занятия</a>
                <a class="transition hover:text-pale-sky-800 duration-200" href="#contacts">Контакты</a>
            </div>
            <div class="">
                <button @click="navigateTo('/login')"
                    class="hidden sm:block uppercase ring-2 ring-black ring-inset sm:p-2.5 hover:bg-black hover:text-white transition duration-150 font-bold active:bg-pale-sky-600 animate__animated hover:animate__fadeIn">
                    личный кабинет
                </button>
                <button @click="navigateTo('/login')"
                    class="flex sm:hidden items-center uppercase ring-2 ring-black ring-inset sm:p-2.5 hover:bg-black hover:text-white transition duration-150 font-bold active:bg-pale-sky-600 animate__animated hover:animate__fadeIn">
                    <UIcon name="i-heroicons-user" class="p-2.5 sm:p-4 m-2" />
                </button>
            </div>
        </div>
        <div class="grow flex-1 w-full unbounded-font">
            <slot />
        </div>
        <div class="border-t-2 mt-5 w-full">
            <div
                class="text-lg xl:text-2xl sm:justify-between flex flex-col items-end sm:flex-row mx-6 md:mx-24 lg:mx-36 xl:mx-64 my-3 sm:my-6">
                <div class="bg-pale-sky-800 p-2 sm:p-5 flex flex-row items-center text-white">
                    <UIcon name="i-heroicons-device-phone-mobile" />
                    <NuxtLink href="tel:+79999999999" class="px-1 font-bold">
                        +79999999999
                    </NuxtLink>
                </div>
                <a href="https://yandex.ru/maps/46/kirov/house/ulitsa_pushkina_9/YEAYcgNmSUEHQFtifXlwdnpgYg==/?ll=49.446040%2C58.517636&z=16"
                    class="text-pale-sky-500 text-nowrap p-5" target="_blank">Киров, ул. Пушкина 9</a>
            </div>
            <a name="contacts"></a>
        </div>
    </div>
    <UNotifications />
</template>

<script setup lang="ts">
const route = useRoute();
import { ref } from "vue";

const loginModalOpen = ref(false);
const registrationModalOpen = ref(false);


</script>

<style scoped>
a {
    position: relative;
}

a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.5px;
    border-radius: 5px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
}

a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
}
</style>