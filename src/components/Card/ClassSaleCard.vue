<template>
<div class="card w-auto sm:w-96 bg-base-100 shadow-md cursor-pointer hover:shadow-xl">
  <figure class="p-5">
    <img :src="img" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="body px-5 pb-5">
    <div class="title">
        <h1 class="capitalize text-xl font-bold">{{ title }}</h1>
    </div>
    <div class="price mt-2">
        <p class="text-gray-600 font-semibold">Rp. {{ harga }}</p>
    </div>
    <div class="ratings mt-2">
<div class="rating flex items-center">
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary"  />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" checked/>
  <p class="ml-2 text-2xl font-medium">(100)</p>
</div>
    </div>
  </div>
</div>
</template>

<script setup>

defineProps({
  img:{
    type: String,
    required: true,
  },
  harga:{
    type: Number,
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>

</style>