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
    {
        path: '/dropzone/:id',
        name: 'DropZone',
        component: () => import('../components/DropZone.vue'),
        children: [
            {
                path: 'info',
                component: () => import('../components/Missing.vue'),
            }
        ]
    },
    {
        path: '/dnd',
        name: 'DragAndDrop',
        component: () => import('../components/DragAndDrop.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
