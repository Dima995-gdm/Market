import {createRouter, createWebHistory} from 'vue-router';

import Main from './pages/Main.vue';
import Login from './pages/Login.vue';

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
});

export default routers;