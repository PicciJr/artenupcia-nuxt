<template>
  <div>
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <!-- No margin Hero cover -->
    <HeroCover :class="{ hidden: hideMainElements }" />
    <!--Contenedor de todo el layout para que tengan la misma identacion -->
    <div class="px-4 xl:mx-24" :class="{ hidden: hideMainElements }">
      <div class="sm:w-1/3 mt-2">
        <h2
          class="mb-2 font-inkfree text-2xl sm:text-3xl text-center"
          id="invitaciones-personalizadas"
        >
          Invitaciones personalizadas
        </h2>
      </div>
      <div class="w-full sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
      <!-- Flex -->
      <div class="flex flex-col py-2 xl:flex-row justify-center">
        <div class="w-full p-1 sm:p-3 xl:p-4">
          <StyledRectangleShape
            :textRectangle="'Si tu boda es única, tu invitación también'"
          />
          <p
            class="font-eras py-4 text-sm text-an-azul-oscuro sm:text-xl text-justify"
          >
            ¿Te imaginas que vuestra invitación de boda fuera más que una
            invitación? En Artenupcia buscamos que vuestra papelería de boda sea
            única y especial. De calidad, y con un diseño original que refleje
            la esencia de cada pareja. Queremos plasmar vuestra historia, que
            con tan solo una invitación todos vuestros invitados sientan vuestro
            amor, sientan vuestra historia. Vuestra papelería de boda será
            inolvidable, les sorprenderá y hasta la guardarán de recuerdo.
            Nuestro modo de trabajar es muy sencillo, nos contáis vuestra
            historia o idea y nos ponemos manos a la obra para haceros unas
            invitaciones totalmente personalizadas y únicas pero sobretodo,
            vuestras.
          </p>
        </div>
        <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
          <CardItem
            imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2FIMG_4974.jpg?alt=media&token=3220d014-1f93-4964-b9b4-4eee372a3793"
          />
        </div>
      </div>
      <!--Como lo hacemos -->
      <div class="sm:w-1/3 mt-2">
        <h2 class="mb-2 font-inkfree text-2xl sm:text-3xl text-center">
          ¿Cómo lo hacemos?
        </h2>
      </div>
      <div class="w-full sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
      <!-- Flex -->
      <div class="flex flex-col py-4 xl:flex-row justify-center">
        <div class="w-full p-1 sm:p-3 xl:p-4">
          <p
            class="font-eras py-4 text-sm text-an-azul-oscuro sm:text-xl text-justify"
          >
            Mediante técnicas artesanales de pintura como acuarelas, tinta
            china, lápices o grafito, o también técnicas digitales creamos
            vuestro diseño para aplicarlo en las invitaciones y crear vuestra
            papelería de boda. Si queréis un momento realmente especial os
            recomendamos que completéis las invitaciones con el resto de
            papelería que en Artenupcia podemos ofrecerte.
          </p>
        </div>
      </div>
      <div class="flex flex-col py-4 xl:flex-row justify-center">
        <div class="w-full xl:w-1/3 p-1 sm:p-3 xl:p-4">
          <CardItem
            imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2FIMG_4974.jpg?alt=media&token=3220d014-1f93-4964-b9b4-4eee372a3793"
          />
        </div>
        <div class="w-full xl:w-1/3 p-1 sm:p-3 xl:p-4">
          <CardItem
            imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2FIMG_4974.jpg?alt=media&token=3220d014-1f93-4964-b9b4-4eee372a3793"
          />
        </div>
        <div class="w-full xl:w-1/3 p-1 sm:p-3 xl:p-4">
          <CardItem
            imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F1080_9999_100%2FIMG_4974.jpg?alt=media&token=3220d014-1f93-4964-b9b4-4eee372a3793"
          />
        </div>
      </div>
      <!--Nuestros trabajos -->
      <div class="sm:w-1/3 mt-2">
        <h2
          class="mb-2 font-inkfree text-2xl sm:text-3xl text-center"
          id="nuestros-trabajos"
        >
          Nuestros trabajos
        </h2>
      </div>
      <div class="w-full sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
      <!-- Flex -->
      <div class="flex flex-col py-4 xl:flex-row">
        <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
          <p
            class="font-eras py-4 text-sm text-an-azul-oscuro sm:text-xl text-justify"
          >
            Echa un vistazo a otras bodas y eventos maravillosos en los que
            hemos trabajado! Como cada trabajo para nosotros es único no vas a
            encontrar un catálogo de invitaciones pero puedes ver otros encargos
            que hemos hecho para coger ideas.
          </p>
        </div>
        <!--Slider solo movil -->
        <CarruselImagenes class="sm:hidden" />
      </div>
      <!-- Loop para trabajos -->
      <div class="flex flex-col py-4 xl:flex-row flex-wrap">
        <div
          v-for="trabajo in trabajos"
          :key="trabajo.id"
          class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4 transition duration-500 ease-in-out transform hover:-translate-y-4"
          @click="redirectTo(trabajo.urlTo, trabajo.id)"
        >
          <CardNuestrosTrabajos
            v-if="trabajo.mainImgSrc"
            :imgSrc="trabajo.mainImgSrc"
            :footerText="trabajo.footerText"
          />
        </div>
      </div>
      <!-- <div class="flex justify-center">
        <button
          class="px-8 py-3 mt-2 mb-12 bg-an-cielo border border-an-salmon border-8 inline-block hover:bg-teal-500 hover:font-bold rounded-full shadow-lg text-black text-xl"
        >
          Ver más trabajos
        </button>
      </div> -->
      <!--Sobre Artenupcia -->
      <div class="sm:w-1/3 mt-2">
        <h2
          class="mb-2 font-inkfree text-2xl sm:text-3xl text-center"
          id="sobre-artenupcia"
        >
          Sobre Artenupcia
        </h2>
      </div>
      <div class="w-full sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
      <!-- Flex -->
      <div class="flex flex-col py-4 xl:flex-row justify-center">
        <div class="w-full p-1 sm:p-3 xl:p-4">
          <StyledRectangleShape
            :textRectangle="
              'Artenupcia nace y quiere que cada detalle de tu boda sea especial'
            "
          />
          <p
            class="font-eras py-4 text-sm text-an-azul-oscuro sm:text-xl text-justify"
          >
            Yo soy Begoña, enamorada del arte, y Artenupcia es mi proyecto
            personal. Desde la ilusión que me crea poder captar los momentos
            únicos de vuestra vida crece Artenupcia. Donde desde el corazón
            hacemos vuestros diseños, a mano, con delicadeza y amor. Y es que
            para mí mi mayor emoción es en el momento en el que veis vuestra
            historia captada en vuestras invitaciones.Por eso estoy deseando
            ayudaros con la papelería única de vuestra boda. No dudes en
            contactar conmigo y contarme vuestra idea para que juntos hagamos
            cada detalle de vuestra boda especial, al igual que vosotros y que
            vuestra historia.
          </p>
        </div>
        <div class="w-full p-1 sm:p-3 xl:p-4">
          <CardItem />
        </div>
      </div>
      <!--¿Necesitas inspiración? -->
      <div class="sm:w-1/3 mt-2">
        <h2
          class="mb-2 font-inkfree text-2xl sm:text-3xl text-center"
          id="necesitas-inspiracion"
        >
          ¿Necesitas inspiración?
        </h2>
      </div>
      <div class="w-full sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
      <!-- Flex -->
      <div class="flex flex-col py-4 xl:flex-row justify-center">
        <div class="w-full sm:pr-8">
          <!-- Instagram Banner -->
          <BannerTextOnly
            headingText="¡Écha un vistazo en nuestro Instagram!"
            mainText="Busca entre nuestros trabajos y momentos para encontrar a tus
                  musas:"
          >
            <template #svgLeft>
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </template>
          </BannerTextOnly>
        </div>
        <!--Slider solo movil -->
        <CarruselImagenes class="sm:hidden" />
      </div>
      <div class="flex flex-col py-4 xl:flex-row justify-center">
        <InstagramFeed :igPosts="igPosts" />
      </div>
      <!--Newsletter -->
      <div class="flex flex-col py-4 xl:flex-row justify-center">
        <NewsletterForm />
      </div>
    </div>
    <!--Contenedor de todo el layout para que tengan la misma identacion -->
  </div>
</template>

<script>
import { db } from '@/plugins/firebaseConfig.js'
import Header from '@/components/Header'
import MenuNavbar from '@/components/MenuNavbar'
import HeroCover from '@/components/HeroCover'
import StyledRectangleShape from '@/components/StyledRectangleShape'
import CardItem from '@/components/CardItem'
import CarruselImagenes from '@/components/CarruselImagenes'
import InstagramFeed from '@/components/InstagramFeed'
import instagramApi from '@/api/instagramApi.js'
import NewsletterForm from '@/components/NewsletterForm'
import CardNuestrosTrabajos from '@/components/CardNuestrosTrabajos'
import BannerTextOnly from '@/components/BannerTextOnly'

export default {
  name: 'App',
  asyncData({ app, params, error, store }) {
    /** IG posts are retrieved */
    // const posts = await instagramApi.getUserMedia()
    // console.log('esto son los posts: ' + posts)
    // return {
    //   igPosts: posts
    // }
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
  },
  data() {
    return {
      hideMainElements: false,
      igPosts: []
    }
  },
  components: {
    Header,
    MenuNavbar,
    HeroCover,
    StyledRectangleShape,
    CardItem,
    CarruselImagenes,
    InstagramFeed,
    NewsletterForm,
    CardNuestrosTrabajos,
    BannerTextOnly
  },
  methods: {
    handleToggleMenu(status) {
      this.hideMainElements = !status
    },
    /** Enviar usuario a trabajo seleccionado y actualizar el valor en store */
    redirectTo(link, idTrabajo) {
      this.$router.push('/nuestros-trabajos/' + link)
      this.$store.dispatch('setPostSelectedByUser', idTrabajo)
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
