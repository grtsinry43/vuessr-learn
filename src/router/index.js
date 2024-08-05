import {createRouter as _createRouter, createMemoryHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

export function createRouter() {
    return _createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            {path: '/', component: HomeView},
            {path: '/about', component: AboutView}
        ]
    })
}
