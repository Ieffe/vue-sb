<template>
  <div>
    <base-dialogue
      :show="!!error"
      title="An error occured!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialogue>
    <content>
      <coach-filter @change-filter="setFilters"></coach-filter>
      <hr />
      <div class="coach-list-nav">
        <base-button mode="outline" @click="loadCoaches(true)"
          >Refresh</base-button
        >
        <base-button v-if="!isCoach && !isLoading" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold">List of Coaches</h1>
        <div v-if="isLoading">
          <spinner></spinner>
        </div>
        <ul class="mt-3" v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No Coaches.</h3>
      </div>
    </content>
  </div>
</template>

<script>
import CoachItem from "./CoachItem.vue";
import CoachFilter from "./CoachFilter.vue";

export default {
  components: { CoachItem, CoachFilter },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forcedRefresh: refresh,
        });
        this.isLoading = false;
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    handleError() {
      this.error = null;
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
};
</script>

<style lang="postcss" scoped>
.coach-list-nav a,
.coach-list-nav button {
  @apply mr-3;
}
</style>