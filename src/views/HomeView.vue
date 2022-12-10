<script setup>
import { useRoute, useRouter } from "vue-router";
import {onMounted, computed} from "vue"
import {useStore} from "vuex"
import HomeCard from "../components/Card/HomeCard.vue"
import ClassSaleCard from "../components/Card/ClassSaleCard.vue";
const store = useStore()

const kelas = computed(()=>{
    return store.state.kelas
})

const getKelas = computed(()=>{
    return store.getters.getKelas
})

onMounted(() => {
    store.dispatch("GET_KELAS")
})

const cards=[
  {no:1, title:"Mengembangkan keterampilan", deskripsi:"Anak yang belajar koding dapat meningkatkan keterampilan mereka terutama dalam melatih logika dan matematika"},
  {no:2, title:"Kreatifitas", deskripsi:"Coding akan melatih pola pikir anak untuk mencari solusi dari setiap permasalahan"},
  {no:3, title:"Berkesempatan Untuk Menjadi Pembuat Teknologi", deskripsi:"Anak-anak dapat membuat aplikasi-aplikasi yang diinginkan seperti aplikasi robotik atau game"}
]
const route = useRoute();
const router = useRouter();
function toRegister() {
  router.push({
    name: "register",
  });
}
</script>

<template>
  <nav-bar />
  <section class="h-96 bg-primary flex justify-center items-center">
    <div class="h-full w-3/4 bg-secondary">
      <div class="carousel w-full">
        <div
          id="slide1"
          class="carousel-item relative w-full flex justify-center items-center"
        >
          <div class="w-1/2 h-full flex justify-center items-center flex-col">
            <h1 class="text-3xl text-center font-bold text-black">
              Join Program Kelas <br />
              Bisa Coding Sekarang
            </h1>
            <base-button
              @click="toRegister"
              design="primary"
              size="xl"
              class="text-white rounded-2xl mt-5"
              >Daftar Sekarang</base-button
            >
          </div>
          <img src="../assets/hero/hero1.png" class="h-56" />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide1" class="btn btn-primary btn-circle">❮</a>
            <a href="#slide2" class="btn btn-primary btn-circle">❯</a>
          </div>
        </div>
        <div
          id="slide2"
          class="carousel-item relative w-full flex justify-center"
        >
          <div
            class="w-1/2 h-full bg-red-500 flex justify-center items-center flex-col"
          >
            <h1 class="">Lorem</h1>
            <base-button>Daftar Sekarang</base-button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            class="w-1/2 h-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide1" class="btn btn-primary btn-circle">❮</a>
            <a href="#slide1" class="btn btn-primary btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main class=" bg-white">
    <div class="container px-4">
      <h2 class="font-bold text-3xl text-primary mt-5 mb-8">
        Kenapa Harus Belajar Koding?
      </h2>
      <div class="wrapper flex flex-col sm:flex-row">
        <home-card v-for="card in cards" :no="card.no" :desk="card.deskripsi" :title="card.title"/>
      </div>
    </div>
  </main>

  <section class="h-screen bg-white">
    <div class="container px-4">
      <h2 class="font-bold text-3xl text-primary mt-5 mb-8">
        Rekomendasi Kelas
      </h2>
      <div class="wrapper flex flex-row space-x-10 text-black ">
        <class-sale-card v-for="kelas in getKelas" :img="kelas.thumbnail_url" :title="kelas.name" :harga="kelas.harga" />
      </div>
    </div>
  </section>

</template>
