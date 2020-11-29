<!-- Rectangulo con estilo que esta formado por 2 bordes superpuestos y un texto centrado entre ellos -->
<template>
  <div class="flex px-4 py-2 font-znikomit">
    <div
      class="relative object-contain px-2 pt-1 pb-4 text-2xl text-center border-2 w-fit border-an-salmon sm:text-4xl"
    >
      <div class="pl-4">
        {{ textRectangle }}
      </div>
      <div
        class="absolute top-0 object-contain w-full h-full px-4 py-2 ml-1 -mt-3 border-2 border-an-salmon"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textRectangle: String, // texto contenido dentro de los rectangulos
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

.font-bonvoyage {
  font-family: 'Bonvoyage';
}

.font-bosque {
  font-family: 'Bosque';
}

.font-canvas-black {
  font-family: 'CanvasBlack';
}

.font-canvas-light {
  font-family: 'CanvasLight';
}

.font-canvas-regular {
  font-family: 'CanvasRegular';
}

.font-maldive {
  font-family: 'Maldive';
}

.font-nouvelle {
  font-family: 'Nouvelle';
}

.font-saonara {
  font-family: 'Saonara';
}

.font-znikomit {
  font-family: 'Znikomit';
}

.font-znikomitsc {
  font-family: 'Znikomitsc';
}

.font-free {
  font-family: 'Freestyle';
}

.font-eras {
  font-family: 'Eraslight';
}
</style>
