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
    <vue-final-modal
    v-model="show"
    classes="flex justify-center items-center"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
  >
    <span class="mr-8 text-2xl font-bold text-black">
      Log out dari aplikasi? 
    </span>
    <div class="flex-grow overflow-y-auto my-4">
        <error-alert :msg="err"/>
    </div>
    <div class="flex-shrink-0 flex justify-between items-center pt-4">
      <base-button @click="Logout">confirm</base-button>
      <base-button @click="toggleModal" design="outline-primary">cancel</base-button>
    </div>
  </vue-final-modal>
</div>
</template>

<script setup>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import Sidebar from '../Sidebar/Sidebar.vue';
import AppNavbar from '../Navbar/AppNavbar.vue';
import {useStore } from "vuex"
import {onMounted, computed } from 'vue';
const store = useStore();
const show = computed(()=>store.getters.getShowModal)

const err = computed(()=>store.getters.getErrMsg)



function toggleModal(){
    store.dispatch("toggleModal")
}
onMounted(()=>{
        store.dispatch("GETME")
        
})

function Logout(params) {
  try {
    store.dispatch("LOGOUT").then((res) => {
    });
  } catch (error) {
    
  }
}


</script>

<style lang="scss" scoped>

</style>