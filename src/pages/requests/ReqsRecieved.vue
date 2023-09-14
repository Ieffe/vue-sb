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
      <header class="mb-5 text-3xl">
        <h2 class="text-center font-bold">Requests</h2>
      </header>
      <spinner v-if="isLoading"></spinner>
      <ul v-else-if="loadSuccess">
        <req-item
          v-for="req in receivedReqs"
          :key="req.id"
          :email="req.userEmail"
          :msg="req.msg"
        >
        </req-item>
      </ul>
      <h3 v-else>No Request.</h3>
    </content>
  </div>
</template>

<script>
import ReqItem from "./ReqItem.vue";
export default {
  components: {
    ReqItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.loadReqs();
  },
  computed: {
    receivedReqs() {
      return this.$store.getters["reqs/reqs"];
    },
    hasReqs() {
      return this.$store.getters["reqs/hasReqs"];
    },
    loadSuccess() {
      return this.hasReqs && !this.isLoading;
    },
  },
  methods: {
    async loadReqs() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("reqs/fetchReqs");
      } catch (error) {
        this.error = error.message || "Failed to load!";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>