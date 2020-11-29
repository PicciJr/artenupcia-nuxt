<!-- Barra de menus solo apta para desktop. Cada elemento del menu es un nuxt-link -->
<template>
  <div>
    <div
      class="flex justify-center px-4 text-center font-znikomit sm:mx-24 xl:text-xl"
    >
      <div class="hidden sm:flex">
        <nuxt-link
          :to="{
            path: '/',
            hash: '#invitaciones-personalizadas',
          }"
          class="px-4 py-3 font-bold tracking-wide no-underline text-teal-dark"
          >Invitaciones personalizadas</nuxt-link
        >
        <div class="mb-2 border-r border-an-marron"></div>
        <nuxt-link
          :to="{
            path: '/',
            hash: '#nuestros-trabajos',
          }"
          class="px-4 py-3 font-bold tracking-wide no-underline text-grey-dark"
          >Nuestros trabajos</nuxt-link
        >
        <div class="mb-2 border-r border-an-marron"></div>
        <nuxt-link
          :to="{
            path: '/',
            hash: '#sobre-artenupcia',
          }"
          class="px-4 py-3 font-bold tracking-wide no-underline text-grey-dark"
          >Sobre Artenupcia</nuxt-link
        >
        <div class="mb-2 border-r border-an-marron"></div>
        <nuxt-link
          :to="{
            path: '/',
            hash: '#necesitas-inspiracion',
          }"
          class="px-4 py-3 font-bold tracking-wide no-underline text-grey-dark"
          >Inspiración</nuxt-link
        >
        <div class="mb-2 border-r border-an-marron"></div>
        <div class="py-3 pl-12 font-extrabold tracking-wide no-underline">
          <nuxt-link to="/contacto" class="shadow-text">Contacto</nuxt-link>
        </div>
      </div>
    </div>
    <div class="w-full border-an-marron"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.shadow-text {
  box-shadow: inset 0 -0.375em 0 0 rgba(214, 231, 238, 0.8);
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
