<!-- Carrusel imagenes version movil -->
<template>
  <div class="flex">
    <!-- <div
      class="flex flex-col justify-center rounded-lg block mx-auto shadow-xl mt-8"
      :class="animateIn"
      v-touch:swipe.right="swipeItemRight"
      v-touch:swipe.left="swipeItemLeft"
    >
      <a
        :href="
          'https://www.instagram.com/p/' + igPosts[currentImage].shortCode
        "
        target="_blank"
      >
        <img class="w-64 h-64" :src="igPosts[currentImage].imgUrl" />
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="self-center w-12 h-12 text-an-salmon fill-current opacity-50"
        viewBox="0 0 20 20"
      >
        <path
          d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 0,
      itemSwipedRight: false,
      itemSwipedLeft: false
    }
  },
  props: {
    igPosts: Array
  },
  methods: {
    swipeItemRight() {
      this.itemSwipedRight = true
      // duration linked to the animation duration CSS
      setTimeout(() => {
        if (this.currentImage > 0) this.currentImage--
        else this.currentImage = 9
        this.itemSwipedRight = false
      }, 300)
    },
    swipeItemLeft() {
      this.itemSwipedLeft = true
      // duration linked to the animation duration CSS
      setTimeout(() => {
        if (this.currentImage < 9) this.currentImage++
        else this.currentImage = 0
        this.itemSwipedLeft = false
      }, 300)
    }
  },
  computed: {
    // computed for class binding, animation when item is swiped
    animateIn() {
      if (this.itemSwipedRight) return 'animated fadeOutRight'
      else if (this.itemSwipedLeft) return 'animated fadeOutLeft'
      return ''
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
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
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
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
