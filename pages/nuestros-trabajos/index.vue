<!-- Pagina para filtrado completo de todos los trabajos -->
<template>
  <div class="px-4 xl:mx-48">
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <div class="flex flex-col py-4 xl:flex-row flex-wrap">
      <div
        v-for="trabajo in trabajos"
        :key="trabajo.id"
        class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4 transition duration-500 ease-in-out transform hover:-translate-y-4"
        @click="redirectToTrabajo(trabajo.id)"
      >
        <CardNuestrosTrabajos
          v-if="trabajo.mainImgSrc"
          :imgSrc="trabajo.mainImgSrc"
          :footerText="trabajo.footerText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebaseConfig.js'
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'
import CardNuestrosTrabajos from '@/components/CardNuestrosTrabajos'
export default {
  components: {
    Header,
    MenuNavbar,
    CardNuestrosTrabajos
  },
  asyncData({ app, params, error, store, redirect }) {
    /** Get nuestros trabajos */
    const trabajosArray = []
    return db
      .collection('fl_content')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // crear nuevo trabajo a partir de datos
          const newTrabajo = {
            id: doc.data().id,
            mainImgSrc: doc.data().mainImgSrc,
            footerText: doc.data().footerText,
            urlTo: doc.data().urlTo
          }
          trabajosArray.push(newTrabajo)
        })
        return { trabajos: trabajosArray }
      })
      .catch(err => {
        console.log(err)
        redirect('/error')
      })
  },
  methods: {
    /** Enviar usuario a trabajo seleccionado */
    redirectToTrabajo(idTrabajo) {
      this.$router.push('/nuestros-trabajos/' + idTrabajo)
    }
  }
}
</script>
