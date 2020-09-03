<!-- Formulario de contacto con su logica de validacion de datos -->
<template>
  <div class="flex flex-col text-gray-600 font-gravity-l">
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
            'border-2 border-gray-300': errorsFlag.email.length <= 0,
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
        type="tel"
        maxlength="9"
        @keydown="handleTelefonoInput($event)"
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
    <label>Número de invitaciones aproximado:</label>
    <div class="mb-2">
      <input
        class="w-full h-10 rounded-lg pl-2 border-2 border-gray-300 sm:w-1/2"
        type="number"
        v-model="userData.invitaciones"
        min="0"
        @keyup="handleNumInvitaciones($event)"
      />
      <div v-if="errorsFlag.invitaciones" class="text-sm text-red-700 mb-6">
        {{ errorsFlag.invitaciones }}
      </div>
    </div>
    <!-- Interes principal -->
    <label>¿En qué estáis más interesados?</label>
    <div class="w-full sm:w-1/2 mb-6">
      <dropdown-group
        :options="opcionesDeInvitacion"
        @selected="handleInvitacionesOptionSelected"
      ></dropdown-group>
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
          'border border-gray-300': errorsFlag.textoLargo.length <= 0,
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
        invitaciones: 0,
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
      opcionesDeInvitacion: [
        {
          idOption: 0,
          optionText: 'Invitaciones de Boda',
        },
        {
          idOption: 1,
          optionText: 'Papelería completa de Boda',
        },
        {
          idOption: 2,
          optionText: 'Papelería de Eventos',
        },
        {
          idOption: 3,
          optionText: 'No lo sé, ¿me asesoráis?',
        },
      ],
    }
  },
  methods: {
    /** Chequeo de todos los campos e invocacion a firebase para guardar
     * todo tiene que estar relleno
     * datos validos, si todo ok entonces enviar a BBDD
     */
    checkInputFields() {
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
    /** Chequeo de numero de invitaciones seleccionado */
    checkInvitacionesValidity() {
      if (this.formSubmitted) {
        if (this.userData.invitaciones <= 0)
          this.errorsFlag.invitaciones =
            '¿Cuántas invitaciones necesitas aproximadamente?'
        else {
          this.errorsFlag.invitaciones = ''
          return true
        }
      }
      return false
    },
    /** Chequeo de text area */
    checkTextoLargoValidity() {
      this.errorsFlag.textoLargo = ''
      if (this.formSubmitted) {
        if (this.userData.textoLargo.length <= 0)
          this.errorsFlag.textoLargo =
            'Saber más de vosotros nos ayuda a obtener un resultado que seguro que os encantará.'
        else {
          this.errorsFlag.textoLargo = ''
          return true
        }
        return false
      }
    },
    /** Añadir a Firebase */
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
          textoDescriptivo: this.userData.textoLargo,
        })
        .then(function() {
          router.push('/contacto-exito')
        })
        .catch(function(error) {
          router.push('/error')
        })
    },
    /** Opcion de dropdown seleccionada por el usuario */
    handleInvitacionesOptionSelected(idOption) {
      const index = this.opcionesDeInvitacion.findIndex(
        (option) => option.idOption === idOption
      )
      if (index !== -1) {
        this.userData.opcionInteres = this.opcionesDeInvitacion[
          index
        ].optionText
      }
    },
    /** Prevenir que el usuario introduzca valores negativos */
    handleNumInvitaciones(event) {
      if (event.keyCode === 189 || event.keyCode === 109) {
        this.userData.invitaciones = 0
      }
    },
    /** Prevenir que el usuario solo introduzca valores numericos */
    handleTelefonoInput(event) {
      if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8) {
        return this.userData.telefono
      } else event.preventDefault()
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
