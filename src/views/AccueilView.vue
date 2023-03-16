<template>
  <div class="fade-container">
    <img class="fade-img" src="../assets/imageAccueil.jpg" />
    <img class="fade-img" src="../assets/image3.jpg" />
    <img class="fade-img" src="../assets/image4.jpg" />
  </div>
  <h1
    style="
      font-family: 'Arial, sans-serif', Courier, monospace;
      font-size: 36px;
      font-weight: bold;
      color: #333;
    "
  >
    Les offres de la semaine !!!
  </h1>
  <div class="image-grid">
    <AccueilComponent
      v-for="checkout in checkouts"
      :key="checkout.id"
      :checkout="checkout"
    />
  </div>
</template>

<script>
import AccueilComponent from "@/components/AccueilComponent.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "AccueilView",
  components: {
    AccueilComponent,
  },
  data() {
    return {
      checkouts: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.checkouts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    const images = document.querySelectorAll(".fade-img");
    const duration = 7000;
    let currentImageIndex = 0;

    function fadeOutImage() {
      images[currentImageIndex].classList.add("fade-out");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.remove("fade-out");
      setTimeout(fadeOutImage, duration);
    }
    fadeOutImage();
  },
};
</script>

<style scoped>
.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
  clear: both;
}
.fade-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 2s;
}

.fade-img.fade-out {
  opacity: 0;
}
.fade-container {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
}
</style>
