<template>
  <div class="p-2">
    <img :src="imgSrc" class="w-full shadow-md cursor-pointer sm:h-96" />
    <div class="p-2 text-an-azul-oscuro text-sm italic">{{ footerText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
    footerText: {
      type: String,
    },
    linkTo: {
      type: String,
    },
  },
};
</script>
