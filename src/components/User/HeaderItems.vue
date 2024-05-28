<template>
  <v-row dense>
    <v-col v-for="(item, index) in items" :key="index" cols="mx-auto">
      <v-card :color="item.color">
        <v-card-title style="font-size: 2rem; margin-bottom: 20px">
          {{ item.count }}
        </v-card-title>
        <v-card-text class="text"> {{ item.title }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeaderItems',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
