<template>
    <div class="animate__animated animate__fadeIn">
        <div class="text-center my-4 subtitle">Личный кабинет</div>
        <div class="sm:grid grid-cols-1 lg:grid-cols-3">
            <div class="grid__card justify-between">
                <div class="text-xl">Ваш баланс:</div>
                <USkeleton class="h-8 w-32" :ui="{ background: 'bg-pale-sky-300' }" v-if="loading" />
                <div class="flex flex-row justify-between w-full mt-2" v-else>

                    <div class="text-2xl my-1 font-bold self-center">
                        <div>{{ userdb.balance }} руб</div>
                    </div>
                    <button class="btn__simple">
                        Пополнить</button>
                </div>
            </div>
            <div class="grid__card col-span-2">
                <div class="text-xl">Ваше следующее занятие</div>
                <div class="flex flex-row justify-between w-full items-center">
                    <USkeleton class="h-8 w-32" :ui="{ background: 'bg-pale-sky-300' }" v-if="loading" />
                    <div class="flex flex-row justify-between w-full items-center mt-2" v-else>
                        <div class="text-xl my-1 font-bold self-center">{{ userdb.dateStart }}</div>
                        <button class="btn__simple"
                            :class="{ 'hidden': userdb.dateStart == 'Вы не записывались на занятие' }"
                            v-if="userdb.dateStart != 'Вы не записывались на занятие'">
                            Отменить</button>
                        <button class="btn__simple" @click="navigateTo('/soloclasses')" v-else>Записаться</button>
                    </div>
                </div>
            </div>
            <div class="grid__card col-span-full">
                <div class="text-xl">Ваш текущий абонемент</div>
                <div class="flex flex-row w-full items-center mt-2">
                    <USkeleton class="h-8 w-32" :ui="{ background: 'bg-pale-sky-300' }" v-if="loading" />
                    <div class="text-xl my-1 font-bold self-center">{{ userdb.name }}</div>
                    <button class="ml-3 btn__simple" v-if="userdb.name == 'Забронируйте абонемент'"
                        @click="navigateTo('/subscriptions')">Забронировать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { API } from '~/plugins/axios.js';

definePageMeta({
    layout: "profile",
    middleware: "auth",
})

useHead({ title: "Профиль" });


const user = useCurrentUser();
const userdb = ref({});
get_user_data();

const loading = ref(true);

function get_user_data() {
    API.get(`Clients/email/${user.value?.email}`)
        .then(response => {
            userdb.value = response.data;
            loading.value = false;
            console.log(userdb.value);
            if (userdb.value.dateStart == "0001-01-01T00:00:00") {
                userdb.value.dateStart = "Вы не записывались на занятие";
            }
            if (userdb.value.name == null) {
                userdb.value.name = "Забронируйте абонемент";
            }
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });

}
console.log(user.value?.email);

</script>