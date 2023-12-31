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
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')   
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../views/Users.vue')   
    },
    {
        path: '/search-pokemon',
        name: 'search-pokemon',
        component: () => import('../views/SearchPokemon.vue')   
    },
    {
        path: '/pokemon/:id',
        name: 'pokemon-view',
        component: () => import('../views/Pokemon.vue')   
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router