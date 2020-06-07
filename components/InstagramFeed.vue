<template>
  <div>
    <!-- <div class="w-full p-1 sm:p-3 xl:p-4 hidden md:flex justify-center">
       <a
        v-for="img in 3"
        :key="img.id"
        :href="'https://www.instagram.com/p/'+igPosts[img - 1].shortCode"
        target="_blank"
      > -->
      <!-- imagenes dimensionadas en cuadrado para que parezcan tipo instagram -->
        <!-- <img
          class="w-84 h-84 p-2 hover:shadow-outline rounded-lg cursor-pointer"
          :src="igPosts[img - 1].imgUrl"
        />
      </a>
    </div> -->
    <!-- Version movil, permite swipe -->
    <!-- <CarruselImagenes class="md:hidden" :igPosts="igPosts" /> -->
  </div>
</template>

<script>
import CarruselImagenes from "@/components/CarruselImagenes";
export default {
  components: {
    CarruselImagenes
  },
  props: {
    igPosts: Array
  }
};
</script>
