<template>
  <div class="border border-none bg-pink-300 rounded-lg shadow-xl">
    <img
      class="relative object-cover py-2 px-2"
      src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
    />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    imgAlt: String,
  }
};
</script>
