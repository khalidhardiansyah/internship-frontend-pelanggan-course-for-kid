<template>
  <ul class="menu_items flex flex-col sm:flex-row gap-3 ">
    <li v-for="(category, id) in categories" :key="id" class=" bg-primary rounded-md cursor-pointer">
      <div class="menu flex flex-row items-center gap-4 px-4 py-2 sm:px-6 ">
        <div class="avatar">
          <div class="w-7 sm:w-10 rounded-full">
            <img :src="category.path_icon" />
          </div>
        </div>
        <h3 class="text-sm sm:text-lg font-semibold">
            {{ category.label }}
        </h3>
      </div>
    </li>
  </ul>
</template>

<script setup>
import designIcon from "../../assets/category/web-design-svgrepo-com.svg";
import codingIcon from "../../assets/category/coding-svgrepo-com.svg";
import robotIcon from "../../assets/category/robot-svgrepo-com.svg";
const categories = [
  {
    label: "kelas design",
    path_icon: designIcon,
  },
  {
    label: "kelas koding",
    path_icon: codingIcon,
  },
  {
    label: "kelas robotic",
    path_icon: robotIcon,
  },
];
</script>

<style lang="scss" scoped></style>
