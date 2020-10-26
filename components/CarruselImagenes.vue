<!-- Carrusel imagenes pensado para movil con gestos de swipe
Las imagenes tienen un enlace que pueden redirigir al usuario -->
<template>
  <div class="flex">
    <div
      class="flex flex-col justify-center mx-auto mt-8 rounded-lg shadow-xl"
      :class="animateIn"
      v-touch:swipe.right="swipeItemRight"
      v-touch:swipe.left="swipeItemLeft"
    >
      <a
        :href="'https://www.instagram.com/p/' + igPosts[currentImage].linkTo"
        target="_blank"
      >
        <img class="w-64 h-64" :src="igPosts[currentImage].src" />
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="self-center w-12 h-12 opacity-50 fill-current text-an-salmon"
        viewBox="0 0 20 20"
      >
        <path
          d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 0, // controla que imagen mostrar
      itemSwipedRight: false, // controla gesto de usuario a derecha
      itemSwipedLeft: false, // controla gesto de usuario a izquierda
      igPosts: [
        {
          linkTo: 'CE19tP7oQAF',
          src:
            'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fig-pic-3.jpg?alt=media&token=3de0e73c-6450-4073-91a9-dd9c3595c320',
        },
        {
          linkTo: 'CE1-Pa9o-7O',
          src:
            'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fig-pic-2.jpg?alt=media&token=481f23d5-75ba-471b-bc29-68d3fd30fcc6',
        },
        {
          linkTo: 'CE1_C7vowwv',
          src:
            'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2Fig-pic-1.jpg?alt=media&token=2d023ee7-6927-4414-bee0-560a0f155345',
        },
      ],
    }
  },
  methods: {
    /** Controlar el swipe. Importante: siempre la longitud va uno por encima, de ahi que se ponga el -1 en ambas partes */
    swipeItemRight() {
      this.itemSwipedRight = true
      // duration linked to the animation duration CSS
      setTimeout(() => {
        if (this.currentImage > 0) this.currentImage--
        else this.currentImage = this.igPosts.length - 1
        this.itemSwipedRight = false
      }, 300)
    },
    /** Controlar el swipe. Importante: siempre la longitud va uno por encima, de ahi que se ponga el -1 en ambas partes */
    swipeItemLeft() {
      this.itemSwipedLeft = true
      // duration linked to the animation duration CSS
      setTimeout(() => {
        if (this.currentImage < this.igPosts.length - 1) this.currentImage++
        else this.currentImage = 0
        this.itemSwipedLeft = false
      }, 300)
    },
  },
  computed: {
    // computed for class binding, animation when item is swiped
    animateIn() {
      if (this.itemSwipedRight) return 'animated fadeOutRight'
      else if (this.itemSwipedLeft) return 'animated fadeOutLeft'
      return ''
    },
  },
}
</script>

<style scoped>
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  animation-duration: 0.3s;
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutRight {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  animation-duration: 0.3s;
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}
</style>
