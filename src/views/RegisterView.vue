<template>
    <div class="min-h-screen min-w-full container flex flex-row justify-center items-center bg-primary">
        <div class="left-group h-1/2 bg-white rounded-md">
        <div class="card-body grow-0 w-full items-center text-center text-black space-y-2">
        <h2 class="card-title text-4xl font-bold">Register Coding Anak</h2>
        <p class="text-md">Silkan Login menggunakan Email dan Password</p>
        <form  @submit.prevent="" class="form-control w-full max-w-xs items-center">
          <error-alert :msg="errMsg" v-if="errMsg"/>
          <success-alert :msg="succMsg" class="mb-4" v-if="succMsg"/>

            <base-input type="text" label="Nama lengkap anda" ph="Nama Lengkap" size="md" err="" v-model="form.name" @blur="v$.name.$touch"/>
            <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
            <base-input type="email" label="Email" ph="Email " size="md" err="" v-model="form.email" @blur="v$.email.$touch"/>
            <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
            
            <div class="relative w-full">
              <base-input type="tel" class="pl-14" label="Nomor Handphone" ph="Nomor Handphone " size="md" err="" v-model="form.no_telp" @blur="v$.no_telp.$touch"/>
            <div class="absolute h-12 w-12 -left-0 top-7 bg-gray-300 flex items-center justify-center">
              <div class="">
                +62
              </div>
            </div>
            </div>
            <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.no_telp.$errors" :key="error.$uid">{{ error.$message }}</span>
            <span class="label py-0 w-full text-left -ml-1 text-red-600" v-if="msg.addmsg">{{ msg.addmsg }}</span>
            
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
                <base-button @click="submitRegister" size="lg" design="primary">
                <div class="flex gap-3 items-center">
                  <loading-spin v-if="loading"  size="h-5"/>
                Register
                </div>
              </base-button>
            </div>
        </form>
      </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useStore} from "vuex"
import useVuelidate from '@vuelidate/core'
import {required, email, minLength, sameAs, integer } from '@vuelidate/validators'
const route = useRoute()
const router = useRouter()
const store = useStore();
const showpass = ref(true)
const showcpass = ref(true)
const loading = ref(false)
function toHome(){
  router.push({
        name:'home'
    })
}
const form = reactive({
    name:"",
    no_telp:"",
    email:'',
    password:'',
    cpassword:''
})

const msg = reactive({
  addmsg:''
})

let numberRegEx = "^8[1-9][0-9]{6,9}$"
const rules = computed(()=>{
  return{
  name:{
    required,
    minLength:minLength(8)
  },
  email:{
              required, 
              email,
              },
  no_telp:{
            required,
            integer,
            minLength:minLength(10)
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
  loading.value = !loading.value
  msg.addmsg = ''
  store.commit("setErrMsg", null)
  store.commit("setSuccMsg", null)
  const result = await v$.value.$validate()
  if(result && form.no_telp.match(numberRegEx)){
    await store.dispatch("REGISTER", {
      name: form.name,
      no_telp:parseInt(form.no_telp),
      email:form.email,
      password: form.password
    })
    .then(success=>{
      loading.value = !loading.value
      
    })
    .catch(error =>{
      loading.value = !loading.value

    })
  }
  msg.addmsg = "Masukan nomor telephone yang benar"
  loading.value = !loading.value
  }


const errMsg = computed(()=>store.getters.getErrMsg)
const succMsg = computed(()=>store.getters.getSuccMsg)

onMounted(()=>{
  store.commit("setErrMsg", null)
  store.commit("setSuccMsg", null)
})
</script>
