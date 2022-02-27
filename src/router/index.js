import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/guide',
        name: 'Guide',
        component: () => import('../components/Guide.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
