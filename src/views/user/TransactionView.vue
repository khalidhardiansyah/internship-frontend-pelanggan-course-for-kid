<template>
  <div class="p-5 h-screen bg-gray-100 text-black">
    <h1 class="text-3xl mb-6 font-bold">Your orders</h1>
    <div class="flex flex-col">
      <EasyDataTable class=" hidden sm:block" :headers="headers" :items="items">
    </EasyDataTable>
    <card-table class="block sm:hidden"/>
    </div>
  </div>
</template>

<script setup>
const headers = [
  { text: "No. Transaksi", value: "no_trans" },
  { text: "Kategori kelas", value: "c_kelas" },
  { text: "Nama Kelas", value: "n_kelas" },
  { text: "Harga", value: "p_kelas" },
  { text: "Tanggal Pembelian", value: "order_date" },
  { text: "Status", value: "order_status" },
];

const items = [
  {
    no_trans:1001,
    c_kelas: "ROBOTIC",
    n_kelas:"VUE blabla course",
    p_kelas: "200.000",
    order_date:"29-09-2022",
    order_status: "Belum selesai"
  },
  {
    no_trans:1001,
    c_kelas: "ROBOTIC",
    n_kelas:"VUE blabla course",
    p_kelas: "200.000",
    order_date:"29-09-2022",
    order_status: "Belum selesai"
  },
  {
    no_trans:1001,
    c_kelas: "ROBOTIC",
    n_kelas:"VUE blabla course",
    p_kelas: "200.000",
    order_date:"29-09-2022",
    order_status: "Belum selesai"
  },
  {
    no_trans:1001,
    c_kelas: "ROBOTIC",
    n_kelas:"VUE blabla course",
    p_kelas: "200.000",
    order_date:"29-09-2022",
    order_status: "Belum selesai"
  },
  {
    no_trans:1001,
    c_kelas: "ROBOTIC",
    n_kelas:"VUE blabla course",
    p_kelas: "200.000",
    order_date:"29-09-2022",
    order_status: "Belum selesai"
  }
];
</script>
