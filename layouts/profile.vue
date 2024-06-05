<template>
    <div class="flex h-screen unbounded-font">
        <sidebarprof></sidebarprof>

        <div class="overflow-y-auto grow ">
            <slot />

        </div>
    </div>

    <UNotifications />
</template>