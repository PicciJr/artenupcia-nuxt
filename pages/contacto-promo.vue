<!-- Pagina para postales de Navidad -->
<template>
  <div class="px-4 mb-32 xl:mx-48">
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="flex flex-col items-center justify-center py-8">
      <!-- Producto seleccionado -->
      <div class="flex mb-2 text-gray-600 text-md sm:text-xl font-gravity-l">
        <label class="pr-6">Producto seleccionado</label>
        <span class="font-medium shadow-text">{{ selectedProduct }}</span>
      </div>
      <!-- Foto producto de promocion -->
      <div class="p-1-sm:p-3 xl:p-4">
        <img
          :src="promoImgSrc"
          class="block w-48 mb-2 rounded-md shadow-md sm:w-64"
        />
      </div>
      <!-- Formulario de contacto -->
      <div class="p-1 sm:p-3 xl:p-4">
        <ContactFormPromo />
      </div>
    </div>
  </div>
</template>

<script>
import ContactFormPromo from '@/components/ContactFormPromo'
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'

export default {
  components: {
    ContactFormPromo,
    Header,
    MenuNavbar,
  },
  data() {
    return {
      promoImgSrc:
        'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fimagen-navidad-2020.jpeg?alt=media&token=9566fde0-def6-4733-be06-f603569319f1',
      selectedProduct: 'Postales de Navidad',
    }
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

.shadow-text {
  box-shadow: inset 0 -0.375em 0 0 rgba(238, 114, 105, 0.8);
}
</style>
