<!-- Badge estatica que no es pulsable y que actua como componente etiqueta -->
<template>
  <div>
    <span
      class="inline-flex items-center px-2 py-1 rounded-md text-sm"
      :class="setBadgeStyle"
    >
      {{ badge }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: [Object, String],
      default() {
        return {
          idBadge: -1,
          badgeText: 'Filtro'
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
    /** Setear el estilo del color del badge segun los parametros recibidos */
    setBadgeStyle() {
      let computedClass = ''
      computedClass =
        this.color === 'blue'
          ? 'font-medium bg-blue-100 text-blue-800 border border-blue'
          : this.color === 'red'
          ? 'font-medium bg-red-100 text-red-800 border border-red'
          : this.color === 'gray' && this.isActive === false
          ? 'font-medium bg-gray-100 text-gray-800 hover:shadow-outline border border-gray'
          : ''
      return computedClass
    }
  }
}
</script>
