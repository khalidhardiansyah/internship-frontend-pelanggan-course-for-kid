<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen bg-[#CDFFFC]"
  >
    <div class="bg-white w-10/12 sm:w-1/3 rounded-lg border border-black shadow-md">
      <div class="card-body w-full items-center text-center text-black">
        <h2 class="card-title text-4xl font-bold">{{ title }}</h2>
        <p class="text-md">Silkan Login menggunakan Email dan Password</p>
        <form  @submit.prevent="" class="form-control w-full max-w-xs items-center">
          <success-alert msg="login berhasil"/>
          <error-alert msg="login error"/>   
          <base-input type="email" label="Email" ph="Email" size="md" v-model="form.email" @blur="v$.email.$touch" />
            <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
            <div class="passwod-group relative w-full mt-2">
                <base-input :type="[showpass ? 'password' : 'text']"  label="Password" ph="Password" size="md" err=""  v-model="form.password" @blur="v$.password.$touch"/>
                <span class="label py-0 w-full text-left -ml-1 text-red-600" v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
            
                <hide-pass @click="showpass = !showpass " v-if="!showpass" class="absolute right-3 top-11 cursor-pointer"/>
                <show-pass @click="showpass = !showpass" v-else class="absolute right-3 top-10 cursor-pointer"/>
            </div>
            
            <base-button @click="submitLogin" class="mt-4"  size="xl" design="primary">Login</base-button>
            <div class="w-48 my-2">
                <div class="divider m-0 before:bg-stone-600/[.10] after:bg-stone-600/[.10] ">atau</div>
            </div>
            <base-button type="button" @click="toRegister" class="" size="xl" design="secondary">Register</base-button>
        </form>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useVuelidate from '@vuelidate/core'
import {required, email, minLength, } from '@vuelidate/validators'
const route = useRoute()
const router = useRouter()
const store = useStore()

const showpass = ref(true)

function toRegister(){
    router.push({
        name:'register'
    })
}
const form = reactive({
    email:'',
    password:''
})

const rules = computed(()=>{
  return{
  email:{
              required, 
              email,
              },
  password:{
              required,
              minLength:minLength(8),
            }
}
})
const v$ = useVuelidate(rules, form)

const submitLogin = async ( )=>{
  const result = await v$.value.$validate()
  router.push({
        name:'dashboard'
    })
    console.log("ss");
  // if(result){
  //   console.log("sss");
  // }else{
  //   console.log("tidak benar");
  // }
}

const title = computed(() => store.getters.getWebTitle)
onMounted(() => {

  
})
</script>
