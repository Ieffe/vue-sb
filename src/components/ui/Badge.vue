<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style lang="postcss" scoped>
.badge {
  @apply text-white px-3 py-1 mr-2;
}

.frontend {
  @apply bg-purple-600;
}

.backend {
  @apply bg-blue-900;
}

.career {
  @apply bg-red-600;
}
</style>