<template>
  <div>
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div
      class="flex flex-col items-center py-4 sm:px-16 text-center sm:text-left"
    >
      <h1 class="font-free text-4xl mb-4">
        Gracias por contactarnos!
      </h1>
      <div class="px-8 font-eras">
        <div class="mb-6">
          <span class="pr-4">💒</span>¡Ya tenemos ganas de empezar a prepara
          vuestra boda!
        </div>
        <div class="mb-6">
          <span class="pr-4">🔔</span> Te contactaremos brevemente para que
          empecemos.
        </div>
        <div class="mb-6">
          <span class="pr-4">💞</span> Mientras, ¿te apetece echar un vistazo a
          <nuxt-link
            :to="{
              path: '/',
              hash: '#nuestros-trabajos'
            }"
            ><span class="text-an-salmon font-extrabold text-lg">nuestros trabajos?</span></nuxt-link
          >
        </div>
      </div>
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
