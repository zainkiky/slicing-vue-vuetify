<template>
  <v-card class="mx-auto" style="background-color: #f7f7f7">
    <v-container>
      <header-items :items="headerItems"></header-items>
    </v-container>
    <v-container>
      <user-table :items="users"></user-table>
    </v-container>
    <v-container>
      <user-form @user-added="addUser"></user-form>
    </v-container>
  </v-card>
</template>

<script>
import UserTable from '@/components/User/UserTable.vue';
import HeaderItems from '@/components/User/HeaderItems.vue';
import UserForm from '@/components/User/UserForm.vue';

export default {
  name: 'UserView',
  components: {
    HeaderItems,
    UserTable,
    UserForm,
  },
  data() {
    return {
      users: [
        { name: 'Alice', email: 'alice@example.com', gender: 'Male' },
        { name: 'Bob', email: 'bob@example.com', gender: 'Female' },
        { name: 'Charlie', email: 'charlie@example.com', gender: 'Male' },
      ],
    };
  },
  computed: {
    headerItems() {
      const totalUsers = this.users.length;
      const maleUsers = this.users.filter(
        (user) => user.gender.toLowerCase() === 'male'
      ).length;
      const femaleUsers = this.users.filter(
        (user) => user.gender.toLowerCase() === 'female'
      ).length;

      const headerItems = [
        { title: 'Registered User', count: totalUsers, color: '#FFFFFF' },
        { title: 'Male User', count: maleUsers, color: '#FFFFFF' },
        { title: 'Female User', count: femaleUsers, color: '#FFFFFF' },
      ];

      return headerItems;
    },
    userForm() {
      const userData = {
        name: 'Charlie',
        email: 'charlie@example.com',
        gender: 'Male',
      };

      return userData;
    },
  },
  methods: {
    addUser(userDatas) {
      this.users.push(userDatas);
      console.log('add New user');
    },
  },
};
</script>
