import {createApp} from '../main.js';

// context will be injected by our server
export default async function serverEntry(context) {
    console.log('pass server');
    const {app, router, store, meta} = createApp({isServer: true});

    // set server-side router's location
    router.push(context.url);

    // wait for router ready
    await router.isReady();

    const matchedComponents = router.currentRoute.value.matched;
    // no matched routes, pass with next()
    if (!matchedComponents.length) {
        // error 404 or pass to other middleware
        context.next();
    }

    // the Promise should resolve to the app instance so it can be rendered
    return app;
}
