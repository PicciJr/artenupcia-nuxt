<!-- Footer con los links a redes sociales -->
<template>
  <div class="w-full mb-8 bg-white">
    <div class="flex justify-center items-center">
      <div class="flex justify-center sm:pl-16 w-full sm:w-5/6">
        <div
          v-for="profile in socialProfiles"
          :key="profile.id"
          class="p-2"
        >
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
            imgAlt: ''
          }
        ]
      }
    }
  }
}
</script>
