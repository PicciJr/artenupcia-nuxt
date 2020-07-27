<!-- Card que se ha usado para imagenes y darles cierto estilo -->
<template>
  <div>
    <img class="object-cover shadow-2xl" :src="imgSrc" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  props: {
    /** Datos de la imagen a renderizar */
    imgSrc: String,
    imgAlt: String,
  },
};
</script>
