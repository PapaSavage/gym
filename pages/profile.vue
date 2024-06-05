<template>
    <div class="animate__animated animate__fadeIn">
        <div class="text-center my-4 minititle">Личный кабинет</div>
        <div class="sm:grid grid-cols-1 lg:grid-cols-3">
            <div class="grid__card justify-between">
                <div class="text-xl">Ваш баланс:</div>
                <div class="flex flex-row justify-between w-full items-center">

                    <div class="text-2xl my-3 font-bold self-center">14000руб</div>
                    <button class="self-end btn__simple">
                        Пополнить</button>
                </div>
            </div>
            <div class="grid__card col-span-2">
                <div class="text-xl">Ваше следующее занятие</div>
                <div class="flex flex-row justify-between w-full items-center">

                    <div class="text-2xl my-3 font-bold self-center">14 сентября</div>
                    <button class="self-end btn__simple">
                        Отменить</button>
                </div>
            </div>
            <div class="grid__card col-span-full">
                <div class="text-xl">Ваше текущий абонемент</div>
                <div class="flex flex-row justify-between w-full items-center">
                    <div class="text-2xl my-3 font-bold self-center">Премиум</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: "profile",
    middleware: "auth",
})

useHead({ title: "Профиль" });

</script>