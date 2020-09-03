<!-- Miniatura que puede formar parte de un grupo. Pej en un carrusel de imagenes -->
<template>
  <div
    class="ml-4 border border-gray-200 shadow-lg rounded-lg cursor-pointer"
    @mouseover="switchImage"
    @click="openImage"
  >
    <img class="w-20" :src="imgSrc" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    imgAlt: String,
    isVideo: Boolean, // se podría usar para poner un icono de reproduccion delante de la imagen
  },
  methods: {
    /** Permite cambiar la imagen sobre la que el usuario hace hover. Pej en un carrusel de imagenes. */
    switchImage() {
      this.$emit("hover", this.imgSrc);
    },
    /** Permite indicar qué imagen se debe abrir en el modal que la contiene. */
    openImage() {
      this.$emit("click", this.imgSrc);
    },
  },
};
</script>
