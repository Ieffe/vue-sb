<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}

</script>

<style lang="postcss" scoped>
button, a {
  @apply px-3 py-1 text-red-700;
}

a:hover,
a:active,
button:hover,
button:active {
  @apply bg-red-700 text-white
}

.flat {
  @apply bg-transparent text-red-700
}

.outline {
  @apply bg-transparent text-red-700 border-red-700
}

.flat:hover, .flat:active, .outline:hover, .outline:active {
  @apply bg-white text-red-700
}
</style>