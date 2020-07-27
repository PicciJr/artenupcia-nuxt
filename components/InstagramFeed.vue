<!-- Version Desktop para Instagram fotos -->
<template>
  <div>
    <div class="w-full p-1 sm:p-3 xl:p-4 hidden md:flex justify-center">
      <a
        v-for="img in igPosts"
        :key="img.id"
        :href="'https://www.instagram.com/p/' + img.linkTo"
        target="_blank"
      >
        <!-- imagenes dimensionadas en cuadrado para que parezcan tipo instagram -->
        <img
          class="w-72 h-72 p-2 hover:shadow-outline rounded-lg cursor-pointer"
          :src="'https://www.instagram.com/p/' + img.shortCode"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    igPosts: Array, // array de fotos de instagram que se debe renderizar
  },
};
</script>
