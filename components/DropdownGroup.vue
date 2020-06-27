<!-- Grupo de dropdown de elementos -->
<template>
  <div
    class="relative w-full sm:w-1/3 inline-block text-left"
    @click="toggleVisibility"
  >
    <div>
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex justify-between w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {{ setOptionCurrentlySelected }}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </span>
    </div>
    <div class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg">
      <div class="rounded-md bg-white shadow-xs" :class="setVisibility">
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            v-for="option in options"
            :key="option.id"
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            @click="setOptionSelected(option.idOption)"
            >{{ option.optionText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [
          {
            idOption: 0,
            optionText: ''
          }
        ]
      }
    }
  },
  data() {
    return {
      isVisible: false,
      currentSelectedOptionId: 0
    }
  },
  computed: {
    /** Toggle de la visibilidad del dropdown o no */
    setVisibility() {
      return this.isVisible ? 'block' : 'hidden'
    },
    /** Set opcion visible segun lo que selecciona el usuario */
    setOptionCurrentlySelected() {
      return this.options.find(
        option => option.idOption === this.currentSelectedOptionId
      ).optionText
    }
  },
  methods: {
    /** Toggle de la visibilidad del dropdown o no */
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    /** Cambiar opcion seleccionada por el usuario en el dropdown */
    setOptionSelected(idOption) {
      this.currentSelectedOptionId = idOption
      this.$emit('selected', idOption)
    }
  }
}
</script>
