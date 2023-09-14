<template>
    <li class="border-4 mb-4 p-3 border-red-700">
        <h3 class="font-bold text-xl">{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div class="mt-3">
            <badge v-for="area in areas" :key="area" :type="area" :title="area"></badge>
        </div>
        <div class="actions mt-4">
            <base-button link mode="outline" :to="coachLink">Contact</base-button>
            <base-button link :to="coachDetalisLink">View Details</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        },
        coachLink() {
            return this.$route.path + '/' + this.id + '/contact'
        },
        coachDetalisLink() {
            return this.$route.path + '/'  + this.id
        }
    }
}
</script>


<style lang="postcss" scoped>

</style>