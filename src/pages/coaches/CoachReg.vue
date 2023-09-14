<template>
    <content>
        <h1>Register as Coach Now!</h1>
        <coach-form @save-data="saveData"></coach-form>
    </content>
</template>

<script>
import CoachForm from './CoachForm.vue';
export default {
    components: {
        CoachForm
    }, 
    methods: {
        saveData(data){
            this.$store.dispatch('coaches/registerCoach', data)
            this.$router.replace('/coaches')
        }
    }

}
</script>