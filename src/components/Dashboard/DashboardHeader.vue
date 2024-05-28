<template>
  <v-container class="primary" style="border-radius: 16px">
    <v-col>
      <div
        class="font-weight-bold"
        style="font-size: 18px; margin-bottom: 10px"
      >
        Overview
      </div>
      <v-container class="secondary" style="border-radius: 8px">
        <v-row>
          <v-col v-for="(item, index) in overview" :key="index">
            <div class="font-weight-medium text--secondary">
              {{ item.title }}
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col>
            <div class="font-weight-medium">{{ overview[0].value }}</div>
            <div class="text--secondary" style="font-size: 12">
              {{ overview[0].desc }}% of crypto market
            </div>
          </v-col>
          <v-col>
            <div class="font-weight-medium">{{ overview[1].value }}</div>
            <div class="customGreen--text">{{ overview[1].desc }}%</div>
          </v-col>
          <v-col>
            <div class="font-weight-medium">{{ overview[2].value }}</div>
            <div class="text--secondary">
              {{ overview[2].desc }} of asset allocation
            </div>
          </v-col>
          <v-col>
            <div class="font-weight-medium">{{ overview[3].value }}</div>
            <v-row dense style="margin-top: 1px">
              <div class="customGreen--text">{{ overview[3].desc }}</div>
              <div class="text--secondary">profits</div>
            </v-row>
          </v-col>
          <v-col>
            <v-container
              class="customGreenContainer"
              style="
                width: 79px;
                height: 24px;
                padding: 0;
                border-radius: 100px;
                box-sizing: border-box;
                justify-content: center;
                margin-left: 10px;
              "
            >
              <div
                class="customGreen--text"
                style="padding: 0; text-align: center"
              >
                {{ overview[4].value }}
              </div>
            </v-container>
            <div class="text--secondary">{{ overview[4].desc }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'DashboardHeader',

  data: () => ({
    overview: [
      {
        title: 'Market Value',
        value: '$16,352.12',
        desc: '39',
      },
      {
        title: 'Net Cost',
        value: '$17,547.36',
        desc: '+1.89',
      },
      {
        title: 'Holdings',
        value: '8.24668 BTC',
        desc: '8',
      },
      {
        title: 'Profit/Loss',
        value: '+$426,57',
        desc: '+1.89%',
      },
      {
        title: 'Change (24H)',
        value: '9.37%',
        desc: 'Last 24 hours',
      },
    ],
  }),
};
</script>
