import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../Pages/dashboard.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../Pages/About.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
