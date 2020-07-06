<template>
  <div>
    <div class="font-eras flex justify-center px-4 sm:mx-24 xl:text-xl text-center text-black">
      <div class="hidden sm:flex">
        <nuxt-link
          :to="{
            path: '/',
            hash: '#invitaciones-personalizadas',
          }"
          class="no-underline text-teal-dark tracking-wide font-bold py-3 px-4"
          >Invitaciones personalizadas</nuxt-link
        >
        <div class="border-r border-an-marron mb-2"></div>
        <nuxt-link
          :to="{
            path: '/',
            hash: '#nuestros-trabajos',
          }"
          class="no-underline text-grey-dark tracking-wide font-bold py-3 px-4"
          >Nuestros trabajos</nuxt-link
        >
        <div class="border-r border-an-marron mb-2"></div>
        <nuxt-link
          :to="{
            path: '/',
            hash: '#sobre-artenupcia',
          }"
          class="no-underline text-grey-dark tracking-wide font-bold py-3 px-4"
          >Sobre Artenupcia</nuxt-link
        >
        <div class="border-r border-an-marron mb-2"></div>
        <nuxt-link
          :to="{
            path: '/',
            hash: '#necesitas-inspiracion',
          }"
          class="no-underline text-grey-dark tracking-wide font-bold py-3 px-4"
          >Inspiración</nuxt-link
        >
        <div class="border-r border-an-marron mb-2"></div>
        <div
          class="no-underline text-an-azul-oscuro tracking-wide font-extrabold py-3 pl-12"
        >
          <nuxt-link to="/contacto">Contacto</nuxt-link>
        </div>
      </div>
    </div>
    <div class=" border-an-marron w-full"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.font-eras {
  font-family: "Eraslight";
}
</style>
