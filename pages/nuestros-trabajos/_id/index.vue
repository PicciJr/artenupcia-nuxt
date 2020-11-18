<!-- Pagina que representa un trabajo -->
<template>
  <div class="mb-32">
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="px-2 sm:px-24">
      <div class="flex flex-col justify-center py-4 xl:flex-row">
        <div class="w-full p-1 sm:p-3 xl:p-4">
          <CardNuestrosTrabajos :imgSrc="imgSrc" @click="openModalImage" />
          <!-- Thumbnail fotos -->
          <div class="flex justify-center p-2">
            <div
              v-for="thumbnailImgSrc in thumbnailArray"
              :key="thumbnailImgSrc.id"
            >
              <ThumbnailMedia
                v-if="thumbnailImgSrc !== ''"
                @hover="handleSwitchImage"
                @click="handleOpenImage"
                :imgSrc="thumbnailImgSrc"
              />
            </div>
          </div>
        </div>
        <!-- Contenido texto de trabajo -->
        <div class="w-full p-1 sm:p-8">
          <!-- Etiquetas de trabajo -->
          <div class="mb-2">
            <!-- <badge-tag-group
              v-if="badgeItems"
              :badgeItems="badgeItems"
            ></badge-tag-group> -->
          </div>
          <h2 class="mb-2 text-2xl font-znikomit sm:text-3xl">
            {{ headingText }}
          </h2>
          <div
            class="py-4 font-bold leading-8 text-justify text-gray-600 font-gravity-l text-md sm:text-xl"
          >
            <span v-html="mainText"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Call to action del usuario -->
    <div class="p-2">
      <CallToActionBanner class="mb-8" linkTo="/contacto" />
    </div>
    <!-- Modal para desplegar imagenes en grande, solo desktop -->
    <div class="hidden sm:block">
      <ModalPictureContainer
        @close-modal="hideModal"
        @hover="handleSwitchImage"
        @image-right="handleImageRight"
        :isOpen="modalOpened"
        :activeImageSrc="imgSrc"
        :imagesArray="thumbnailArrayFormatted"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'
import CardNuestrosTrabajos from '@/components/CardNuestrosTrabajos'
import CallToActionBanner from '@/components/CallToActionBanner'
import ThumbnailMedia from '@/components/ThumbnailMedia'
// import BadgeTagGroup from '@/components/BadgeTagGroup'
import ModalPictureContainer from '@/components/ModalPictureContainer'
import { db } from '@/plugins/firebaseConfig.js'

export default {
  components: {
    Header,
    MenuNavbar,
    CardNuestrosTrabajos,
    CallToActionBanner,
    ThumbnailMedia,
    // BadgeTagGroup,
    ModalPictureContainer,
  },
  data() {
    return {
      modalOpened: false,
    }
  },
  asyncData({ app, store, route, redirect }) {
    /** Get info del trabajo */
    return db
      .collection('fl_content')
      .doc(route.params.id)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          return {
            headingText: doc.data().headingText,
            mainText: doc.data().textMarkup,
            imgSrc: doc.data().mainImgSrc,
            thumbnailArray: [
              doc.data().imgLink1,
              doc.data().imgLink2,
              doc.data().imgLink3,
              doc.data().imgLink4,
              doc.data().imgLink5,
            ],
            badgeItems: doc.data().tags,
          }
        } else {
          redirect('/error')
        }
      })
      .catch((err) => redirect('/error'))
  },
  computed: {
    thumbnailArrayFormatted() {
      return this.thumbnailArray.map((thumb) => {
        thumb = {
          imgSrc: thumb,
          imgAlt: '',
          isOpen: false,
        }
        return thumb
      })
    },
  },
  methods: {
    /** Funcion para cambiar de imagen en el slider */
    handleSwitchImage(src) {
      this.imgSrc = src
    },
    openModalImage() {
      this.modalOpened = true
    },
    hideModal() {
      this.modalOpened = false
    },
    handleOpenImage(imgSrc) {
      this.openModalImage()
    },
    handleImageRight(imgSrc) {
      this.imgSrc = imgSrc
    },
  },
}
</script>

<style scoped>
.font-free {
  font-family: 'Freestyle';
}

.font-eras {
  font-family: 'Eraslight';
}

.font-inkfree {
  font-family: 'Inkfree';
}

.font-znikomit {
  font-family: 'Znikomit';
}

.font-gravity-l {
  font-family: 'GravityLight';
}
</style>
