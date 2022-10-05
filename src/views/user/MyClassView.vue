<template>
      <div class="p-5 bg-gray-100 sm:h-screen text-black">
    <h1 class="text-3xl mb-6 font-bold">Kelas Saya</h1>
    <div class="flex flex-col items-center sm:content-center sm:flex-row gap-5 sm:flex-wrap">
        <class-card/>
        <class-card/>
        <class-card/>
        <class-card/>
        <class-card/>
        <class-card/>
        <class-card/>
    </div>
  </div>
</template>

<script setup>
import ClassCard from '../../components/Card/ClassCard.vue';

</script>

<style lang="scss" scoped>

</style>