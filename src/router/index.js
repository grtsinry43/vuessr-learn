import {createRouter as _createRouter, createWebHistory, createMemoryHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/about',
            name: '关于',
            component: () => import('../views/AboutView.vue'),
        }
    ]
})

export function createRouter({isServer}) {
    return _createRouter({
        // diff from server and client
        history: isServer
            ? createMemoryHistory()
            : createWebHistory(),
        router,
    })
};
