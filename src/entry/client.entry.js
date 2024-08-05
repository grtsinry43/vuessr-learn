import {createApp} from '../main.js';

// open an async
(async () => {
    console.log('pass client');
    const {app, router} = createApp({isServer: false});

    // wait for router ready
    await router.isReady();

    // mount to our app wrapper
    app.mount('#app');
})();
