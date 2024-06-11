<template>
    <div class="animate__animated animate__fadeIn h-screen">
        <div class="flex justify-center h-screen items-center" v-if="loading">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
        <div class="p-10 lg:flex flex-row justify-center items-center h-full gap-10" v-else>
            <div class="hidden xl:flex flex-col text-center">
                <div class="text-xl mb-5">Запишитесь на тренировку к вашему любимому тренеру.</div>
                <button type="submit" @click="isOpenModal = true;" class="btn__outlined">
                    Записаться
                </button>
            </div>
            <div class="flex flex-col justify-between" v-if="bookingstrainers.length > 0">
                <div class="text-center text-2xl pb-3">Тренировки, на которые вы записаны</div>
                <table class="w-full text-sm bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr class="border-b">
                            <th class="text-left p-3 px-5">Name</th>
                            <th class="text-left p-3 px-5">Time</th>
                        </tr>
                        <tr v-for="booking in bookingstrainers" :key="booking.bookingTrainerId"
                            class="border-b hover:bg-pale-sky-100">
                            <td class="p-3 px-5">{{ booking.fio }}</td>
                            <td class="p-3 px-5">{{ booking.dateStartedit }}</td>
                            <td class="p-3 px-5">
                                <button type="button"
                                    @click="isOpenModalCancel = true; selectedTrainerBookingCancel = booking.bookingTrainerId;"
                                    class="bg-black hidden sm:block hover:bg-transparent text-white font-semibold hover:text-black py-2 px-4 border border-black rounded transition duration-150 active:bg-pale-sky-200">
                                    Отменить
                                </button>
                                <button type="button"
                                    @click="isOpenModalCancel = true; selectedTrainerBookingCancel = booking.bookingTrainerId;"
                                    class="bg-black text-xs  block sm:hidden hover:bg-transparent text-white font-semibold hover:text-black py-2 px-3 border border-black rounded transition duration-150 active:bg-pale-sky-200">
                                    x
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="submit" @click="isOpenModal = true;" class="btn__outlined w-full xl:hidden my-3 sm:my-0">
                Записаться
            </button>
        </div>
    </div>
    <UModal v-model="isOpenModal" :ui="{ container: 'flex min-h-full items-center justify-center text-center' }">
        <UCard class="unbounded-font">
            <template #header>
                <div class="text-xl">Запись к тренеру</div>
            </template>

            <div class="flex flex-col gap-3">
                <select id="category" v-model="selectedTrainer"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pale-sky-500 focus:border-pale-sky-500">
                    <option disabled value="">Выберите тренера</option>
                    <option v-for="trainer in trainers.results" :key="trainer.trainerId" :value="trainer.trainerId">
                        {{ trainer.fio
                        }}
                    </option>
                </select>
                <div class="flex flex-row gap-2 items-center">
                    <div class="">
                        <select id="category" v-model="selectedTime"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pale-sky-500 focus:border-pale-sky-500">
                            <option class="text-lg" v-for="(time, index) in times" :key="index">{{ time }}
                            </option>
                        </select>
                    </div>
                    <div class="">
                        <input type="date" id="date" v-model="selectedDate"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pale-sky-500 focus:border-pale-sky-500">
                    </div>
                </div>
            </div>

            <template #footer>
                <div class="w-full flex justify-end gap-3 p-3">
                    <button class="btn__simple_white" @click="isOpenModal = false">Закрыть</button>
                    <button class="btn__simple" @click="bookingtrainer(); isOpenModal = false">Подтвердить</button>
                </div>
            </template>
        </UCard>
    </UModal>
    <UModal v-model="isOpenModalCancel" :ui="{ container: 'flex min-h-full items-center justify-center text-center' }">
        <UCard class="unbounded-font">
            <template #header>
                <div class="text-xl">Подтвердите действие</div>
            </template>

            <div class="text-base text-gray-600">Вы уверены что хотите удалить отменить эту тренировку?</div>

            <template #footer>
                <div class="flex flex-row justify-end gap-2">
                    <button class="btn__simple_white" @click="isOpenModalCancel = false;">Отменить</button>
                    <button class="btn__simple"
                        @click="cancelBooking(selectedTrainerBookingCancel); isOpenModalCancel = false;">Подтвердить</button>
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

useHead({ title: "Персональные занятия" });

const isOpenModal = ref(false);
const isOpenModalCancel = ref(false);

const trainers = ref({
    results: []
});
const toast = useToast();
const user = useCurrentUser();
const bookingstrainers = ref({});
const selectedTrainerBookingCancel = ref(null);
const useremail = ref(user.value?.email)
const selectedTrainer = ref('');
const selectedTime = ref('');
const selectedDate = ref('');
const loading = ref(true);
const userdb = ref({});

get_data_trainers();
get_data_bookings_trainers();
get_userdata();


function get_userdata() {
    API.get(`Clients/email/${user.value?.email}`)
        .then(response => {
            userdb.value = response.data;
            const dateStr = userdb.value.dateExpire;
            const date = new Date(dateStr);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            const newDateStr = `${hours}:${minutes} ${day}-${month}-${year}`;
            userdb.value.dateExpire = newDateStr;
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

function get_data_bookings_trainers() {
    API.get(`BookingTrainers/email/${useremail.value}`).then(response => {
        bookingstrainers.value = response.data;
        if (bookingstrainers.value.title == "Not Found") {
            bookingstrainers.value = [];
        }
        else {
            for (let i = 0; i < bookingstrainers.value.length; i++) {
                const dateStr = bookingstrainers.value[i].dateStart;
                const date = new Date(dateStr);
                const hours = date.getHours();
                let minutes = date.getMinutes();

                minutes = minutes === 0 ? '00' : minutes < 10 ? `0${minutes}` : minutes;

                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                const newDateStr = `${hours + 3}:${minutes} - ${hours + 4}:${minutes} ${day}-${month}-${year}`;
                bookingstrainers.value[i].dateStartedit = newDateStr;
            }
        }
        loading.value = false;

    }).catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
    })
}

function get_data_trainers() {
    API.get('Trainers')
        .then(response => {
            trainers.value.results = response.data;

        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}


const times = ref([]);

const generateTimes = () => {
    for (let hour = 9; hour <= 21; hour++) {
        times.value.push(`${hour}:00`);
    }
};

function bookingtrainer() {
    var booking = {
        "clientId": userdb.value.clientId,
        "trainerId": selectedTrainer.value,
        "dateStart": new Date(selectedDate.value + " " + selectedTime.value)
    };
    console.log(booking);
    API.post('BookingTrainers', booking).then(response => {
        toast.add({
            title: "Вы забронировали занятие.",
            timeout: 1000,
            callback: () => {
                get_data_bookings_trainers();
            },
        });
    }).catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
    })
}

function cancelBooking(BookingTrainerId) {

    API.delete(`BookingTrainers/${BookingTrainerId}`)
        .then(response => {
            toast.add({
                title: "Вы отменили запись на занятие.",
                timeout: 1000,
                callback: () => {
                    get_data_bookings_trainers();
                },
            });

        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

generateTimes();



</script>
