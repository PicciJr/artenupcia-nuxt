<template>
  <div v-if="isOpen" :class="setComputedClass">
    <!--
    Background overlay, show/hide based on modal state.
    -->
    <div class="fixed inset-0 transition-opacity" @click="$emit('close-modal')">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <!--
    Modal panel, show/hide based on modal state.
  -->
    <div
      class="relative px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-screen-lg sm:w-full sm:p-6"
    >
      <!-- Cruz para cerrar -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="absolute top-0 right-0 w-10 h-10 pr-2 mt-2 opacity-25 cursor-pointer"
        @click="$emit('close-modal')"
      >
        <path
          d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
        />
      </svg>
      <!-- Flecha izquierda -->
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="absolute w-10 h-10 pl-2 opacity-50 cursor-pointer"
        style="top:50%; left:0%"
        @click="nextImageLeft"
      >
        <path
          d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z"
        />
      </svg> -->
      <!-- Flecha derecha -->
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="absolute w-10 h-10 pr-2 opacity-50 cursor-pointer"
        style="top:50%; right:0%"
        @click="nextImageRight"
      >
        <path
          d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"
        />
      </svg> -->
      <!-- Image container -->
      <img class="w-full mb-4" :src="activeImageSrc" :alt="activeImageAlt" />
      <!-- Carrusel de thumbnails -->
      <div class="flex justify-center">
        <div v-for="thumbnailImgSrc in imagesArray" :key="thumbnailImgSrc.id">
          <ThumbnailMedia
            v-if="thumbnailImgSrc.imgSrc !== ''"
            :imgSrc="thumbnailImgSrc.imgSrc"
            @hover="handleSwitchImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailMedia from '@/components/ThumbnailMedia'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    ThumbnailMedia,
  },
  directives: {
    ClickOutside,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    imagesArray: {
      type: Array,
      default: [
        {
          imgSrc: '',
          imgAlt: '',
        },
      ],
    },
    activeImageSrc: '',
    activeImageAlt: '',
  },
  computed: {
    setComputedClass() {
      return this.isOpen
        ? 'z-50 fixed bottom-0 inset-x-0 px-4 mx-8 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center'
        : 'hidden'
    },
  },
  methods: {
    handleSwitchImage(imgSrc) {
      this.$emit('hover', imgSrc)
    },
    nextImageLeft() {
      this.$emit('image-left')
    },
    nextImageRight() {
      this.$emit('image-right', this.getNewImageSrc('right'))
    },
    getNewIndex(moveAction) {
      if (moveAction === 'right') {
        return this.currentActiveImageIndex() === this.imagesArray.length
          ? 0
          : this.currentActiveImageIndex() >= 0
          ? this.currentActiveImageIndex() + 1
          : this.currentActiveImageIndex()
      } else {
        // movimiento a izquierda
        return this.currentActiveImageIndex() === 0
          ? this.imagesArray.length
          : this.currentActiveImageIndex() <= this.imagesArray.length
          ? this.currentActiveImageIndex() - 1
          : this.currentActiveImageIndex()
      }
    },
    getNewImageSrc(moveAction) {
      return this.imagesArray.find(
        (image) =>
          image.imgSrc === this.imagesArray[this.getNewIndex(moveAction)].imgSrc
      )
    },
    currentActiveImageIndex() {
      return this.imagesArray.findIndex(
        (image) => image.imgSrc === this.activeImageSrc
      )
    },
  },
}
</script>
