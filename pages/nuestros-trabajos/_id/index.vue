<template>
  <div>
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="px-4 xl:mx-24">
      <div class="flex flex-col py-4 xl:flex-row justify-center">
        <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
          <CardNuestrosTrabajos :imgSrc="imgSrc" />
          <!-- Thumbnail fotos -->
          <div class="flex p-2 justify-center">
            <div
              v-for="thumbnailImgSrc in thumbnailArray"
              :key="thumbnailImgSrc.id"
            >
              <ThumbnailMedia
                v-if="thumbnailImgSrc !== ''"
                @hover="handleSwitchImage"
                :imgSrc="thumbnailImgSrc"
              />
            </div>
          </div>
        </div>
        <!-- Contenido texto de trabajo -->
        <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
          <h2 class="text-2xl">{{ headingText }}</h2>
          <div
            class="py-4 text-sm text-an-azul-oscuro sm:text-base text-justify"
          >
            {{ mainText }}
          </div>
        </div>
      </div>
    </div>
    <!-- Call to action del usuario -->
    <CallToActionBanner class="mb-8" linkTo="/contacto" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'
import CardNuestrosTrabajos from '@/components/CardNuestrosTrabajos'
import CallToActionBanner from '@/components/CallToActionBanner'
import ThumbnailMedia from '@/components/ThumbnailMedia'
import { db } from '@/plugins/firebaseConfig.js'

export default {
  components: {
    Header,
    MenuNavbar,
    CardNuestrosTrabajos,
    CallToActionBanner,
    ThumbnailMedia
  },
  asyncData({ app, store }) {
    return db
      .collection('fl_content')
      .doc(store.state.postSelectedId)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          // return trabajo
          return {
            headingText: doc.data().headingText,
            mainText: doc.data().mainText,
            imgSrc: doc.data().mainImgSrc,
            thumbnailArray: [
              doc.data().imgLink1,
              doc.data().imgLink2,
              doc.data().imgLink3,
              doc.data().imgLink4,
              doc.data().imgLink5
            ]
          }
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error)
      })
  },
  methods: {
    handleSwitchImage(src) {
      this.imgSrc = src
    }
  }
}
</script>
