<!-- Card que representa un trabajo unico, con su imagen correspondiente -->
<template>
  <div class="p-2">
    <img
      :src="imgSrc"
      class="object-cover shadow-md cursor-pointer"
      @click="$emit('click')"
    />
    <div class="p-2 text-gray-900 text-md font-znikomit">{{ footerText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    /** src de la imagen a mostrar */
    imgSrc: {
      type: String,
    },
    /** Pie de texto que puede acompañar a la foto */
    footerText: {
      type: String,
    },
  },
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

.font-znikomit {
  font-family: 'Znikomit';
}

.font-gravity-l {
  font-family: 'GravityLight';
}
</style>
