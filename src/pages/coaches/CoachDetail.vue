<template>
  <div>
    <content>
      <h2 class="font-bold text-3xl">{{ fullName }}</h2>
      <h3 class="text-xl">${{ rate }}/hour</h3>

      <hr class="my-5" />

      <h2 class="font-bold">Interested? Reach now!</h2>
      <base-button link :to="contactLink">Contact</base-button>
      <router-view></router-view>

      <hr />
      <badge v-for="area in areas" :key="area" :title="area"></badge>
      <p>{{ desc }}</p>
    </content>
  </div>

  <!-- <router-view></router-view>
    <router-link to="/coaches/1/contact">Contact</router-link> -->
</template>


<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    desc() {
      return this.selectedCoach.description;
    },
  },
};
</script>