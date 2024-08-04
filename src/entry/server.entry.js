// src/entry/server.entry.js
import { createApp } from 'vue';
import App from '../app.vue';

export default function createServerApp() {
    const app = createApp(App);
    return { app };
}
