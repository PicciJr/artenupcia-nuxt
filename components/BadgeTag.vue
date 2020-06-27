<template>
  <div class="m-2">
    <span
      class="inline-flex items-center px-2 py-1 rounded-md text-sm leading-5 cursor-pointer"
      :class="setBadgeStyle"
      @click="setBadgeStatus"
    >
      {{ badge.badgeText }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      default() {
        return {
          idBadge: -1,
          badgeText: 'Filtro',
          isActive: false
        }
      }
    },
    /** blue, red, gray */
    color: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    /** Setear el estilo del color del badge segun lo que haga el usuario */
    setBadgeStyle() {
      let computedClass = ''
      computedClass =
        this.color === 'blue' && this.badge.isActive === false
          ? 'font-medium bg-blue-100 text-blue-800 hover:shadow-outline border border-blue'
          : this.color === 'blue' && this.badge.isActive
          ? 'font-extrabold bg-blue-300 text-blue-800 border border-blue'
          : this.color === 'red' && this.badge.isActive === false
          ? 'font-medium bg-red-100 text-red-800 hover:shadow-outline border border-red'
          : this.color === 'red' && this.badge.isActive
          ? 'font-extrabold bg-red-300 text-red-800 border border-red'
          : this.color === 'gray' && this.badge.isActive === false
          ? 'font-medium bg-gray-100 text-gray-800 hover:shadow-outline border border-gray'
          : this.color === 'gray' && this.badge.isActive
          ? 'font-extrabold bg-gray-300 text-gray-800 border border-gray'
          : ''
      return computedClass
    }
  },
  methods: {
    /** Toggle del estado de la badge cuando pulsa el usuario y comunicar al padre */
    setBadgeStatus() {
      this.$emit('click', this.badge.idBadge)
    }
  }
}
</script>
