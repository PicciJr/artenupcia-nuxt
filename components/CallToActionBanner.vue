<template>
  <div
    class="flex flex-col justify-between items-center px-4 py-2 bg-an-cielo shadow-xl rounded-lg sm:flex-row"
  >
    <div
      class="flex justify-center items-center mb-2 px-4 text-sm text-white sm:justify-center sm:text-lg"
    >
      <div class="bg-an-azul-oscuro rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="p-1 h-8 w-8 text-white"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4h2v7h4v-7zM5 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          />
        </svg>
      </div>
      <div class="px-2 text-lg text-center sm:text-left text-white font-semibold">
        ¿Te gustan estilos como este? ¡Contáctanos aquí!
      </div>
    </div>
    <button
      class="w-full sm:w-1/4 flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-an-salmon hover:bg-an-crema focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      @click="$router.push(linkTo)"
    >
      ¡Empecemos!
    </button>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
