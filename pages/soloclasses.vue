<template>
    <div class="flex flex-wrap justify-center gap-5 m-10">
        <div class="w-72 text-white bg-pale-sky-800 rounded-xl">
            <div class="relative w-full h-72 rounded-lg mx-auto overflow-hidden">
                <img class="" src="/img/trainer.png" alt="">

            </div>
            <div class="p-5">
                <div class="text-xl font-bold pb-2">Иванов Иван Иванович</div>
                <div class="flex flex-row justify-end">
                    <button
                        class="transition duration-200 hover:scale-125 underline underline-offset-4 active:text-pale-sky-300">Записаться</button>
                </div>
            </div>
        </div>
        <div class="w-72 text-white bg-pale-sky-800 rounded-xl">
            <div class="relative w-full h-72 rounded-lg mx-auto overflow-hidden">
                <img class="" src="/img/trainer.png" alt="">

            </div>
            <div class="p-5">
                <div class="text-xl font-bold pb-2">Иванов Иван Иванович</div>
                <div class="flex flex-row justify-end">
                    <button
                        class="transition duration-200 hover:scale-125 underline underline-offset-4 active:text-pale-sky-300">Записаться</button>
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

useHead({ title: "Персональные занятия" });

</script>