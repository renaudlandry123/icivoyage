<template>
  <nav :style="{ backgroundColor: navBarColor, position: navBarPosition }">
    <img id="logo" :src="require('@/assets/logo.jpg')" @click="logoClicked" />
    <router-link to="/" class="nav-link">Accueil</router-link>
    <router-link to="/Reservation" class="nav-link">Réservation</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      navBarColor: "rgba(128, 128, 128, 0.5)",
      navBarPosition: "absolute",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        this.navBarColor = "black";
        this.navBarPosition = "fixed";
      } else {
        this.navBarColor = "rgba(128, 128, 128, 0.5)";
        this.navBarPosition = "absolute";
      }
    },
    logoClicked() {
      if (this.$route.path === "/") {
        window.location.reload();
        window.scrollTo(0, 0);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 30px;
}

#logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px; /* adjust as needed */
  height: 107px; /* adjust as needed */
}
#logo:hover {
  cursor: pointer;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

nav:hover {
  background-color: black;
}

.nav-link:hover {
  color: yellow;
}

.nav-link.router-link-active {
  color: yellow;
}

/* Styles for the page content */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.refresh-text {
  cursor: pointer;
}

body {
  background: white;
  margin: 0;
}

/* Styles for the image */
nav #img {
  position: left;
  width: 50px;
  height: 50px;
}

/* Styles for the little bag of money */
.money-bag {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 20px;
  font-size: 18px;
}

.money-bag img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

/* Styles for the payment popup */
.payment-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.payment-popup h2 {
  margin-bottom: 10px;
}

.payment-popup button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #008000;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.payment-popup button:hover {
  background-color: #006400;
}
</style>
