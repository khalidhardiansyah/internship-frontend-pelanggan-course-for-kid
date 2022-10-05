<template>
<div class="dropdown dropdown-end flex text-black items-center space-x-4 cursor-pointer" tabindex="0">
    <h3 class="capitalize font-semibold">
        Hallo, {{ username }}
    </h3>
    <button>
    <ProfileIcon/>
    </button>
    <DropdownMenuItem/>
</div>
</template>

<script setup>
import ProfileIcon from '../icons/profileIcon.vue';
import DropdownMenuItem from './DropdownMenuItem.vue'
defineProps({
    username:{
        type:String,
        default:'Brily Jalu K'
    }
})
</script>

