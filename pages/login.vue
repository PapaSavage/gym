<template>

    <UContainer class="flex flex-col justify-center items-center h-screen">
        <div class="flex-col px-6"></div>
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
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="text-center text-xl font-bold my-3 leading-9 tracking-tight">
                Войдите в свой личный аккаунт
            </h2>
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit($event, state)">

                <UFormGroup label="Электронная почта" name="email">
                    <UInput v-model="state.email" placeholder="example@domain.com" size="lg" color="pale-sky"
                        class="font-bold" :ui="{
                placeholder:
                    'placeholder-pale-sky-400 dark:placeholder-pale-sky-500',
            }" />
                </UFormGroup>
                <UFormGroup label="Пароль" name="password">
                    <UInput v-model="state.password" type="password" placeholder="" size="lg" color="pale-sky"
                        class="font-semibold" />
                </UFormGroup>
                <div class="flex flex-row">
                    <button type="submit" class="btn__filled grow">
                        Войти
                    </button>
                </div>
            </UForm>
            <div class="mt-4 flex flex-row gap-4">
                <div class="font-semibold my-auto leading-4">
                    <NuxtLink href="registration">Нет аккаунта?</NuxtLink>
                </div>
                <NuxtLink to="registration" class="btn__outlined">
                    Зарегистрироваться</NuxtLink>
            </div>
        </div>

    </UContainer>

</template>

<script setup lang="ts">

definePageMeta({
    layout: "logreg",
    middleware: "already-logged-in",
});


useHead({
    title: "Авторизация",
});

import type { FormError, FormSubmitEvent } from "#ui/types";
import { z } from "zod";


const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Must be at least 6 characters"),
});

const state = reactive({
    email: undefined,
    password: undefined,
});

const { login } = actions();

const handleSubmit = async (event: FormSubmitEvent<any>, state: any) => {
    try {
        await login(state.email, state.password);
    } catch (error) {
        console.log(error);
    }
};
</script>