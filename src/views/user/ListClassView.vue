<template>
    
<div class="p-5 bg-gray-100 sm:h-screen text-black">
    <h1 class="text-3xl mb-2 font-bold">Katalog Kelas</h1>
    <p class="text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolores ab fugit non sequi</p>
    <div class="flex flex-col mt-6">
        <h1 class="text-xl font-bold mb-4">Browse by Category</h1>
        <div class="category_menu w-full">
           <CategoryItems/>
        </div>
        <h1 class="text-xl font-bold my-4">List Course</h1>
        <div class="flex flex-col sm:flex-row gap-5">
            <class-sale-card/>
        <class-sale-card/>
        <class-sale-card/>
        </div>
    </div>
  </div>
</template>

<script setup>
import CategoryItems from '../../components/Menu/CategoryItems.vue';
import ClassSaleCard from '../../components/Card/ClassSaleCard.vue';


</script>

<style lang="scss" scoped>

</style>