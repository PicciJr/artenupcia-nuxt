<template>
  <div class="w-full h-24 mt-12 bg-white">
    <div class="flex justify-center items-center">
      <div v-for="profile in socialProfiles" :key="profile.id" class="w-16 p-2">
        <a :href="profile.linkTo" target="_blank">
          <img
            class="cursor-pointer"
            :src="profile.imgSrc"
            :alt="profile.imgAlt"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
