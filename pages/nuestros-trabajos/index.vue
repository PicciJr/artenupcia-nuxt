<!-- Pagina para filtrado completo de todos los trabajos -->
<template>
  <div>
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <!--Contenedor de todo el layout para que tengan la misma identacion -->
    <div class="px-4 xl:mx-24">
      <BadgeTag color="blue" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'
import BadgeTag from '@/components/BadgeTag'
export default {
  components: {
    Header,
    MenuNavbar,
    BadgeTag
  }
}
</script>
