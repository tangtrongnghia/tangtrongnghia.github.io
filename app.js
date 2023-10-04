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
            navigator.serviceWorker.getRegistration().then((regs) => {
                console.log(regs)
                for (let reg of regs) {
                    reg.unregister().then(isUnreg => console.log(isUnreg))
                }
            })

            // 5. Lắng nghe message từ SW
            // Cái này từ từ =))
        } else {
            console.log('ServiceWorker are not supported')
        }
    },
}

// init sau khi DOM đã được load xong
document.addEventListener('DOMContentLoaded', APP.init)