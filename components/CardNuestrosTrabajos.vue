<template>
  <div class="p-2">
    <img :src="imgSrc" class="object-cover shadow-md cursor-pointer" />
    <div class="p-2 text-an-azul-oscuro text-sm italic">{{ footerText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String
    },
    footerText: {
      type: String
    },
    trabajo: {
      type: Object,
      default() {
        return null
      }
    }
  }
}
</script>
