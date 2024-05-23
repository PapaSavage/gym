<template>

</template>

<script setup lang="ts">

definePageMeta({
    layout: "profile",
    middleware: "auth",
})

useHead({ title: "Профиль" });

</script>