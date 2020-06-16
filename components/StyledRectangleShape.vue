<template>
  <div class="flex px-4 py-2 font-free">
    <div
      class="relative w-fit object-contain py-2 px-2 border-2 border-an-salmon text-3xl sm:text-5xl text-center"
    >
      <div class="pl-4">
        {{ textRectangle }}
      </div>
      <div
        class="absolute top-0 ml-1 -mt-3 w-full object-contain h-full px-4 py-2 border-2 border-an-salmon"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textRectangle: String,
  },
};
</script>

<style scoped>
.font-free {
  font-family: "Freestyle";
}

.font-eras {
  font-family: "Eraslight";
}

.font-inkfree {
  font-family: "Inkfree";
}
</style>
