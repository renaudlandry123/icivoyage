import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import CheckoutDetails from "../views/CheckoutDetails.vue";
import ReservationView from "../views/ReservationView.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: AccueilView,
  },
  {
    path: "/Checkout/:id",
    name: "CheckoutDetails",
    props: true,
    component: CheckoutDetails,
  },
  {
    path: "/Reservation",
    name: "Reservation",
    component: ReservationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
