import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        background: '#F7F7F7',
        primary: '#FFFFFF',
        secondary: '#F9F9FA',
        anchor: '#8c9eff',
        customGreen: '#11CF8B',
        customGreenContainer: '#ECFDF7',
      },
    },
  },
});

export default vuetify;
