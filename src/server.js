import buildApp from "./main.js";

export default url => {
    // since there could potentially be asynchronous route hooks or components,
    // we will be returning a Promise so that the server can wait until
    // everything is ready before rendering.
    return new Promise((resolve, reject) => {
        const { app, router } = buildApp();

        // set server-side router's location
        router.push(url);

        // wait until router has resolved possible async components and hooks
        router.onReady(() => {
            // the Promise should resolve to the app instance so it can be rendered
            resolve(app);
        }, reject);
    });
};
