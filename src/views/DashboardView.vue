<template>
  <v-card class="mx-auto" style="background-color: #f7f7f7">
    <v-container>
      <dashboard-header />
    </v-container>
    <v-container>
      <dashboard-chart />
    </v-container>
  </v-card>
</template>

<script>
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardChart from '../components/Dashboard/DashboardChart';

export default {
  name: 'HomeView',

  components: {
    DashboardHeader,
    DashboardChart,
  },
};
</script>
