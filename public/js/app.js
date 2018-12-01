if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(function(registration) {
            console.log("This page now controlled by your awesome ServiceWorker with scope: ", registration.scope);
        }).catch(function(err) {
            console.log("Service worker registration failed: ", err);
        });
}