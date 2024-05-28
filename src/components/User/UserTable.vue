<template>
  <v-card>
    <v-card-title> Registered Users </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Gender', value: 'gender' },
      ],
    };
  },
};
</script>

