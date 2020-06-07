<template>
  <div class="px-4 xl:mx-24">
    <div class="flex flex-col py-4 xl:flex-row justify-center">
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
        <CardNuestrosTrabajos :imgSrc="imgSrc" />
        <!-- Thumbnail fotos -->
        <div class="flex p-2 justify-center">
          <ThumbnailMedia
            imgSrc="https://www.w3schools.com/howto/img_forest.jpg"
            @hover="handleSwitchImage"
          />
          <ThumbnailMedia
            imgSrc="https://cdn0.bodas.net/articles/images/vendor/5/8/4/9/4/r10_2x_angel-santamaria-trailer-michelle-e-israel-10062018-0159_1_58494.jpg"
            @hover="handleSwitchImage"
          />
          <ThumbnailMedia
            imgSrc="https://asset2.zankyou.com/images/mag-card-c/474/6e02/878/623/-/es/wp-content/uploads/2019/11/velas-estudio.jpg"
            @hover="handleSwitchImage"
          />
        </div>
      </div>
      <!-- Contenido texto de trabajo -->
      <div class="w-full xl:w-1/2 p-1 sm:p-3 xl:p-4">
        <h2 class="text-2xl">{{ headingText }}</h2>
        <div class="py-4 text-sm text-an-azul-oscuro sm:text-base">
          {{ mainText }}
        </div>
      </div>
    </div>
    <!-- Call to action del usuario -->
    <CallToActionBanner class="mb-8" linkTo="/contacto" />
  </div>
</template>

<script>
import CardNuestrosTrabajos from "@/components/CardNuestrosTrabajos";
import CallToActionBanner from "@/components/CallToActionBanner";
import ThumbnailMedia from "@/components/ThumbnailMedia";
import { db } from "@/plugins/firebaseConfig.js";

export default {
  components: {
    CardNuestrosTrabajos,
    CallToActionBanner,
    ThumbnailMedia,
  },
  data() {
    return {
      headingText: "",
      mainText: "",
      imgSrc: "",
    };
  },
  created() {
    const trabajo = db
      .collection("nuestrostrabajos")
      .doc(this.$route.params.id);

    return trabajo
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.headingText = doc.data().headingText;
          this.mainText = doc.data().mainText;
          this.imgSrc = doc.data().imgSrc;
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  },
  methods: {
    handleSwitchImage(src) {
      console.log("ejecutando en padre");
      this.imgSrc = src;
    },
  },
};
</script>
