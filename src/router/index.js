import {createRouter as _createRouter, createWebHistory, createMemoryHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
];

export function createRouter({isServer}) {
    return _createRouter({
        history: isServer
            ? createMemoryHistory()  // 服务端渲染使用内存历史记录
            : createWebHistory(),    // 客户端渲染使用浏览器历史记录
        routes,
    })
}
