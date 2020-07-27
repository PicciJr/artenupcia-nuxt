<!-- Card que representa un trabajo unico, con su imagen correspondiente -->
<template>
  <div class="p-2">
    <img :src="imgSrc" class="object-cover shadow-md cursor-pointer" />
    <div class="p-2 text-an-azul-oscuro text-sm italic">{{ footerText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    /** src de la imagen a mostrar */
    imgSrc: {
      type: String
    },
    /** Pie de texto que puede acompañar a la foto */
    footerText: {
      type: String
    }
  }
}
</script>
