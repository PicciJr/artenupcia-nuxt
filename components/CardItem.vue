<template>
  <div>
    <img class="object-cover shadow-2xl" :src="imgSrc" />
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
