<template>
    <div class="text-9xl text-center stretch"><span class="font-black">FIT</span>ness
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

useHead({
    title: "Главная"
});
</script>

<style scoped>
.stretch:hover {
    transform: scale(1.1);
    transition: 0.5s;
    cursor: pointer;
}
</style>