<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-group>
          <v-list-item to="/" @click="handleItemClick('Dashboard')">
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/user" @click="handleItemClick('User')">
            <v-list-item-content>
              <v-list-item-title>User</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({ drawer: null, title: 'Application' }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
  methods: {
    handleItemClick(route) {
      this.title = route;
    },
  },
};
</script>
