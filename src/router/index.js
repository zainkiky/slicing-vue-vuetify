import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
