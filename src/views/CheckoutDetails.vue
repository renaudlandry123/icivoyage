<template>
  <div class="product-page" :class="{ 'is-zoomed': isZoomed }">
    <div class="little-images" :class="{ 'is-blurred': isZoomed }">
      <img
        v-for="image in checkout.productImages"
        :key="image"
        :src="image"
        alt="little-image"
        @click="updateImage(image)"
      />
    </div>
    <div class="product-image">
      <img :src="checkout.image" alt="product-image" class="zoomed-image" />
      <img
        src="https://purepng.com/public/uploads/large/purepng.com-loupeloupesmall-magnifying-glass-1701527871709qdo7w.png"
        alt="magnifying-glass"
        class="magnifying-glass"
        @click="zoomImage"
      />
      <img
        src="https://i.pinimg.com/originals/2d/40/32/2d403254a449ae5ba40341d5d8131451.png"
        alt="close"
        class="close-icon"
        @click="closeZoom"
        v-if="isZoomed"
      />
    </div>
    <div class="checkout-rectangle" :class="{ 'is-blurred': isZoomed }">
      <div class="price-loc-wrapper">
        <div class="location">
          <h1>{{ checkout.location }}</h1>
        </div>
        <div class="price">{{ checkout.price }}$</div>
      </div>
      <form class="checkout-form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            v-model="firstName"
            required
          />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            v-model="lastName"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            required
          />
        </div>
        <button class="buy-button" @click="onSubmit">Buy</button>
      </form>
    </div>
  </div>
</template>
<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      price: 60000,
      checkout: null,
      isZoomed: false,
      firstName: "",
      lastName: "",
      email: "",
      balance: 100, // assume the user has 100 dollars in their account
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.checkout = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    zoomImage() {
      this.isZoomed = true;
    },
    closeZoom() {
      this.isZoomed = false;
    },
    updateImage(src) {
      this.checkout.image = src;
    },
    onSubmit() {
      if (this.firstName && this.lastName && this.email) {
        this.$router.push({ name: "Accueil" });
        alert("Sorry, too broke for that!");
      }
    },
  },
};
</script>
<style>
.is-blurred img {
  filter: blur(5px);
}
.product-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 100px;
}

.product-image {
  width: 700px;
  height: 500px;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  min-width: 500px;
  min-height: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.product-image img:first-child {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.magnifying-glass {
  position: absolute;
  top: 10px; /* set the top distance */
  left: 10px; /* set the left distance */
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.is-zoomed .magnifying-glass {
  display: none;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.is-zoomed .product-image {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-63%, -50%);
  z-index: 999;
  width: 60vw;
  height: 70vh;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.is-zoomed .product-image img:first-child {
  max-width: 100%;
  max-height: 100%;
}

.is-zoomed .description,
.is-zoomed .checkout-rectangle {
  filter: blur(5px);
}

.checkout-rectangle {
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.price-loc-wrapper {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: bold;
  font-size: 15px;
  color: grey;
  text-align: left;
}

.location {
  font-family: "Courier New", Courier, monospace;
}

.description {
  flex-grow: 1;
  padding: -4px;
  margin-right: 700px;
}
.checkout-form {
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding: 20px;
}

.checkout-form label {
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
}

.checkout-form input {
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1rem;
}

.checkout-form button {
  margin-top: 20px;
}
.little-images {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 -5px;
  max-height: 100%;
}
.little-images img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 10px;
  max-height: 80px;
}
.little-images img {
  width: 70px;
  height: 50px;
  object-fit: cover;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.little-images img:hover {
  transform: scale(1.1);
}

.product-image {
  margin: 20px 20px 20px 100px;
}
</style>
