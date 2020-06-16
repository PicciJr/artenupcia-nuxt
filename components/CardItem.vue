<template>
  <div class="shadow-xl">
    <img class="object-cover" :src="imgSrc" />
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
