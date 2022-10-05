<template>
    <div class="min-h-screen min-w-full container flex flex-row">
        <div class="left-group w-3/6 min-h-screen flex flex-col items-center py-16  border border-black">
        <div class="card-body grow-0 w-full items-center text-center text-black space-y-2">
        <h2 class="card-title text-4xl font-bold">Register Coding Anak</h2>
        <p class="text-md">Silkan Login menggunakan Email dan Password</p>
        <form  @submit.prevent="" class="form-control w-full max-w-xs items-center">
          <success-alert msg="pendaftaran berhasil"/>
          <error-alert msg="pendaftaran error"/>  

            <base-input type="text" label="Nama lengkap anda" ph="Nama Lengkap" size="md" err="" v-model="form.fname" @blur="v$.fname.$touch"/>
            <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.fname.$errors" :key="error.$uid">{{ error.$message }}</span>
            <base-input type="email" label="Email" ph="Email " size="md" err="" v-model="form.email" @blur="v$.email.$touch"/>
            <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
            <div class="passwod-group relative w-full mt-2">
                <base-input :type="[showpass ? 'password' : 'text']"  label="Password" ph="Password" size="md" err=""  v-model="form.password" @blur="v$.password.$touch"/>
                <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
                <hide-pass @click="showpass = !showpass " v-if="!showpass" class="absolute right-3 top-11 cursor-pointer"/>
                <show-pass @click="showpass = !showpass" v-else class="absolute right-3 top-10 cursor-pointer"/>
            </div>
            <div class="passwod-group relative w-full mt-2">
                <base-input :type="[showcpass ? 'password' : 'text']"  label="Konfirmasi Password" ph="Konfirmasi Password" size="md" err=""  v-model="form.cpassword" @blur="v$.cpassword.$touch"/>
                <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.cpassword.$errors" :key="error.$uid">{{ error.$message }}</span>
                <hide-pass @click="showcpass = !showcpass " v-if="!showcpass" class="absolute right-3 top-11 cursor-pointer"/>
                <show-pass @click="showcpass = !showcpass" v-else class="absolute right-3 top-10 cursor-pointer"/>
            </div>
            
            <div class="flex w-full flex-row justify-around items-center mt-5">

                <base-button type="button" size="lg" design="secondary" @click="toHome">Back home</base-button>
                <base-button @click="submitRegister" size="lg" design="primary">Register</base-button>
            </div>
        </form>
      </div>
        </div>
        <div class="right-group w-screen bg-[#CDFFFC]">
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core'
import {required, email, minLength, sameAs } from '@vuelidate/validators'
const route = useRoute()
const router = useRouter()
const showpass = ref(true)
const showcpass = ref(true)

function toHome(){
  router.push({
        name:'home'
    })
}
const form = reactive({
    fname:"",
    email:'',
    password:'',
    cpassword:''
})

const rules = computed(()=>{
  return{
  fname:{
    required,
    minLength:minLength(8)
  },
  email:{
              required, 
              email,
              },
  password:{
              required,
              minLength:minLength(8),
            },
  cpassword:{
                required,
                sameAs:sameAs(form.password)
  }
}
})
const v$ = useVuelidate(rules, form)

const submitRegister = async ( )=>{
  const result = await v$.value.$validate()
  if(result){
    console.log("suksess");
  }else{
    console.log("tidak benar");
  }
}
</script>
