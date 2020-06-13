<template>
  <div
    class="bg-an-rosa border-t-4 border-teal rounded-lg text-teal-darkest px-4 py-2 shadow-md my-2"
  >
    <div class="flex items-center">
      <!-- SVG icon slot -->
      <slot name="svgLeft"></slot>
      <!-- Text content -->
      <div class="pl-4">
        <p class="font-bold">{{ headingText }}</p>
        <p class="text-sm font-eras">
          {{ mainText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headingText: String,
    mainText: String,
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
