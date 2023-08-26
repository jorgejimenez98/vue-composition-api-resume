import { createRouter, createWebHashHistory } from 'vue-router'

import * as Views from '../views'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Views.Home
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import('../views/Counter.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router