<template>
  <div>
    <!-- Header with icon logo -->
    <Header class="relative top-0 z-30 w-full" />
    <!-- Menu nav Bar only visible in wide screens -->
    <MenuNavbar />
    <!-- No margin Hero cover -->
    <div class="mb-8">
      <HeroCover :class="{ hidden: hideMainElements }" />
    </div>
    <div :class="{ hidden: hideMainElements }">
      <!--Contenedor para que tengan la misma identacion -->
      <div class="px-4 xl:px-24">
        <div class="sm:w-1/3 mt-2">
          <h2
            class="mb-2 font-znikomit text-2xl sm:text-3xl text-center"
            id="invitaciones-personalizadas"
          >
            Invitaciones personalizadas
          </h2>
        </div>
        <div class="w-full mb-2 sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
        <div class="flex flex-col mb-16 xl:flex-row justify-center">
          <div class="w-full p-1 sm:p-3 xl:p-4">
            <StyledRectangleShape
              :textRectangle="'Si tu boda es única, tu invitación también'"
            />
            <p
              class="font-gravity-l font-bold py-4 text-md text-gray-600 sm:text-xl text-justify"
            >
              ¿Te imaginas que vuestra invitación de boda fuera más que una
              invitación? En Artenupcia buscamos que vuestra papelería de boda
              sea única y especial. De calidad, y con un diseño original que
              refleje la esencia de cada pareja. Queremos plasmar vuestra
              historia, que con tan solo una invitación todos vuestros invitados
              sientan vuestro amor, sientan vuestra historia. Vuestra papelería
              de boda será inolvidable, les sorprenderá y hasta la guardarán de
              recuerdo. Nuestro modo de trabajar es muy sencillo, nos contáis
              vuestra historia o idea y nos ponemos manos a la obra para haceros
              unas invitaciones totalmente personalizadas y únicas pero
              sobretodo, vuestras.
            </p>
          </div>
          <div class="w-full p-1 sm:p-3 xl:p-4">
            <CardItem
              imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2FIMG_4968.jpg?alt=media&token=c2e98af1-f78d-4209-946d-fc745e033bd4"
            />
          </div>
        </div>
        <!--Como lo hacemos con foto roadmap -->
        <div class="sm:w-1/3">
          <h2 class="mb-2 font-znikomit text-2xl sm:text-3xl text-center">
            ¿Cómo lo hacemos?
          </h2>
        </div>
        <div class="w-full sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
      </div>
      <!-- Imagen roadmap, no padding full width -->
      <img
        class="w-full mt-8 hidden sm:block"
        src="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fcomo-lo-hacemos.jpg?alt=media&token=5c0a7405-7aef-4ea3-bc70-87c54e2b2cb0"
        alt="artenupcia-como-lo-hacemos"
      />
      <!-- Mobile version -->
      <img
        class="w-full sm:hidden"
        src="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fcomo-lo-hacemos-mobile.jpg?alt=media&token=65606a97-985d-4f8d-93b8-c4f097eab4d2"
        alt="artenupcia-como-lo-hacemos"
      />
      <!--Contenedor para que tengan la misma identacion -->
      <div class="px-4 xl:px-24">
        <!-- Flex -->
        <div class="flex flex-col xl:flex-row justify-center">
          <div class="w-full p-1 sm:p-3 xl:p-4">
            <p
              class="font-gravity-l font-bold text-md text-gray-600 sm:text-xl text-justify"
            >
              Mediante técnicas artesanales de pintura como acuarelas, tinta
              china, lápices o grafito, o también técnicas digitales, creamos
              vuestro diseño para aplicarlo en las invitaciones y crear vuestra
              papelería de boda. Si queréis un momento realmente especial os
              recomendamos que completéis las invitaciones con el resto de
              papelería que en Artenupcia podemos ofreceros.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-16 xl:flex-row justify-center">
          <div class="w-full xl:w-1/3 p-2 sm:p-3 xl:p-4">
            <CardItem
              imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2FIMG_4900%204000x4000.jpg?alt=media&token=f548c689-273d-421d-a3d3-a7b2dc67c6d3"
            />
          </div>
          <div class="w-full xl:w-1/3 p-2 sm:p-3 xl:p-4">
            <CardItem
              imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2FIMG_4969.jpg?alt=media&token=1fdd25aa-5cff-4029-9245-5a486bcd2756"
            />
          </div>
          <div class="w-full xl:w-1/3 p-2 sm:p-3 xl:p-4">
            <CardItem
              imgSrc="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2FIMG_4918.jpg?alt=media&token=497b01d0-1ab3-4c9e-974f-0fccb66d9fb5"
            />
          </div>
        </div>
        <!--Nuestros trabajos -->
        <div class="sm:w-1/3">
          <h2
            class="mb-2 font-znikomit text-2xl sm:text-3xl text-center"
            id="nuestros-trabajos"
          >
            Nuestros trabajos
          </h2>
        </div>
        <div class="w-full mb-2 sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
        <!-- Flex -->
        <div class="flex flex-col xl:flex-row">
          <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
            <p
              class="font-gravity-l font-bold text-md text-gray-600 sm:text-xl text-justify"
            >
              ¡Echa un vistazo a otras bodas y eventos maravillosos en los que
              hemos trabajado! Como cada trabajo para nosotros es único no vas a
              encontrar un catálogo de invitaciones pero puedes ver otros
              encargos que hemos hecho para coger ideas.
            </p>
          </div>
        </div>
        <!-- Loop para trabajos -->
        <div class="flex flex-col xl:flex-row flex-wrap">
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
        <div class="flex justify-center mb-16">
          <button
            class="w-1/2 sm:w-1/6 flex items-center justify-center sm:px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-an-salmon hover:bg-an-crema focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            <nuxt-link to="/nuestros-trabajos">
              Ver más trabajos
            </nuxt-link>
          </button>
        </div>
        <!--Sobre Artenupcia -->
        <div class="sm:w-1/3">
          <h2
            class="mb-2 font-znikomit text-2xl sm:text-3xl text-center"
            id="sobre-artenupcia"
          >
            Sobre Artenupcia
          </h2>
        </div>
        <div class="w-full mb-2 sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
        <!-- Flex -->
        <div class="flex flex-col mb-16 xl:flex-row justify-center">
          <div class="w-full p-1 sm:p-3 xl:p-4">
            <StyledRectangleShape
              :textRectangle="
                'Artenupcia nace y quiere que cada detalle de tu boda sea especial'
              "
            />
            <p
              class="font-gravity-l font-bold py-4 text-md text-gray-600 sm:text-xl text-justify"
            >
              Yo soy Begoña, enamorada del arte, y Artenupcia es mi proyecto
              personal. Desde la ilusión que me crea poder captar los momentos
              únicos de vuestra vida crece Artenupcia. Donde, desde el corazón,
              hacemos vuestros diseños a mano, con delicadeza y amor. Y es que
              para mí mi mayor emoción es en el momento en el que veis vuestra
              historia captada en vuestras invitaciones. Por eso estoy deseando
              ayudaros con la papelería única de vuestra boda. No dudéis en
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
        <div class="sm:w-1/3">
          <h2
            class="mb-2 font-znikomit text-2xl sm:text-3xl text-center"
            id="necesitas-inspiracion"
          >
            ¿Necesitas inspiración?
          </h2>
        </div>
        <div class="w-full sm:w-1/3 sm:pr-8 border-b border-an-marron"></div>
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
          <CarruselImagenes class="sm:hidden" :igPosts="igPosts" />
        </div>
        <!-- Feed Instagram desktop -->
        <div class="flex flex-col py-4 mb-4 xl:flex-row justify-center">
          <InstagramFeed :igPosts="igPosts" />
        </div>
      </div>
      <!--Newsletter -->
      <div class="relative flex flex-col py-8 justify-center items-center">
        <img
          class="w-2/6 pl-16 absolute bottom-0 left-0 hidden sm:block object-cover"
          style="transform: scaleX(-1)"
          src="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2Fflor-web.png?alt=media&token=7794d9ef-7b75-45ed-a59c-a463d1771919"
          alt="artenupcia-footer-image"
        />
        <div class="px-4">
          <NewsletterForm />
        </div>
        <!--Footer -->
        <Footer :socialProfiles="socialProfiles" />
        <img
          class="w-2/6 pl-16 absolute bottom-0 right-0 hidden sm:block object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2Fflor-web.png?alt=media&token=7794d9ef-7b75-45ed-a59c-a463d1771919"
          alt="artenupcia-footer-image"
        />
      </div>
    </div>
    <!-- Back to top button, solo visible en Desktop -->
    <div class="pb-4 pr-8" :class="setBackToTopVisibility">
      <ButtonBackToTop @click="handleBackToTop" />
    </div>
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
import ButtonBackToTop from '@/components/ButtonBackToTop'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  async asyncData({ app, params, error, store, redirect }) {
    /** Get nuestros trabajos */
    const trabajosArray = []
    const trabajos = await db
      .collection('fl_content')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // crear nuevo trabajo a partir de datos
          const newTrabajo = {
            id: doc.data().id,
            mainImgSrc: doc.data().mainImgSrc,
            footerText: doc.data().footerText,
            urlTo: doc.data().urlTo,
          }
          trabajosArray.push(newTrabajo)
        })
      })
      .catch((err) => {
        console.log(err)
        redirect('/error')
      })

    /** Get Instagram Posts */
    const postsArray = []
    const igPosts = await db
      .collection('instagramposts')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // crear nuevo post a partir de datos
          const newIgPost = {
            shortCode: doc.data().shortCode,
            linkTo: doc.data().linkTo,
          }
          postsArray.push(newIgPost)
        })
      })
      .catch((err) => {
        console.log(err)
        redirect('/error')
      })

    /** Retorna los posts de Instagram y los trabajos */
    return {
      trabajos: trabajosArray,
      igPosts: postsArray,
    }
  },
  data() {
    return {
      hideMainElements: false,
      /** Perfiles en RRSS para el footer */
      socialProfiles: [
        {
          linkTo: 'https://www.instagram.com',
          imgSrc:
            'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2Flogo%20instagram.eLPebNaf06Ip6yetKwzi.jpg?alt=media&token=af592d0e-94a7-4e55-82ac-b4c5b761cdf2',
          imgAlt: 'artenupcia-instagram',
        },
        {
          linkTo: 'https://www.facebook.com',
          imgSrc:
            'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2Flogo%20fb.t1sG8o58wO0mqKqmxtDE.jpg?alt=media&token=cef93cb7-9022-4b68-b4db-eee5ca9ef922',
          imgAlt: 'artenupcia-facebook',
        },
        {
          linkTo: 'https://www.pinterest.com',
          imgSrc:
            'https://firebasestorage.googleapis.com/v0/b/artenupcia.appspot.com/o/flamelink%2Fmedia%2Fsized%2F900_9999_100%2Flogo%20pinterest.TTxWmYJNx5G1LeMJFrRT.jpg?alt=media&token=d9cc4412-bd63-4c30-a7c1-8b272fc8bd4d',
          imgAlt: 'artenupcia-pinterest',
        },
      ],
      isBackToTopVisible: false,
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
    BannerTextOnly,
    Footer,
    ButtonBackToTop,
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    /** Controlar visibilidad del boton back to top */
    setBackToTopVisibility() {
      return this.isBackToTopVisible
        ? 'hidden sm:block fixed bottom-0 right-0'
        : 'hidden'
    },
  },
  methods: {
    /** Ocultar elementos principales para el menu del movil */
    handleToggleMenu(status) {
      this.hideMainElements = !status
    },
    /** Enviar usuario a trabajo seleccionado */
    redirectToTrabajo(idTrabajo) {
      this.$router.push('/nuestros-trabajos/' + idTrabajo)
    },
    /** Funcion para controlar en qué posicion de scroll está el usuario y en base
     * a eso ocultar o mostrar el boton back to top
     */
    handleScroll() {
      window.scrollY > window.innerHeight
        ? (this.isBackToTopVisible = true)
        : (this.isBackToTopVisible = false)
    },
    /** Funcion que recibe evento y gestiona el scroll hacia arriba */
    handleBackToTop() {
      window.scroll(0, 0)
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
