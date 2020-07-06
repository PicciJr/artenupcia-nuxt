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
          <!-- Etiquetas de trabajo -->
          <div class="mb-2">
            <badge-tag-group v-if="badgeItems" :badgeItems="badgeItems"></badge-tag-group>
          </div>
          <h2 class="font-eras text-2xl">{{ headingText }}</h2>
          <div
            class="font-eras py-4 text-md text-an-azul-oscuro sm:text-lg font-bold text-justify"
          >
            {{ mainText }}
          </div>
        </div>
      </div>
    </div>
    <!-- Call to action del usuario -->
    <div class="p-2">
      <CallToActionBanner class="mb-8" linkTo="/contacto" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'
import CardNuestrosTrabajos from '@/components/CardNuestrosTrabajos'
import CallToActionBanner from '@/components/CallToActionBanner'
import ThumbnailMedia from '@/components/ThumbnailMedia'
import BadgeTagGroup from '@/components/BadgeTagGroup'
import { db } from '@/plugins/firebaseConfig.js'

export default {
  components: {
    Header,
    MenuNavbar,
    CardNuestrosTrabajos,
    CallToActionBanner,
    ThumbnailMedia,
    BadgeTagGroup
  },
  asyncData({ app, store, route, redirect }) {
    return db
      .collection('fl_content')
      .doc(route.params.id)
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
            ],
            badgeItems: doc.data().tags
          }
        } else {
          redirect('/error')
        }
      })
      .catch(err => redirect('/error'))
  },
  methods: {
    handleSwitchImage(src) {
      this.imgSrc = src
    }
  }
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
</style>
