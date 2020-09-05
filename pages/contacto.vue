<template>
  <div class="px-4 xl:mx-48">
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="flex flex-col py-4 xl:flex-row justify-center">
      <!-- Foto -->
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2FIMG_4964.nbGkHy51Rv5ycKTjiNmo.jpg?alt=media&token=e6b39df2-c1a8-44b0-9f27-de821d620b4e"
          class="w-full hidden xl:block mb-2 rounded-md"
        />
      </div>
      <!-- Formulario de contacto -->
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
        <h2
          class="mb-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 font-znikomit sm:text-3xl sm:leading-9"
        >
          ¡Empecemos!
        </h2>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'

import axios from 'axios'
const BASE_URL = 'https://us-central1-artenupcia-node.cloudfunctions.net/app'

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
})

export default {
  components: {
    ContactForm,
    Header,
    MenuNavbar,
  },
  async asyncData() {
    // const response = await apiClient.get(BASE_URL)
    // console.log(response.data)
  },
}
</script>

<style scoped>
.font-free {
  font-family: 'Freestyle';
}

.font-eras {
  font-family: 'Eraslight';
}

.font-inkfree {
  font-family: 'Inkfree';
}

.font-znikomit {
  font-family: 'Znikomit';
}

.font-gravity-l {
  font-family: 'GravityLight';
}
</style>
