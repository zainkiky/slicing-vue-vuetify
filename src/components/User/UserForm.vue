<template>
  <v-card class="pa-4">
    <v-card-title>User Form</v-card-title>
    <v-card-text>
      <v-form
        ref="forms"
        v-model="valid"
        lazy-validation
        @submit.prevent="submitForm"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="genderItem"
          :rules="[(v) => !!v || 'Gender is required']"
          label="Gender"
          required
        ></v-select>

        <v-btn color="customGreen" class="" type="submit"> Submit </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UserForm',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    genderItem: ['Male', 'Female'],
  }),
  methods: {
    submitForm() {
      if (this.$refs.forms.validate()) {
        const userData = {
          name: this.name,
          email: this.email,
          gender: this.select,
        };
        this.$emit('user-added', userData);
      }
    },
  },
};
</script>
