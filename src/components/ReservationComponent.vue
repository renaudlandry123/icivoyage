<template>
  <div class="video-container">
    <video autoplay loop muted>
      <source src="../assets/videositewebs.mp4" type="video/mp4" />
    </video>
    <div class="form-container">
      <h2>
        inscrivez-vous pour un rendez-vous téléphonique avec notre équipe:
      </h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Prénom:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="lastname">Nom:</label>
          <input type="text" id="lastname" v-model="lastname" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="submit-button"
            :class="{ loading: isSubmitting }"
          >
            <span v-if="!isSubmitting">Soumettre</span>
            <span v-else>Soumis...</span>
          </button>
        </div>
      </form>
      <p class="form-note">Ceci n'est pas un vrai form !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationComponent",
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      isSubmitting: false,
    };
  },
  methods: {
    submitForm() {
      this.isSubmitting = true;
      setTimeout(() => {
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.isSubmitting = false;
      }, 3000);
    },
  },
};
</script>
<style scoped>
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

video {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  max-width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: -10px;
}

.submit-button {
  display: block;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button.loading {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-button:hover {
  background-color: #0062cc;
}

.fake-form {
  text-align: center;
  margin-top: 20px;
}
</style>
