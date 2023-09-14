<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your E-mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="msg">Your Message</label>
      <textarea
        name=""
        id="msg"
        cols="30"
        rows="10"
        v-model.trim="msg"
      ></textarea>
    </div>
    <div class="action">
      <base-button> Send Message</base-button>
    </div>
    <p class="errors" v-if="!isValid">Please fill all required fields!</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      msg: "",
      isValid: true,
    };
  },
  methods: {
    submitForm() {
      this.isValid = true;
      if (this.email === "" || !this.email.includes("@") || this.msg === "") {
        this.isValid= false 
        return
      }  

      this.$store.dispatch('reqs/contactCoach', {
        email: this.email,
        msg: this.msg,
        coachId: this.$route.params.id
      })

      this.$router.replace('/coaches')
    },
  },
};
</script>

<style lang="postcss" scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>