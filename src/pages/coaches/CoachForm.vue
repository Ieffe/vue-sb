<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.valid }">
      <label for="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="refreshValidity('firstName')"
      />
      <p v-if="!firstName.valid">First name must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.valid }">
      <label for="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="refreshValidity('lastName')"
      />
      <p v-if="!lastName.valid">Last name must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.valid }">
      <label for="description">description</label>
      <textarea
        id="description"
        cols="30"
        rows="10"
        v-model.trim="description.val"
        @blur="refreshValidity('description')"
      ></textarea>
      <p v-if="!description.valid">Description must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.valid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="refreshValidity('rate')"
      />
      <p v-if="!rate.valid">Rate value must be greater than 0</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.valid }">
      <h3>Area of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val" @blur="refreshValidity('areas')"
        />
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val" @blur="refreshValidity('areas')"
        />
        <label for="backend">Backend</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="refreshValidity('areas')" />
        <label for="career">Career</label>
      </div>
      <p v-if="!areas.valid">At least one areas must be picked</p>
    </div>
    <base-button>Register</base-button>
    <p v-if="!isValid">Please fill required fields!</p>
  </form>
</template>


<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: {
        val: "",
        valid: true,
      },
      lastName: {
        val: "",
        valid: true,
      },
      description: {
        val: "",
        valid: true,
      },
      rate: {
        val: null,
        valid: true,
      },
      areas: {
        val: [],
        valid: true,
      },
      isValid: true,
    };
  },
  methods: {
    refreshValidity(input) {
      this[input].valid = true;
    },
    validateForm() {
      this.isValid = true;
      if (this.firstName.val === "") {
        this.firstName.valid = false;
        this.isValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.valid = false;
        this.isValid = false;
      }
      if (this.description.val === "") {
        this.description.valid = false;
        this.isValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.valid = false;
        this.isValid = false;
      }
      if (!this.areas.val.length === 0) {
        this.areas.valid = false;
        this.isValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.isValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.$emit("save-data", formData);
      console.log(formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>