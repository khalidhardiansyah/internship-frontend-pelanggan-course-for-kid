<template>
  <div class="p-5 h-screen bg-gray-100 text-black">
    <h1 class="text-3xl mb-6 font-bold">Your orders</h1>
    <div class="flex flex-col">
      <EasyDataTable v-if="getTransaksi.length"
        class="hidden font-medium sm:text-2xl sm:block"
        :headers="headers"
        :items="getTransaksi"
      >
        <template #item-id="item">
          <div class="cursor-pointer text-blue-700 font-bold hover:underline">
            #{{ item.id.substr(0, 3) }}
          </div>
        </template>
        <template #item-status_transaksi="item">
          <div
            class="rounded-lg bg-opacity-50 bg-green-300 p-1.5 text-xs tracking-wider w-32 text-center"
            v-if="item.status_transaksi == 'SELESAI'"
          >
            <span class="text-green-700 font-medium uppercase">{{
              item.status_transaksi
            }}</span>
          </div>
          <div
            class="rounded-lg bg-opacity-50 bg-red-300 p-1.5 text-xs tracking-wider w-32 text-center"
            v-else
          >
            <span class="text-red-700 font-medium uppercase">{{
              item.status_transaksi
            }}</span>
          </div>
        </template>
        <template #item-tanggal="item">
          {{ item.tanggal.substr(0, 10) }}
        </template>

        <template #expand="item">
          <div
            class="status__done px-11 py-2"
            v-if="item.status_transaksi == 'SELESAI'"
          >
            <div class="">
              <h2 class="text-sm">
                {{ item.user.name }}
                <span class="font-bold uppercase"
                  >sudah melakukan pembayaran</span
                >
              </h2>
              <h3 class="text-sm">Bukti pembayaran :</h3>

              <img
                class="h-32"
                :src="item.bukti_transaksi_url"
                alt="bukti transfer"
                srcset=""
              />
            </div>
          </div>
          <div class="status_not_done px-11 py-4" v-else>
            <div class="wrapper mb-3" v-if="item.bukti_transaksi_url">
              <h3 class="text-sm mb-2">Bukti pembayaran :</h3>
              <img
                class="h-32"
                :src="item.bukti_transaksi_url"
                alt="bukti transfer"
                srcset=""
              />
            </div>
            <h3 class="text-sm mb-3" v-else>
              {{ item.user.name }},
              <span class="font-bold uppercase"
                >belum melakukan pembayaran</span
              >
            </h3>
            <h3
              class="text-xl mb-3 font-medium"
              v-if="item.bukti_transaksi_url"
            >
              Menunggu Konfirmasi Admin
            </h3>
            <form @submit.prevent="" v-else class="w-96">
              <h3 class="text-xl mb-4 font-medium">Konfirmasi pembayaran</h3>
              <error-alert :msg="err"/>
              <span>Silahkan upload bukti pembayaran disini</span>
              <label class="block mb-4">
                <input
                  type="file"
                  @change="imgUpload"
                  accept=".jpg,.png,.jpeg"
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-secondary hover:file:bg-primary"
                />
              </label>
              <base-button
                size="lg"
                class="text-sm"
                @click="konfirmasi(item.id)"
                >
                <div class="flex items-center gap-3">
                  <loading-spin v-if="loading"/>
                Konfrimasi
                
                </div>
                </base-button
              >
            </form>
          </div>
        </template>
      </EasyDataTable>
      
<div class="empty rounded-md h-auto w-full px-6 py-5 bg-slate-200" v-else>
      <div class="text text-xl font-normal">
        <span>Belum ada transaksi, Silahkan membeli kelas </span><router-link to="/list-class" class="underline underline-offset-4 font-bold tracking-wider hover:text-blue-900 hover:decoration-blue-900">disini</router-link> 
      
      </div>
    </div>
      <card-table class="block sm:hidden" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, computed, reactive, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const transaksi = computed(() => store.state.transaksi);
const getTransaksi = computed(() => store.getters.getTransaksi);
const me = computed(()=> store.getters.getMe)
const err = computed(()=>store.getters.getMsgErr)

const loading = ref(false)


const headers = [
  { text: "Kode", value: "id" },
  { text: "Nama Pengirim", value: "name" },
  { text: "Status Transaksi", value: "status_transaksi" },
  { text: "Tanggal Pembelian", value: "tanggal" },
  { text: "Kelas", value: "kela.name" },
  { text: "Harga", value: "kela.harga" },
  { text: "Bank", value: "bank.name" },
  { text: "Nama Rekening ", value: "bank.rekening_no" },
  { text: "Nomer Rekening", value: "bank.rekening_name" },
];

const data = reactive({
  file: null,
});
function imgUpload(event) {
  data.file = event.target.files[0];
}
async function konfirmasi(id) {
  store.commit("setMsgErr", null)
  loading.value = !loading.value
  if(data.file === null || !data.file){
  loading.value = !loading.value
  store.commit("setMsgErr", "Upload bukti pembayaran")
  }else{
    await store
    .dispatch("KONFIRMASI_TRANSAKSI", {
      id: id,
      data: data,
    })
    .then((res) => {
      loading.value = !loading.value
    })
    .catch((err) => {
      loading.value = !loading.value
      
    });
  }
  
}

onMounted(() => {
  store.dispatch("FETCH_TRANSAKSI", me.value.id);
});

onUpdated(() => {
  store.dispatch("FETCH_TRANSAKSI", me.value.id);
});
</script>
