<template>
  <div class="flex flex-col text-gray-600 font-eras">
    <!-- Email -->
    <label>Email:</label>
    <div class="mb-4">
      <div class="flex relative">
        <input
          v-model="userData.email"
          class="relative w-full sm:w-1/2 mb-2 pl-6 bg-white h-10 rounded-lg text-sm focus:outline-none"
          :class="{
            'border-2 border-r-4 border-red-700 shadow-md':
              errorsFlag.email.length > 0,
            'border-2 border-gray-300': errorsFlag.email.length <= 0
          }"
          type="email"
          @input="checkEmailValidity"
        />
        <svg
          class="absolute pt-2 w-6 h-6"
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
    <!-- Telefono -->
    <label>Teléfono móvil:</label>
    <div class="flex relative mb-6">
      <input
        v-model="userData.telefono"
        class="relative w-full sm:w-1/2 mb-2 pl-6 bg-white h-10 rounded-lg border-2 border-gray-300 text-sm focus:outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="absolute pt-2 w-6 h-6"
      >
        <path
          d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"
        />
      </svg>
    </div>
    <!-- Num invitaciones -->
    <label>Numero de invitaciones aproximado:</label>
    <div class="mb-4">
      <div class="flex max-w-md relative">
        <div class="mb-2">
          <button
            type="button"
            class="relative inline-flex items-center px-2 sm:px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            :class="{
              'bg-an-crema opacity-75 font-extrabold bg-an':
                opcionInvitaciones === 0,
              'border-2 border-r-4 border-red-700 shadow-md':
                errorsFlag.invitaciones.length > 0
            }"
            @click="setOpcionInvitaciones(0)"
          >
            Menos de 50
          </button>
          <button
            type="button"
            class="relative inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            :class="{
              'bg-an-crema opacity-75 font-extrabold': opcionInvitaciones === 1,
              'border-2 border-r-4 border-red-700 shadow-md':
                errorsFlag.invitaciones.length > 0
            }"
            @click="setOpcionInvitaciones(1)"
          >
            Entre 50-100
          </button>
          <button
            type="button"
            class="relative inline-flex items-center px-2 sm:px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            :class="{
              'bg-an-crema opacity-75 font-extrabold': opcionInvitaciones === 2,
              'border-2 border-r-4 border-red-700 shadow-md':
                errorsFlag.invitaciones.length > 0
            }"
            @click="setOpcionInvitaciones(2)"
          >
            Más de 100
          </button>
        </div>
      </div>
      <div v-if="errorsFlag.invitaciones" class="text-sm text-red-700 mb-6">
        {{ errorsFlag.invitaciones }}
      </div>
    </div>
    <!-- Interes principal -->
    <label>¿En qué estáis más interesados?</label>
    <div class="mb-6">
      <div class="inline-block relative w-64 max-w-md">
        <select
          v-model="userData.opcionInteres"
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>Invitaciones de Boda</option>
          <option>Papelería completa de Boda</option>
          <option>Papelería de Eventos</option>
          <option>No lo sé, ¿me asesorais? &#128517;</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- Text box -->
    <label>Cuéntanos tu idea y las dudas que puedas tener:</label>
    <div class="mb-4">
      <textarea
        v-model="userData.textoLargo"
        class="w-full p-2 mb-2 shadow-lg rounded-md resize-none"
        :class="{
          'border-2 border-r-4 border-red-700 shadow-md':
            errorsFlag.textoLargo.length > 0,
          'border border-gray-300': errorsFlag.textoLargo.length <= 0
        }"
        rows="3"
        @input="checkTextoLargoValidity"
      ></textarea>
      <div v-if="errorsFlag.textoLargo" class="text-sm text-red-700 mb-6">
        {{ errorsFlag.textoLargo }}
      </div>
    </div>

    <!-- Submit button -->
    <div>
      <button
        class="w-full flex items-center justify-center py-3 border border-transparent font-sans text-base leading-6 font-medium rounded-md text-black bg-an-salmon hover:bg-an-crema focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        @click="checkInputFields"
      >
        Confirmar datos
      </button>
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      userData: {
        email: '',
        invitaciones: '',
        opcionInteres: 'Invitaciones de Boda',
        textoLargo: '',
        telefono: ''
      },
      errorsFlag: {
        email: '',
        invitaciones: '',
        textoLargo: ''
      },
      formSubmitted: false,
      opcionInvitaciones: -1
    }
  },
  methods: {
    checkInputFields() {
      // todo tiene que estar relleno
      // datos validos, si todo ok entonces enviar a BBDD
      this.formSubmitted = true
      this.checkEmailValidity()
      this.checkInvitacionesValidity()
      this.checkTextoLargoValidity()
      if (
        this.checkEmailValidity() &&
        this.checkInvitacionesValidity() &&
        this.checkTextoLargoValidity()
      ) {
        this.addUserToDatabase(this.$router)
      }
    },
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
    checkInvitacionesValidity() {
      if (this.formSubmitted) {
        if (this.userData.invitaciones.length <= 0)
          this.errorsFlag.invitaciones =
            '¿Cuántas invitaciones necesitas aproximadamente?'
        else {
          this.errorsFlag.invitaciones = ''
          return true
        }
      }
      return false
    },
    checkTextoLargoValidity() {
      this.errorsFlag.textoLargo = ''
      if (this.formSubmitted) {
        if (this.userData.textoLargo.length <= 0)
          this.errorsFlag.textoLargo =
            'Saber más de vosotros nos ayuda a obtener un resultado que seguro que os encantará'
        else {
          this.errorsFlag.textoLargo = ''
          return true
        }
        return false
      }
    },
    addUserToDatabase(router) {
      const that = this
      // Add a new document in collection "cities"
      db.collection('contactformusers')
        .doc(this.userData.email)
        .set({
          email: this.userData.email,
          telefono: this.userData.telefono,
          invitaciones: this.userData.invitaciones,
          interesPrincipal: this.userData.opcionInteres,
          textoDescriptivo: this.userData.textoLargo
        })
        .then(function() {
          router.push('/contacto-exito')
        })
        .catch(function(error) {
          router.push('/error')
        })
    },
    setOpcionInvitaciones(opcionSeleccionada) {
      this.errorsFlag.invitaciones = ''
      if (opcionSeleccionada === 0) this.userData.invitaciones = 'Menos de 50'
      else if (opcionSeleccionada === 1)
        this.userData.invitaciones = 'Entre 50-100'
      else if (opcionSeleccionada === 2)
        this.userData.invitaciones = 'Más de 100'
      this.opcionInvitaciones = opcionSeleccionada
    }
  }
}
</script>

<style scoped>
.font-eras {
  font-family: 'Eraslight';
}

.font-free {
  font-family: 'Freestyle';
}

.font-inkfree {
  font-family: 'Inkfree';
}
</style>
