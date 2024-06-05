<template>
    <div class="animate__animated animate__fadeIn">
        <!-- <div class="text-3xl uppercase text-center my-5">Забронируйте абонементы</div>
        <div class="flex flex-wrap gap-5 justify-center overflow-y-auto p-5">
            <div class="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-4 ">
                <h3 class="text-xl font-bold">Monthly</h3>
                <p class="text-xl font-bold">$19</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 w-40 lg:w-60">Billed monthly, cancel anytime.</p>
                <button
                    class="bg-black hover:bg-transparent text-white font-semibold hover:text-black py-2 px-4 border border-black rounded transition duration-150 active:bg-pale-sky-200">Subscribe</Button>
            </div>
            <div class="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-4 ">
                <h3 class="text-xl font-bold">Monthly</h3>
                <p class="text-xl font-bold">$19</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 w-40 lg:w-60">Billed monthly, cancel anytime.</p>
                <button
                    class="bg-black hover:bg-transparent text-white font-semibold hover:text-black py-2 px-4 border border-black rounded transition duration-150 active:bg-pale-sky-200">Subscribe</Button>
            </div>
        </div> -->
        <div class="flex flex-row justify-center h-screen items-center">
            <div class="flex flex-col w-96 rounded-xl border p-6 shadow-2xl drop-shadow-2xl">

                <div class="pb-4 text-center text-xl">Текущий абонемент</div>
                <UDivider class="mb-5" />
                <div class="flex flex-col gap-4">
                    <div>
                        <div>Тип абонемента</div>
                        <div class="text-xl text-pale-sky-500">Monthly</div>
                    </div>
                    <div>
                        <div>Дата окончания абонемента</div>
                        <div class="text-xl text-pale-sky-500">22.02.2022</div>
                    </div>
                    <div>
                        <div>Описание абонемента</div>
                        <div class="text-xl text-pale-sky-500">dest dsf dsfg sdg sdg s kdsjgkdjg ksdfg kdfgj ldf skf
                            gsdfg </div>
                    </div>
                    <button class="btn__simple">Resubscribe</Button>
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

useHead({ title: "Абонементы" });



</script>
