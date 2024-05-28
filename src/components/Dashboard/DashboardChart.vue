<template>
  <v-container class="primary" style="border-radius: 16px">
    <canvas id="myChart"></canvas>
  </v-container>
</template>

<script>
import { Chart } from 'chart.js';

export default {
  name: 'DashboardChart',
  mounted() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line', // Changed to 'line'
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Line chart usually has a single background color
            borderColor: 'rgba(75, 192, 192, 1)', // Single border color for line chart
            fill: false, // Optional: to avoid filling under the line
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
