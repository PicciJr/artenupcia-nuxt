<template>
  <div class="px-4 xl:mx-24">
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="flex flex-col py-4 xl:flex-row justify-center">
      <!-- Foto -->
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2FIMG_4964%20claridad.jpg?alt=media&token=b666f844-86c0-4d3e-8170-34368e54ef14"
          class="w-full hidden lg:block mb-2 rounded-md"
        />
      </div>
      <!-- Formulario de contacto -->
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
        <h2
          class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 font-inkfree sm:text-3xl sm:leading-9"
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
export default {
  components: {
    ContactForm,
    Header,
    MenuNavbar
  }
}
</script>

<style scoped>
.font-eras {
  font-family: 'Eraslight';
}

.font-free {
  font-family: 'Freestyle';
}

.font-inkfree {
  font-family: 'Inkfree';
}
</style>
