<template>
  <div
    class="ml-4 border border-gray-200 shadow-lg rounded-lg cursor-pointer"
    @mouseover="switchImage"
  >
    <img class="w-20" :src="imgSrc" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    imgAlt: String,
    isVideo: Boolean,
  },
  methods: {
    switchImage() {
      this.$emit("hover", this.imgSrc);
    },
  },
};
</script>
