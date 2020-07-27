<!-- Formulario simple de un solo campo para que usuario se pueda suscribir a un newsletter -->
<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2
        class="font-inkfree text-3xl leading-9 font-extrabold tracking-tight text-an-azul-oscuro sm:text-4xl sm:leading-10"
      >
        ¿Quieres estar a la última en tendencias de boda?
        <br class="hidden sm:inline" />
      </h2>
      <div class="font-eras text-an-cielo text-xl">
        Únete a nuestro newsletter.
      </div>
      <!-- Datos de usuario -->
      <form class="mt-8 mb-2 sm:flex">
        <input
          v-model="userData.email"
          aria-label="Email address"
          type="email"
          required
          class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
          placeholder="Tu email"
        />
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-an-salmon hover:bg-an-crema focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            @click.prevent="checkEmailValidity"
          >
            Unirme
          </button>
        </div>
      </form>
      <!-- Mensaje de error -->
      <div v-if="errorsFlag.email" class="text-sm text-red-700">
        {{ errorsFlag.email }}
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/plugins/firebaseConfig.js";
export default {
  data() {
    return {
      userData: {
        email: "",
      },
      errorsFlag: {
        email: "",
      },
    };
  },
  methods: {
    /** Chequear que los campos no estén vacíos y que sea un email valido */
    checkEmailValidity() {
      this.errorsFlag.email = "";
      const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.userData.email.length <= 0)
        this.errorsFlag.email =
          "Por favor, indica un email al que podamos contactarte.";
      else if (!regEx.test(String(this.userData.email).toLowerCase())) {
        this.errorsFlag.email =
          "Por favor, introduce un email válido al que podamos contactarte";
      } else {
        this.errorsFlag.email = "";
        this.addUserToNewsletter(this.$router);
        return true;
      }
      return false;
    },
    /** Llamada a Firebase para añadir usuario a BBDD */
    addUserToNewsletter(router) {
      // Add a new document to collection
      db.collection("newsletterform")
        .doc(this.userData.email)
        .set({
          email: this.userData.email,
        })
        .catch(function(error) {
          router.push("/error");
          return;
        });
      // resetear email a blanco en caso de exito
      this.userData.email = "";
    },
  },
};
</script>

<style scoped>
.font-free {
  font-family: "Freestyle";
}

.font-eras {
  font-family: "Eraslight";
}

.font-inkfree {
  font-family: "Inkfree";
}
</style>
