<!-- Footer con los links a redes sociales -->
<template>
  <div class="w-full mb-4 bg-white">
    <div class="flex items-center justify-center mb-8">
      <div class="flex items-center justify-center w-full sm:pl-16 sm:w-5/6">
        <div v-for="profile in socialProfiles" :key="profile.id" class="p-2">
          <a :href="profile.linkTo" target="_blank">
            <img
              class="w-16 cursor-pointer"
              :src="profile.imgSrc"
              :alt="profile.imgAlt"
            />
          </a>
        </div>
      </div>
    </div>
    <!-- Politica privacidad -->
    <div class="flex justify-center text-xs text-gray-600">
      <div class="pr-8 cursor-pointer">
        <nuxt-link to="/politica-privacidad">
          Política de privacidad
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/cookies">
          Cookies
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /** Links a RRSS */
    socialProfiles: {
      type: Array,
      default() {
        return [
          {
            linkTo: '',
            imgSrc: '',
            imgAlt: '',
          },
        ]
      },
    },
  },
}
</script>
