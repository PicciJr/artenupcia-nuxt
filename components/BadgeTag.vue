<template>
  <div>
    <span
      class="inline-flex items-center px-2 py-1 rounded-md text-sm leading-5 cursor-pointer"
      :class="setColorStlye"
      @click="setBadgeStatus"
    >
      Badge
    </span>
  </div>
</template>

<script>
export default {
  props: {
    color: ''
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    /** Setear el estilo del color del badge segun lo que haga el usuario */
    setColorStlye() {
      if (!this.isActive)
        return (
          'font-medium bg-' +
          this.color +
          '-100 text-' +
          this.color +
          '-800 hover:shadow-outline border border-' +
          this.color
        )
      else
        return (
          'font-extrabold bg-' +
          this.color +
          '-300 text-' +
          this.color +
          '-800 border-2 border-' +
          this.color
        )
    }
  },
  methods: {
    /** Toggle del estado de la badge cuando pulsa el usuario y comunicar al padre */
    setBadgeStatus() {
      this.$emit('click', this.isActive)
      return (this.isActive = !this.isActive)
    }
  }
}
</script>
