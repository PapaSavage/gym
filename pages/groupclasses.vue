<template>
    <div
        class="flex items-center flex-col xl:flex-row md:justify-around py-8 px-4 h-screen animate__animated animate__fadeIn">
        <div class="flex flex-col justify-between">
            <div class="text-center text-2xl pb-3">Тренировки, на которые вы записаны</div>
            <table class="w-full text-sm bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr class="border-b">
                        <th class="text-left p-3 px-5">Name</th>
                        <th class="text-left p-3 px-5">Time</th>
                    </tr>
                    <tr v-for="person in peoples" :key="person.id" class="border-b hover:bg-pale-sky-100">
                        <td class="p-3 px-5">{{ person.trainer }}</td>
                        <td class="p-3 px-5">{{ person.time }}</td>
                        <td class="p-3 px-5">
                            <button type="button"
                                class="bg-black hidden sm:block hover:bg-transparent text-white font-semibold hover:text-black py-2 px-4 border border-black rounded transition duration-150 active:bg-pale-sky-200">
                                Отменить
                            </button>
                            <button type="button"
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
            <div class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                <div class="px-4">
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                        <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                        <a tabindex="0"
                            class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom
                            call with design team</a>
                        <p class="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">Discussion on UX
                            sprint and Wireframe review</p>
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                        <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">10:00 AM</p>
                        <a tabindex="0"
                            class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Orientation
                            session with new hires</a>
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                        <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                        <a tabindex="0"
                            class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom
                            call with design team</a>
                        <p class="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">Discussion on UX
                            sprint and Wireframe review</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

definePageMeta({
    layout: "profile",
    middleware: "auth",
});

useHead({ title: "Групповые занятия" });

const today = new Date();
let month = ref(today.getMonth());
let year = ref(today.getFullYear());
let selectedDay = ref(today.getDate());
let selectedMonth = ref(today.getMonth());

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

const peoples = [{
    id: 1,
    trainer: 'Lindsay Walton',
    time: '20:00 - 21:00 22.02.2022',
}, {
    id: 2,
    trainer: 'Lindsay Walton',
    time: '20:00 - 21:00 22.02.2022',
}, {
    id: 3,
    trainer: 'Lindsay Walton',
    time: '20:00 - 21:00 22.02.2022',
}, {
    id: 4,
    trainer: 'Lindsay Walton',
    time: '20:00 - 21:00 22.02.2022',
}, {
    id: 5,
    trainer: 'Lindsay Walton',
    time: '20:00 - 21:00 22.02.2022',
}, {
    id: 6,
    trainer: 'Lindsay Walton',
    time: '20:00 - 21:00 22.02.2022',
},]

</script>

<style scoped></style>
