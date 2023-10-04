const MSG = 'Nghĩa có cây ☂ ...'
console.log(`%c ${MSG}`, 'padding: 0.3rem 1.5rem; font-family: Roboto; font-size: 2em; line-height: 1.4em; color: white; background-color: #FF3CAC; background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);');


function showNotification() {
    if(window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function(status) {  // status is "granted", if accepted by user
            var n = new Notification('Nghĩa thông báo!', { 
                body: 'Nghĩa nội dung !!',
                icon: '/images/nghia-192x192.png'
            }); 
        });
    }
}