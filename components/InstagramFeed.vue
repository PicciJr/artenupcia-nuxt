<!-- Version Desktop para Instagram fotos -->
<template>
  <div>
    <div class="justify-center hidden w-full p-1 sm:p-3 xl:p-4 md:flex">
      <a
        v-for="img in igPosts"
        :key="img.id"
        :href="'https://www.instagram.com/p/' + img.linkTo"
        target="_blank"
      >
        <!-- imagenes dimensionadas en cuadrado para que parezcan tipo instagram -->
        <img
          class="p-2 transform rounded-lg cursor-pointer w-72 h-72 hover:shadow-md hover:translate-y-2"
          :src="img.src"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      igPosts: [
        {
          linkTo: 'CE19tP7oQAF',
          src: 'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fig-pic-3.jpg?alt=media&token=3de0e73c-6450-4073-91a9-dd9c3595c320'
        },
        {
          linkTo: 'CE1-Pa9o-7O',
          src: 'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fig-pic-2.jpg?alt=media&token=481f23d5-75ba-471b-bc29-68d3fd30fcc6'
        },
        {
          linkTo: 'CE1_C7vowwv',
          src: 'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fig-pic-1.jpg?alt=media&token=2d023ee7-6927-4414-bee0-560a0f155345'
        },
      ]
    }
  },
}
</script>
