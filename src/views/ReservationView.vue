<template>
  <div class="Reservation">
    <ReservationComponent />
  </div>
</template>

<script>
import ReservationComponent from "@/components/ReservationComponent.vue";

export default {
  name: "ReservationView",
  components: {
    ReservationComponent,
  },
};
</script>
