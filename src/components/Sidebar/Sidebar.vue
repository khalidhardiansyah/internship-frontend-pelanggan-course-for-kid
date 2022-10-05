<template>
<aside class="text-black bg-primary w-52" aria-label="Sidebar" :class="[
  getShowNav ? 'w-0 transition-all duration-500 ease-in-out delay-100 -translate-x-52':'w-25 transition-all duration-500 ease-in-out delay-100 '
]" >
   <div class="overflow-y-auto py-4 px-3">
      <div class="brand-logo flex flex-row justify-between items-center">
        <router-link to="" class="pl-2.5 font-bold text-2xl">
        {{ title }}
      </router-link>
      <font-awesome-icon icon="fa-solid fa-xmark" class="lg:hidden text-black cursor-pointer" size="2x" @click="toggleShowNavbar" />
      </div>
     <menu-items/>
   </div>
</aside>

</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const title = computed(() => store.getters.getWebTitle)
const getShowNav = computed(() => store.getters.getShowMobileNav)
function toggleShowNavbar(){
    store.dispatch('toggleNav')
}

</script>

<style lang="scss" scoped>

</style>