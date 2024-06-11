<template>
    <div class="animate__animated animate__fadeIn">
        <div class="flex justify-center h-screen items-center" v-if="loading">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
        <div v-else-if="userdb.name == null">
            <div class="subtitle uppercase text-center my-5">Забронируйте абонементы</div>
            <div class="flex flex-wrap gap-5 justify-center overflow-y-auto p-5">
                <div v-for="desc in descriptions.results" :key="desc.subscriptionId"
                    class="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-4 animate__animated animate__fadeIn">
                    <h3 class="text-xl font-bold">{{ desc.name }}</h3>
                    <p class="text-xl font-bold">{{ desc.price }}руб</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 w-40 lg:w-60">{{ desc.description }}</p>
                    <button class="btn__simple"
                        @click="isOpenAddSubscriptionModal = true; selectedSubscription = desc">Забронировать</Button>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center h-screen items-center" v-else>
            <div
                class="flex flex-col w-96 rounded-xl border p-6 shadow-2xl drop-shadow-2xl animate__animated animate__fadeIn">

                <div class="pb-4 text-center text-xl">Текущий абонемент</div>
                <UDivider class="mb-5" />
                <div class="flex flex-col gap-4">
                    <div>
                        <div>Тип абонемента</div>
                        <div class="text-xl text-pale-sky-500">{{ userdb.name }}</div>
                    </div>
                    <div>
                        <div>Дата окончания абонемента</div>
                        <div class="text-xl text-pale-sky-500">{{ userdb.dateExpire }}</div>
                    </div>
                    <div>
                        <div>Описание абонемента</div>
                        <div class="text-xl text-pale-sky-500">{{ userdb.description }}</div>
                    </div>
                </div>
                <UDivider class="my-5" />
                <button class="btn__simple" @click="isOpenRemoveSubscriptionModal = true">Отменить</button>
            </div>
        </div>
    </div>
    <UModal v-model="isOpenAddSubscriptionModal"
        :ui="{ container: 'flex min-h-full items-center justify-center text-center' }">
        <UCard class="unbounded-font">
            <template #header>
                <div class="text-xl">Подтвердите действие</div>
            </template>

            <div class="text-base text-gray-600">Вы уверены что хотите забронировать этот абонемент?</div>

            <template #footer>
                <div class="flex flex-row justify-end gap-2">
                    <button class="btn__simple_white" @click="isOpenAddSubscriptionModal = false;">Отменить</button>
                    <button class="btn__simple"
                        @click="bookingSubscription(); isOpenAddSubscriptionModal = false;">Подтвердить</button>
                </div>
            </template>
        </UCard>
    </UModal>
    <UModal v-model="isOpenRemoveSubscriptionModal"
        :ui="{ container: 'flex min-h-full items-center justify-center text-center' }">
        <UCard class="unbounded-font">
            <template #header>
                <div class="text-xl">Подтвердите действие</div>
            </template>

            <div class="text-base text-gray-600">Вы уверены что хотите забронировать этот абонемент?</div>

            <template #footer>
                <div class="flex flex-row justify-end gap-2">
                    <button class="btn__simple_white" @click="isOpenRemoveSubscriptionModal = false;">Отменить</button>
                    <button class="btn__simple"
                        @click="removeSubscrption(); isOpenRemoveSubscriptionModal = false;">Подтвердить</button>
                </div>
            </template>
        </UCard>
    </UModal>
</template>

<script setup>
import { API } from '~/plugins/axios.js';
import { ref } from "vue";

definePageMeta({
    layout: "profile",
    middleware: "auth",
})

useHead({ title: "Абонементы" });

const user = useCurrentUser();
const userdb = ref({});
const toast = useToast();
const loading = ref(true);
const descriptions = ref({ results: [] });

const selectedSubscription = ref(null);
const isOpenAddSubscriptionModal = ref(false);
const isOpenRemoveSubscriptionModal = ref(false);

get_userdata();
get_data_subs();

function get_userdata() {
    API.get(`Clients/email/${user.value?.email}`)
        .then(response => {
            userdb.value = response.data;
            console.log(userdb.value);
            const dateStr = userdb.value.dateExpire;
            const date = new Date(dateStr);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            const newDateStr = `${hours + 3}:${minutes} ${day}-${month}-${year}`;
            userdb.value.dateExpire = newDateStr;
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

function get_data_subs() {
    API.get('Subscriptions')
        .then(response => {
            descriptions.value.results = response.data;
            loading.value = false;
            console.log(descriptions.value.results);
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

function removeSubscrption() {
    API.delete(`BookingSubscriptions/${userdb.value.bookingSubscriptionId}`).then(response => {
        toast.add({
            title: "Вы отменили абонемент.",
            timeout: 1000,
            callback: () => {
                get_userdata();
                get_data_subs();
            },
        });
    }).catch(error => {
        console.error(error);
    });
}

function bookingSubscription() {
    const currentDate = new Date();
    const expireDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    const expireDateISO = expireDate.toISOString();

    const data = {
        clientId: userdb.value.clientId,
        subscriptionId: selectedSubscription.value.subscriptionId,
        dateExpire: expireDateISO,
        countClasses: selectedSubscription.value.countClasses
    }
    API.post('BookingSubscriptions', data).then(response => {
        toast.add({
            title: "Вы забронировали абонемент.",
            timeout: 1000,
            callback: () => {
                get_userdata();
                get_data_subs();
            },
        });
    }).catch(error => {
        console.error(error);
    });
}

</script>