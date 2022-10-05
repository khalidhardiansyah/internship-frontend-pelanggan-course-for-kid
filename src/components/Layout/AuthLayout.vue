<template>
    <div class="relative h-screen flex overflow-hidden bg-gray-200">
    <sidebar/>

    <div class="flex-1 flex flex-col w-0 overflow-hidden">
        <app-navbar/>

        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div class="py-4 px-6">
                <router-view />
            </div>
        </main>
    </div>
</div>
</template>

<script setup>
import Sidebar from '../Sidebar/Sidebar.vue';
import AppNavbar from '../Navbar/AppNavbar.vue';

</script>

<style lang="scss" scoped>

</style>