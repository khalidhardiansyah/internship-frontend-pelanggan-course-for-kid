<template>
  <div class="p-5 bg-gray-100 min-h-screen max-h-max text-black">
    <h1 class="text-3xl mb-2 font-bold">Katalog Kelas</h1>
    <p class="text-sm text-gray-400">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolores
      ab fugit non sequi
    </p>
    <div class="flex flex-col mt-6">
      <h1 class="text-xl font-bold mb-4">Browse by Category</h1>
      <div class="category_menu w-full">
        <select
          class="select w-full max-w-xs"
          v-model="selected"
          @change="selecCategory(selected)"
        >
        <option value="all">All</option>
          <option v-for="categories in getCategories" :value="categories.id">
            {{ categories.name }}
          </option>
        </select>
      </div>
      <h1 class="text-xl font-bold my-4">List Course</h1>
      <div class="flex flex-col sm:flex-row gap-5">
        <class-sale-card
          v-if="getKelas.length && selected=='all'"
          v-for="kelas in getKelas"
          :img="kelas.thumbnail_url"
          :title="kelas.name"
          :harga="kelas.harga"
          @click="
            router.push({
              path: `checkout/${kelas.id}`,
            })
          "
        />

        <div
          class="empty rounded-md h-auto w-full px-6 py-5 bg-slate-200"
          v-if="!getKelas.length"
        >
          <div class="text text-xl font-normal">
            <span>Kelas Belum tersedia</span>
          </div>
        </div>
        
        <div v-for="item in getCategory" class="flex flex-col sm:flex-row gap-5">
          <class-sale-card
            v-for="kelas in item.kelas"
            :img="kelas.thumbnail_url"
            :title="kelas.name"
            :harga="kelas.harga"
            @click="
              router.push({
                path: `checkout/${kelas.id}`,
              })
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryItems from "../../components/Menu/CategoryItems.vue";
import ClassSaleCard from "../../components/Card/ClassSaleCard.vue";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();

const selected = ref('all');

const kelas = computed(() => {
  return store.state.kelas;
});

const getKelas = computed(() => {
  return store.getters.getKelas;
});

const categories = computed(() => store.state.categories);
const getCategories = computed(() => store.getters.getCategories);
const category = computed(() => store.state.category);
const getCategory = computed(() => store.getters.getCategory);

async function selecCategory() {
  await store.dispatch("GET_CATEGORIES_BY_ID", selected.value);
}

onMounted(() => {
  store.dispatch("GET_KELAS");
  store.dispatch("GET_CATEGORIES");
});

</script>

<style lang="scss" scoped></style>
