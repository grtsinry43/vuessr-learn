// use for ssr env
import {createSSRApp} from 'vue';
import App from './app.vue';
import {createRouter} from './router/index.js';

// createApp receives "isServer" to diff env
export function createApp({isServer}) {
    const router = createRouter({isServer});

    const app = createSSRApp(App);

    app.use(router);

    // expose our instance for later render usage
    return {app, router};
}
