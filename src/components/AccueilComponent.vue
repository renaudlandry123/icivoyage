<template>
  <router-link :to="{ name: 'CheckoutDetails', params: { id: checkout.id } }">
    <div class="accueil">
      <div class="image-grid">
        <div v-if="checkout" class="image-container">
          <img :src="checkout.image" />
          <div class="image-overlay">
            <p class="price">${{ checkout.price }}</p>
            <p class="location">{{ checkout.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    checkout: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  margin: 20px;
  width: 350px;
  height: 200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.image-container:hover img {
  transform: scale(1.1);
}

.image-overlay {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 20px;
  cursor: pointer;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.image-overlay p {
  color: #fff;
  font-size: 16px;
}

.price {
  color: #fff;
  font-size: 16px;
  text-align: left;
  padding-right: 10px;
  margin: 0;
}

.location {
  color: #fff;
  font-size: 16px;
  text-align: right;
  margin: 55px;
}
</style>
