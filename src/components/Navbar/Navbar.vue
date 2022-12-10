<template>
  <nav class="navbar bg-white text-black">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-base-100 rounded-box w-52 border border-b space-y-4"
        >
          <li tabindex="0">
            <a class="">
              Tentang Kami
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 space-y-2 bg-white shadow-sm border border-b">
              <li
                class="text-base font-normal text-gray-900 rounded-lg hover:bg-secondary hover:text-white"
              >
                <a>Tentang Kami</a>
              </li>
              <li
                class="text-base font-normal text-gray-900 rounded-lg hover:bg-secondary hover:text-white"
              >
                <a>Contact</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="text-base font-normal text-gray-900 rounded-lg hover:bg-secondary hover:text-white"
              >Materi Belajar</a
            >
          </li>
          <li>
            <base-button design="secondary" size="sm" @click="toLogin"
              >Login</base-button
            >
          </li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost normal-case text-xl"
        >{{ title }}</router-link
      >
    </div>

    <div class="navbar-end hidden sm:flex sm:space-x-4">
      <ul class="menu menu-horizontal p-0 z-20">
        <li tabindex="0">
          <a>
            Tentang Kami
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 space-y-2 bg-white shadow-sm">
            <li
              class="text-base font-normal text-gray-900 rounded-lg no-underline hover:bg-secondary hover:text-white"
            >
              <a>Tentang Kami</a>
            </li>
            <li
              class="text-base font-normal text-gray-900 rounded-lg no-underline hover:bg-secondary hover:text-white"
            >
              <a>Contact</a>
            </li>
          </ul>
        </li>
        <li><a>Materi Belajar</a></li>
      </ul>
      <base-button design="secondary" size="sm" @click="toLogin"
        >Login</base-button
      >
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import {useStore} from "vuex"
import {computed} from "vue"
const store = useStore()
const route = useRoute();
const router = useRouter();

const title = computed(()=> store.getters.getWebTitle)

function toRegister() {
  router.push({
    name: "register",
  });
}
function toLogin() {
  router.push({
    name: "login",
  });
}
</script>

<style lang="scss" scoped></style>
