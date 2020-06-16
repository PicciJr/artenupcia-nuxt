<!-- Pagina redirect cuando hay un error -->
<template>
  <div>
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="flex justify-center relative">
      <div class="flex flex-col absolute top-0">
        <div class="font-eras mb-16 text-center text-white text-5xl font-bold">
          Lo sentimos, la página que has solicitado no existe.
        </div>
        <div class="font-eras  text-center text-white text-3xl font-bold">
          Puedes volver a nuestra página
          <nuxt-link to="/"
            ><span class="text-an-salmon font-extrabold">aquí</span></nuxt-link
          >
        </div>
      </div>
      <img
        class="w-full h-full"
        src="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fingo-doerrie-RbVAqtY2bIM-unsplash.jpg?alt=media&token=b74900e6-ff2e-41dd-93e9-2a579f664b00"
        alt="error-artenupcia"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'
export default {
  components: {
    Header,
    MenuNavbar
  }
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
</style>
