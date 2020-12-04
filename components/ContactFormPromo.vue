<!-- Formulario de contacto con su logica de validacion de datos -->
<template>
  <div
    class="flex flex-col items-center justify-center text-gray-600 font-gravity-l"
  >
    <!-- Email -->
    <label>Tu Email:</label>
    <div class="mb-4">
      <div class="relative flex">
        <input
          v-model="userData.email"
          class="relative h-10 pl-6 mb-2 text-sm bg-white rounded-lg w-72 sm:w-96 focus:outline-none"
          :class="{
            'border-2 border-r-4 border-red-700 shadow-md':
              errorsFlag.email.length > 0,
            'border-2 border-gray-300': errorsFlag.email.length <= 0,
          }"
          type="email"
          @input="checkEmailValidity"
        />
        <svg
          class="absolute w-6 h-6 pt-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M13.6 13.47A4.99 4.99 0 0 1 5 10a5 5 0 0 1 8-4V5h2v6.5a1.5 1.5 0 0 0 3 0V10a8 8 0 1 0-4.42 7.16l.9 1.79A10 10 0 1 1 20 10h-.18.17v1.5a3.5 3.5 0 0 1-6.4 1.97zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
      </div>
      <div v-if="errorsFlag.email" class="text-sm text-red-700">
        {{ errorsFlag.email }}
      </div>
    </div>

    <!-- Submit button -->
    <div class="mb-2">
      <button :class="setButtonStyle" @click="checkInputFields">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          :class="isLoading ? 'animate-spin h-5 w-5 mr-3' : ''"
        >
          <path
            d="M3 18a7 7 0 0 1 4-6.33V8.33A7 7 0 0 1 3 2H1V0h18v2h-2a7 7 0 0 1-4 6.33v3.34A7 7 0 0 1 17 18h2v2H1v-2h2zM5 2a5 5 0 0 0 4 4.9V10h2V6.9A5 5 0 0 0 15 2H5z"
          />
        </svg>

        {{ ctaBtnText }}
      </button>
    </div>
    <!-- Aviso privacidad -->
    <div class="mt-8 text-xs font-medium text-gray-800 w-72">
      No usamos estos datos con fines publicitarios. Puedes consultar más sobre
      nuestra política sobre la privacidad
      <nuxt-link to="/politica-privacidad" class="font-extrabold">
        aquí.
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebaseConfig.js'
import axios from 'axios'
import DropdownGroup from '@/components/DropdownGroup'
export default {
  components: {
    DropdownGroup,
  },
  data() {
    return {
      /** Datos de usuario para validacion */
      userData: {
        email: '',
        invitaciones: null,
        opcionInteres: 'Invitaciones de Boda',
        textoLargo: '',
        telefono: '',
      },
      /** Para controlar visibilidad de mensajes de error */
      errorsFlag: {
        email: '',
        invitaciones: '',
        textoLargo: '',
      },
      formSubmitted: false, // controlar si el usuario ha enviado el formulario o no
      /** opcion dropdown de servicios disponibles */
      opcionesDePromocion: [
        {
          idOption: 0,
          optionText: 'Postales de Navidad',
        },
      ],
      isLoading: false,
    }
  },
  computed: {
    setButtonStyle() {
      return !this.isLoading
        ? 'flex items-center justify-center w-full px-4 py-3 font-sans text-base font-medium leading-6 text-black transition duration-150 ease-in-out border border-transparent rounded-md bg-an-salmon hover:bg-an-crema focus:outline-none focus:shadow-outline'
        : 'flex items-center justify-center w-full px-4 py-3 font-sans text-base font-medium leading-6 text-black transition duration-150 ease-in-out border border-transparent rounded-md bg-an-salmon hover:bg-an-crema focus:outline-none focus:shadow-outline opacity-25'
    },
    ctaBtnText() {
      return this.isLoading ? 'Enviando tus datos...' : '¡Quiero las postales!'
    },
  },
  methods: {
    /** Chequeo de todos los campos e invocacion a firebase para guardar
     * todo tiene que estar relleno
     * datos validos, si todo ok entonces enviar a BBDD
     */
    async checkInputFields() {
      this.formSubmitted = true
      if (this.checkEmailValidity()) {
        try {
          this.isLoading = true
          await this.addUserToDatabase(this.$router)
        } catch (err) {
          this.isLoading = true
          throw err
        }
        this.isLoading = true
      }
    },
    /** Chequeo de validez de email */
    checkEmailValidity() {
      this.errorsFlag.email = ''
      const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (this.formSubmitted) {
        if (this.userData.email.length <= 0)
          this.errorsFlag.email =
            'Por favor, indica un email al que podamos contactarte.'
        else if (!regEx.test(String(this.userData.email).toLowerCase())) {
          this.errorsFlag.email =
            'Por favor, introduce un email válido al que podamos contactarte'
        } else {
          this.errorsFlag.email = ''
          return true
        }
      }
      return false
    },
    /** Añadir a Firebase */
    addUserToDatabase(router) {
      const that = this
      // Add a new document in collection "cities"
      db.collection('contactform-navidad-2020')
        .doc(this.userData.email)
        .set({
          email: this.userData.email,
        })
        .then(function() {
          router.push('/contacto-exito-promo')
        })
        .catch(function(error) {
          router.push('/error')
        })
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

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
