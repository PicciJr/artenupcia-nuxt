<template>
  <div>
    <span
      class="inline-flex items-center px-2 py-1 rounded-md text-sm leading-5 cursor-pointer"
      :class="setBadgeStyle"
      @click="setBadgeStatus"
    >
      Badge
    </span>
  </div>
</template>

<script>
export default {
  props: {
    /** blue, red, gray */
    color: {
      type: String,
      default: 'blue'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /** Setear el estilo del color del badge segun lo que haga el usuario */
    setBadgeStyle() {
      let computedClass = ''
      computedClass =
        this.color === 'blue' && this.isActive === false
          ? 'font-medium bg-blue-100 text-blue-800 hover:shadow-outline border border-blue'
          : this.color === 'blue' && this.isActive
          ? 'font-extrabold bg-blue-300 text-blue-800 border-2 border-blue'
          : this.color === 'red' && this.isActive === false
          ? 'font-medium bg-red-100 text-red-800 hover:shadow-outline border border-red'
          : this.color === 'red' && this.isActive
          ? 'font-extrabold bg-red-300 text-red-800 border-2 border-red'
          : ''
      return computedClass
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
