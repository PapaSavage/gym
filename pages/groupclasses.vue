<template>
    <div
        class="flex items-center flex-col xl:flex-row md:justify-around py-8 px-4 h-screen animate__animated animate__fadeIn">
        <div class="flex flex-col justify-between px-4" v-if="bookingsgroups.length > 0">
            <div class="text-center text-2xl pb-3">Тренировки, на которые вы записаны</div>
            <table class="w-full text-sm bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr class="border-b">
                        <th class="text-left p-3 px-5">Трейнер</th>
                        <th class="text-left p-3 px-5">Время</th>
                    </tr>
                    <tr v-for="booking in bookingsgroups" :key="booking.bookingClassId"
                        class="border-b hover:bg-pale-sky-100">
                        <td class="p-3 px-5">{{ booking.fio }}</td>
                        <td class="p-3 px-5">{{ booking.dateStartedit }}</td>
                        <td class="p-3 px-5">
                            <button type="button"
                                @click="isOpenModalCancel = true; selectedBookingCancel = booking.bookingClassId;"
                                class="bg-black hidden sm:block hover:bg-transparent text-white font-semibold hover:text-black py-2 px-4 border border-black rounded transition duration-150 active:bg-pale-sky-200">
                                Отменить
                            </button>
                            <button type="button"
                                @click="isOpenModalCancel = true; selectedBookingCancel = booking.bookingClassId;"
                                class="bg-black text-xs  block sm:hidden hover:bg-transparent text-white font-semibold hover:text-black py-2 px-3 border border-black rounded transition duration-150 active:bg-pale-sky-200">
                                x
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="max-w-sm w-full shadow-lg my-10">
            <div class="p-4 dark:bg-gray-800 bg-white rounded-t">
                <div class="px-4 flex items-center justify-between">
                    <span tabindex="0" class="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800">
                        {{ monthName }} {{ year }}
                    </span>
                    <div class="flex items-center">
                        <button aria-label="calendar backward"
                            class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                            @click="prevMonth">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </button>
                        <button aria-label="calendar forward"
                            class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                            @click="nextMonth">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between pt-5 overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th>
                                    <div class="w-full flex justify-center">
                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">ПН
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div class="w-full flex justify-center">
                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">ВТ
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div class="w-full flex justify-center">
                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">СР
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div class="w-full flex justify-center">
                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">ЧТ
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div class="w-full flex justify-center">
                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">ПТ
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div class="w-full flex justify-center">
                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">СБ
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div class="w-full flex justify-center">
                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">ВС
                                        </p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(week, weekIndex) in weeks" :key="weekIndex">
                                <td v-for="(day, dayIndex) in week" :key="dayIndex">
                                    <a class="px-2 py-2 cursor-pointer flex w-full justify-center hover:bg-pale-sky-200 rounded-full"
                                        @click="selectDay(day)"
                                        :class="{ 'bg-pale-sky-400 text-white rounded-full': isSelected(day) }">
                                        <p class="text-base text-black dark:text-gray-100 font-medium">{{ day }}</p>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="md:py-8 py-5 md:px-12 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                <div class="px-4 flex flex-col gap-4">
                    <div class="animate__animated animate__fadeIn border-b flex flex-col gap-2 border-gray-400 border-dashed"
                        v-for="classday in classesbyday" v-if="classesbyday.length > 0">
                        <p class="text-ыь font-light leading-3 text-gray-500 dark:text-gray-300">{{
            classday.dateStartedit }}</p>
                        <a tabindex="0"
                            class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100">{{
            classday.name }}</a>
                        <p class="text-sm leading-4 text-gray-600 dark:text-gray-300">{{ classday.description }}
                        </p>
                        <p class="text-xs text-gray-700">Количество мест: <span class="font-bold text-black">{{
            classday.availableSpots
        }}</span> / {{
                classday.countPeople }}</p>
                        <button type="button" @click="isOpenModalAdd = true; selectedBookingAdd = classday.classId;"
                            class="btn__simple text-xs mb-2 self-end">
                            Записаться
                        </button>
                    </div>
                    <div class="animate__animated animate__fadeIn" v-else>На этот день не назначено тренировок</div>
                </div>
            </div>
        </div>
    </div>
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
                        @click="cancelBooking(selectedBookingCancel); isOpenModalCancel = false;">Подтвердить</button>
                </div>
            </template>
        </UCard>
    </UModal>
    <UModal v-model="isOpenModalAdd" :ui="{ container: 'flex min-h-full items-center justify-center text-center' }">
        <UCard class="unbounded-font">
            <template #header>
                <div class="text-xl">Подтвердите действие</div>
            </template>

            <div class="text-base text-gray-600">Вы уверены что хотите записаться на эту тренировку?</div>

            <template #footer>
                <div class="flex flex-row justify-end gap-2">
                    <button class="btn__simple_white" @click="isOpenModalAdd = false;">Отменить</button>
                    <button class="btn__simple"
                        @click="addBooking(selectedBookingAdd); isOpenModalAdd = false;">Подтвердить</button>
                </div>
            </template>
        </UCard>
    </UModal>
</template>

<script setup>
import { ref, computed } from "vue";
import { API } from "~/plugins/axios.js";

definePageMeta({
    layout: "profile",
    middleware: "auth",
});

useHead({ title: "Групповые занятия" });

const user = useCurrentUser();
const toast = useToast();

const date = ref(null);

const today = new Date();

const bookingsgroups = ref({});
const selectedBookingCancel = ref(null);
const selectedBookingAdd = ref(null);
const classesbyday = ref({});

const isOpenModalCancel = ref(false);
const isOpenModalAdd = ref(false);

let month = ref(today.getMonth());
let year = ref(today.getFullYear());
let selectedDay = ref(today.getDate());
let selectedMonth = ref(today.getMonth());

get_user_bookings();
selectDay(selectedDay.value);


const monthNames = ref([
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
]);

const monthName = computed(() => {
    return monthNames.value[month.value];
});

const daysInMonth = computed(() => {
    return new Date(year.value, month.value + 1, 0).getDate();
});

const firstDayOfMonth = computed(() => {
    return (new Date(year.value, month.value, 1).getDay() + 6) % 7;
});

const weeks = computed(() => {
    const weeks = [];
    let day = 1;
    let offset = firstDayOfMonth.value;
    for (let i = 0; i < 6; i++) {
        let week = [];
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < offset) {
                week.push('');
            } else if (day <= daysInMonth.value) {
                week.push(day);
                day++;
            } else {
                week.push('');
            }
        }
        weeks.push(week);
        if (day > daysInMonth.value) break;
    }
    return weeks;
});

function isToday(day) {
    return day === today.getDate() && month.value === today.getMonth() && year.value === today.getFullYear();
}

function isSelected(day) {
    return day === selectedDay.value && month.value === selectedMonth.value && year.value === today.getFullYear();
}

function selectDay(day) {
    selectedDay.value = day;
    selectedMonth.value = month.value;

    date.value = year.value + '-' + (selectedMonth.value + 1) + '-' + selectedDay.value;

    getClassesByDay(date.value);
}

function prevMonth() {
    if (month.value === 0) {
        month.value = 11;
        year.value--;
    } else {
        month.value--;
    }
}

function nextMonth() {
    if (month.value === 11) {
        month.value = 0;
        year.value++;
    } else {
        month.value++;
    }
}

function get_user_bookings() {
    API.get(`BookingClasses/email/${user.value?.email}`)
        .then(response => {
            bookingsgroups.value = response.data;
            for (let i = 0; i < bookingsgroups.value.length; i++) {
                const dateStr = bookingsgroups.value[i].dateStart;
                const date = new Date(dateStr);
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                const newDateStr = `${hours}:${minutes} - ${hours + 1}:${minutes} ${day}-${month}-${year}`;
                bookingsgroups.value[i].dateStartedit = newDateStr;
            }
            getClassesByDay(date.value);
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

function cancelBooking(BookingClassId) {
    API.delete(`BookingClasses/${BookingClassId}`)
        .then(response => {
            toast.add({
                title: "Вы отменили запись на занятие.",
                timeout: 1000,
                callback: () => {
                    get_user_bookings();
                    selectDay(selectedDay.value);
                },
            });

        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

function addBooking(classId) {
    const data = {
        email: user.value?.email,
        classId: classId
    };
    API.post('BookingClasses', data)
        .then(response => {
            toast.add({
                title: "Вы записались на занятие.",
                timeout: 1000,
                callback: () => {
                    get_user_bookings();
                    selectDay(selectedDay.value);
                },
            });
        })
        .catch(error => {
            console.error(error);
        });
}


function getClassesByDay(date) {
    API.get(`Classes/date/${date}`)
        .then(response => {
            classesbyday.value = response.data.filter(classItem => classItem.availableSpots > 0);
            for (let i = 0; i < classesbyday.value.length; i++) {
                const dateStr = classesbyday.value[i].dateStart;
                const date = new Date(dateStr);
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const newDateStr = `${hours}:${minutes}`;
                classesbyday.value[i].dateStartedit = newDateStr;
            }
            if (bookingsgroups.value) {
                const bookingsArray = Object.values(bookingsgroups.value);
                classesbyday.value = classesbyday.value.filter(classItem => {
                    return !bookingsArray.some(booking => {
                        return (classItem.dateStart == booking.dateStart);
                    });
                });
            }
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

</script>

<style scoped></style>
