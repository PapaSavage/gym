<template>
    <div class="flex flex-row justify-center">
        <div
            class="md:w-1/2 px-6 lg:px-12 flex flex-col title z-10 opacity-25 animate__animated animate__fadeIn tracking-widest">
            <div class="text-sm text-pale-sky-700">ФИТНЕС КЛУБ</div>
            <div><span class="font-black">FIT</span>ness</div>
            <div class="text-2xl font-thin"><span class="font-bold">work</span> with us</div>
            <div class="text-base text-pale-sky-700 tracking-normal py-6">Фитнес для нас - это комплекс
                спортивно-оздоровительных
                мероприятий, это
                то, что дарит
                человеку силу и
                красоту, здоровье и уверенность в себе!</div>
            <div class="flex flex-row gap-5 tracking-normal">
                <button @click="navigateTo('/login')" class="btn__filled hover:scale-125">Записаться</button>
                <button class="btn__outlined">Price</button>
            </div>
        </div>
        <img src="/img/kachok.png" class="opacity-5 md:opacity-100 absolute top-0 h-full md:relative md:size-1/4"
            alt="" />
    </div>

    <a name="subscriptions"></a>
    <div class="mx-6 md:mx-24 lg:mx-36">

        <div class="subtitle">Абонементы</div>

        <div class="flex flex-wrap justify-center gap-5 ">
            <div class="w-80 flex flex-col justify-between bg-pale-sky-100 p-5 rounded-xl"
                v-for="desc in descriptions.results">
                <div class="text-xl font-bold text-center border-b-2 pb-3">{{ desc.name }}</div>
                <div class="my-4 text-ellipsis">{{ desc.description }}</div>
                <div>
                    <div class="pb-5"><span class="font-bold text-xl">{{ desc.price }}</span>руб/мес</div>
                    <div class="flex flex-row justify-end">
                        <button @click="navigateTo('/login')" class="btn__outlined w-full">Купить</button>

                    </div>
                </div>
            </div>

        </div>
        <a name="trainers"></a>

        <div class="subtitle text-center">Наши тренеры</div>
        <div class="flex flex-wrap justify-center gap-5 ">
            <div class="w-72 text-white bg-pale-sky-800 rounded-xl" v-for="trainer in trainers.results">
                <div class="relative w-full h-72 rounded-lg mx-auto overflow-hidden">
                    <img class="" :src="trainer.photo" alt="">
                </div>
                <div class="p-5">
                    <div class="text-xl font-bold pb-2">{{ trainer.fio }}</div>
                    <div class="flex flex-row justify-end">
                        <button
                            class="transition duration-200 hover:scale-125 underline underline-offset-4 active:text-pale-sky-300">Записаться</button>
                    </div>
                </div>
            </div>
        </div>
        <a name="classes"></a>
        <div class="subtitle text-end">Групповые занятия</div>

        <div class="flex flex-col">
            <div class="flex flex-col sm:flex-row gap-6 p-8 bg-pale-sky-200 rounded-3xl">
                <div class="">
                    <img src="/img/trainer.png" class="" alt="">
                </div>
                <div class="flex flex-col gap-5">
                    <div class="minititle">Аэробика</div>
                    <div>Главный тренер: <span class="font-bold">Иванов Иван Иванович</span></div>
                    <div class="text-ellipsis">Неограниченное посещение зала dfasdf asdfj
                        asdijgidfjsdigjoisdfgjoisdfgjsdfjg idfgjiosdfiogjsd
                        ifjgiosdfjgijd sfiojgsd fjg idjfgi osdjfigj dsi jsfgj iosdjfigj sdofgj isdfgjiosdjf'gjsd fg
                        ajd'fgja dgj[sdfgjsdogjrosjh;gdfjgsdgnsdjfgnsd fgjsdnfhgnsrgo bnsob ] gfsdfdgdg</div>
                </div>
            </div>

        </div>

        <div class="subtitle text-center text-pale-sky-700">То, что делает нас <span
                class="font-bold text-black">сильным</span>,
            есть в каждом из нас</div>


    </div>
    <!-- <img src="~/assets/img/trainer.png" alt=""> -->
</template>

<script setup lang="ts">

import { API } from '~/plugins/axios.js';

useHead({
    title: "Главная",
});

interface Description {
    subscriptionid: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    type: string;
    countclasses: number;
}

interface Trainer {
    trainerId: number;
    fio: string;
    telephone: string;
    email: string;
    photo: string;
}

interface trainer {
    results: Trainer[];
}

interface description {
    results: Description[];
}

const descriptions = ref<description>({
    results: []
});

const trainers = ref<trainer>({
    results: []
});

get_data_subs();
get_data_trainers();

function get_data_subs() {
    API.get('Subscriptions')
        .then(response => {
            descriptions.value.results = response.data;
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

function get_data_trainers() {
    API.get('Trainers')
        .then(response => {
            trainers.value.results = response.data;
            for (let i = 0; i < trainers.value.results.length; i++) {
                trainers.value.results[i].photo = '/img/trainers/' + trainers.value.results[i].trainerId + '.png'
            }
            console.log(trainers.value.results);

        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}




</script>

<style scoped></style>
