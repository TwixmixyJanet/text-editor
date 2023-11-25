const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Storing event trigger
    window.deferredPrompt = event;

    // Display button
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // button click to access the event
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    // Display prompt
    promptEvent.prompt();

    // Reset deferred prompt
    window.deferredPrompt = null;

    // Change button to hidden
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear out prompt
    window.deferredPrompt = null;
});
