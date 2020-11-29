<!-- Pagina a la que se redirige desde /contacto si todo ok -->
<template>
  <div>
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div
      class="flex flex-col items-center py-4 text-center sm:px-16 sm:text-left"
    >
      <h1 class="mb-4 text-4xl font-free">
        Gracias por contactarnos!
      </h1>
      <div class="px-8 text-lg font-gravity-l">
        <div class="mb-6">
          <span class="pr-4">💒</span>¡Ya tenemos ganas de empezar a preparar
          vuestra boda!
        </div>
        <div class="mb-6">
          <span class="pr-4">🔔</span> Te contactaremos en breves.
          <span class="font-extrabold shadow-text"
            >Revisa tu buzón de SPAM por si acaso.</span
          >
        </div>
        <div class="mb-6">
          <span class="pr-4">💞</span> Mientras, puedes inspirarte con
          <!-- Posibilidad de redireccion al usuario -->
          <a
            class="font-extrabold text-teal-500 unde"
            href="https://www.instagram.com/artenupcia/"
            target="_blank"
            >nuestro Instagram</a
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
    MenuNavbar,
  },
}
</script>

<style scoped>
.shadow-text {
  box-shadow: inset 0 -0.500em 0 0 rgba(238, 129, 113, 0.3);
}

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
