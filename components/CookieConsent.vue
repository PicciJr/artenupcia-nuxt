<!-- Cookies banner que se puede usar para informar al usuario -->
<template>
  <div
    v-show="!hasCookieConsent"
    class="absolute flex items-center justify-center w-full px-4 py-1 font-semibold text-gray-900 bg-blue-200 border-t-4 rounded-lg shadow-md opacity-25 border-teal"
  >
    <!-- Text content -->
    <div class="pr-4">
      Este sitio web usa Cookies para ofrecerte una mejor experiencia en nuestra
      web.
    </div>
    <button class="w-64 p-1 bg-blue-500 rounded-lg" @click="closeCookiesBanner">
      Lo entiendo
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasCookieConsent: false,
    }
  },
  methods: {
    /** Ocultar banner de las cookies */
    closeCookiesBanner() {
      this.hasCookieConsent = true
    },
  },
}
</script>

<style></style>
