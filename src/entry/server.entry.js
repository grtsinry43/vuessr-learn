import {createApp} from '../main.js';

// context will be injected by our server
export default function serverEntry(context) {
    console.log('pass server');
    const {app, router} = createApp({isServer: true});

    console.log("context:   " + context);

    // set server-side router's location
    return router.push(context)
        .then(() => {
            console.log("router push success");
            return router.isReady();
        })
        .then(() => {
            console.log("router is ready");

            const matchedComponents = router.currentRoute.value.matched;
            console.log(router.currentRoute.value);

            // no matched routes, pass with next()
            if (!matchedComponents.length) {
                // error 404 or pass to other middleware
                throw new Error('No matched routes');
            }

            // the Promise should resolve to the app instance so it can be rendered
            console.log(app);
            return app;
        })
        .catch(error => {
            console.error("Error during server entry:", error);
            throw error;
        });
}
