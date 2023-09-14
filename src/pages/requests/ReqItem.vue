<template>
    <li class="border-4 border-red-700 mb-4 p-3 w-4/5 m-auto">
        <div class="mb-6">
            <a class="font-bold text-xl" :href="emailLink"> 
                {{ email }}
            </a>
        </div>
        <p>{{ msg }}</p>
    </li>
</template>

<script>
export default {
    props: ['email', 'msg'],
    computed: {
        emailLink(){
            return 'mailto:' + this.email
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>