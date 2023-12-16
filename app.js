const APP = {
    SW: null,
    init: function () {
        if ('serviceWorker' in navigator) {
            // 1. Đăng ký serviceWorker
            navigator.serviceWorker.register('/sw.js', {
                scope: '/',
            }).then(function (registration) {
                APP.SW = registration.installing || registration.waiting || registration.active

                console.log('ServiceWorker registration successful with scope: ', registration.scope)
            }, function (err) {
                console.log('ServiceWorker registration failed: ', err)
            })

            // 2. Kiểm tra page hiện tại có ServiceWorker không
            if (navigator.serviceWorker.controller) {
                console.log('We have a ServiceWorker installed')
            }

            // 3. Bắt sự kiện cập nhật hoặc đăng ký mới một ServiceWorker
            navigator.serviceWorker.oncontrollerchange = (e) => {
                console.log('New ServiceWorker activated')
            }

            // 4. Remove/Unregister ServiceWorker
            // navigator.serviceWorker.getRegistration().then((reg) => {
            //     if (reg) {
            //         reg.unregister()
            //     }
            // })

            // 5. message from ServiceWorker
            // Cái này từ từ =))
        } else {
            console.log('ServiceWorker are not supported')
        }
    },
}

// init sau khi DOM đã được load xong
document.addEventListener('DOMContentLoaded', APP.init)

let deferredPrompt

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e
})

const installApp = document.getElementById('installApp')

installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null
        }
    }
})

// Install button
let deferredPrompt

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e
})

const installApp = document.getElementById('installApp')

installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null
        }
    }
})
