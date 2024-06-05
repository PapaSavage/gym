<template>
    <div class="animate__animated animate__fadeIn h-screen">

        <div class="p-10 lg:flex flex-row justify-center items-center h-full gap-10">
            <div class="hidden xl:flex flex-col text-center">
                <div class="text-xl mb-5">Запишитесь на тренировку к вашему любимому тренеру.</div>
                <button type="submit" @click="openenrolModal()" class="btn__outlined">
                    Записаться
                </button>
            </div>
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
            <button type="submit" @click="openenrolModal()" class="btn__outlined w-full sm:hidden my-3 sm:my-0">
                Записаться
            </button>
        </div>
        <div v-if="enrolmodelopen"
            class="fixed z-10 inset-0 overflow-y-auto h-screen animate__animated animate__fadeIn">
            <div class="flex items-center justify-center h-screen py-20 px-4 text-center">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden " aria-hidden="true">&#8203;</span>
                <div
                    class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-96 mx-auto">
                    <div class="bg-white text-xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        Запись к тренеру
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col gap-3">
                        <select id="category"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option disabled value="">Select a category</option>
                            <option v-for="people in peoples" :key="people.id" :value="people.id">{{ people.trainer }}
                            </option>
                        </select>
                        <div class="flex flex-row gap-2 justify-between items-center">
                            <div class="">
                                <select id="category"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option v-for="(time, index) in times" :key="index">{{ time }}</option>
                                </select>
                            </div>
                            <div class="">
                                <input type="date" id="date"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex justify-end gap-3 p-3">

                        <button class="btn__simple_white" @click="enrolmodelopen = false">Закрыть</button>
                        <button class="btn__simple" @click="enrolmodelopen = false">Записаться</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "profile",
    middleware: "auth",
})

useHead({ title: "Персональные занятия" });


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

const enrolmodelopen = ref(false);


function openenrolModal() {
    enrolmodelopen.value = true;
}

function closeenrolModal() {
    enrolmodelopen.value = false;
}

const times = ref([]);

const generateTimes = () => {
    for (let hour = 9; hour <= 21; hour++) {
        times.value.push(`${hour}:00`);
    }
};

generateTimes();



</script>
