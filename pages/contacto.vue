<template>
  <div class="px-4 xl:mx-24">
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="flex flex-col py-4 xl:flex-row justify-center">
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
        <img
          src="@/assets/img/manualidades-artenupcia.png"
          class="w-full hidden md:block mb-2 rounded-md"
        />
      </div>
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4 order-1">
        <h2
          class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 font-inkfree sm:text-3xl sm:leading-9"
        >
          Solícitanos presupuesto
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
