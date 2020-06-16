<!-- Pagina para redirigir a usuarios que acceden a rutas incorrectas (url) -->
<template>
  <div></div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    return redirect('/error-ruta')
  }
}
</script>
