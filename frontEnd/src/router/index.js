import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import AdminDashboard from '../components/AdminDashboard.vue';
import AgentDashboard from '../components/AgentDashboard.vue';
import AccountingDashboard from '../components/AccountingDashboard.vue';
import DesignDashboard from '../components/DesignDashboard.vue';
import ArchitecturalReview from '../components/ArchitecturalReview.vue';
import SupervisionDashboard from '../components/SupervisionDashboard.vue';
import PropertyCreate from '../components/PropertyCreate.vue';
import PropertiesList from '../components/PropertiesList.vue';
// ... other imports as needed

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/admin', component: AdminDashboard, meta: { requiresAuth: true, role: 'admin' } },
  { path: '/agent-dashboard', component: AgentDashboard, meta: { requiresAuth: true, role: 'agent' } },
  { path: '/accounting-dashboard', component: AccountingDashboard, meta: { requiresAuth: true, role: 'accounting' } },
  { path: '/design-dashboard', component: DesignDashboard, meta: { requiresAuth: true, role: 'design' } },
  { path: '/architectural-review', component: ArchitecturalReview, meta: { requiresAuth: true, role: 'architectural' } },
  { path: '/supervision-dashboard', component: SupervisionDashboard, meta: { requiresAuth: true, role: 'supervision' } },
  { path: '/create-property', component: PropertyCreate, meta: { requiresAuth: true } },
  { path: '/properties', component: PropertiesList },
  // ... include other routes as necessary
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Navigation Guards
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/isAuthenticated']) {
      next('/login');
    } else if (to.meta.role && store.getters['auth/userRole'] !== to.meta.role) {
      next('/unauthorized'); // Redirect to an unauthorized access page or home
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
