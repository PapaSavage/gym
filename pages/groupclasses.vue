<template>
    <div class="lg:flex h-full lg:flex-col">
        <header class="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
            <h1 class="text-base font-semibold leading-6 text-gray-900">
                <time datetime="2022-01">{{ currentMonth }}</time>
            </h1>
        </header>
        <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
            <div
                class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                <div class="flex justify-center bg-white py-2">
                    <span>ПН</span>
                </div>
                <div class="flex justify-center bg-white py-2">
                    <span>ВТ</span>
                </div>
                <div class="flex justify-center bg-white py-2">
                    <span>СР</span>
                </div>
                <div class="flex justify-center bg-white py-2">
                    <span>ЧТ</span>
                </div>
                <div class="flex justify-center bg-white py-2">
                    <span>ПТ</span>
                </div>
                <div class="flex justify-center bg-white py-2">
                    <span>СБ</span>
                </div>
                <div class="flex justify-center bg-white py-2">
                    <span>ВС</span>
                </div>
            </div>
            <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                <div class="w-full grid grid-cols-7 grid-rows-6 gap-px">
                    <template v-for="day in daysInMonth" :key="day">
                        <a v-if="day" :class="[
                            'relative py-2 px-3',
                            day.getMonth() === currentDate.getMonth() ? 'bg-white' : 'bg-gray-50 text-gray-500',
                            { 'hover:bg-gray-100': day.getMonth() === currentDate.getMonth() },
                        ]">
                            <time :datetime="formatDate(day)">{{ day.getDate() }}</time>
                        </a>
                    </template>
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

const currentDate = new Date();
const monthNames = [
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
    "Декабрь"
];
const currentMonth = monthNames[currentDate.getMonth()];

const daysInMonth = ref([]);
const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
let offset = firstDayOfMonth.getDay();

if (offset === 0) {
    offset = 6;
} else {
    offset -= 1;
}

const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
let previousMonthDays = getDaysInMonth(previousMonth.getFullYear(), previousMonth.getMonth());
for (let i = offset; i > 0; i--) {
    daysInMonth.value.push(new Date(previousMonth.getFullYear(), previousMonth.getMonth(), previousMonthDays - i + 1));
}

for (let i = 1; i <= getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()); i++) {
    daysInMonth.value.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
}

const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
for (let i = 1; daysInMonth.value.length < 42; i++) {
    daysInMonth.value.push(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i));
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
</script>

<style scoped></style>