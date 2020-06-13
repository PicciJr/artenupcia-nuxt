<template>
  <div class="border border-none shadow-xl">
    <img class="relative object-cover" :src="imgSrc" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    imgAlt: String
  }
}
</script>
