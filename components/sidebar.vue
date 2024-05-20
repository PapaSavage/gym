<template>
    <button @click="isOpen = true"
        class="flex sm:hidden items-center uppercase ring-2 ring-black ring-inset sm:p-2.5 hover:bg-black hover:text-white transition duration-150 font-bold active:bg-pale-sky-600 animate__animated hover:animate__fadeIn">
        <UIcon name="i-heroicons-bars-3-16-solid" class="p-2.5 sm:p-4 m-2" />
    </button>
    <button @click="isOpen = true"
        class="hidden sm:block uppercase ring-2 ring-black ring-inset sm:p-2.5 hover:bg-black hover:text-white transition duration-150 font-bold active:bg-pale-sky-600 animate__animated hover:animate__fadeIn">
        меню
    </button>
    <USlideover side="left" :ui="{
        base: 'relative flex-1 flex flex-col w-full focus:outline-none',
        width: '',
        background: 'bg-white dark:bg-pale-sky-900',
        overlay: {
            background: 'bg-pale-sky-200/75 dark:bg-pale-sky-800/75',
        },
    }" v-model="isOpen" :transition="true">
        <div @click="closeOpen" class="flex flex-col justify-between h-full m-3 mx-3">
            <UVerticalNavigation class="" :ui="{
        size: 'text-lg',
        active: 'text-pale-sky-900 dark:text-white before:bg-pale-sky-100 dark:before:bg-pale-sky-800',
    }" :links="links" />
            <button type="submit"
                class="h-9 text-white active:bg-pale-sky-900 hover:bg-pale-sky-800 bg-pale-sky-900 shadow-lg dark:shadow-neutral-700/50 text-black-700 font-semibold border-2 border-pale-sky-900 dark:border-neutral-100 hover:dark:bg-neutral-200 dark:bg-neutral-50 dark:text-black active:dark:bg-neutral-50 rounded-lg">
                Выйти
            </button>
        </div>
    </USlideover>
</template>
<script setup lang="ts">
const isOpen = ref(false);
const links = [
    {
        label: "Главная",
        icon: "i-heroicons-home",
        to: "/",
        click: closeOpen,
    },
    {
        label: "Абонементы",
        icon: "i-heroicons-chart-bar",
        to: `/subscriptions`,
        click: closeOpen,
    },
    {
        label: "Тренера",
        icon: "i-heroicons-shopping-bag-solid",
        to: "/trainers",
        click: closeOpen,
    },
    {
        label: "Групповые занятия",
        icon: "i-heroicons-clipboard-document-list",
        to: "/classes",
        click: closeOpen,
    },
];

function closeOpen() {
    isOpen.value = false;
}
</script>
