const URL_PARAMS = new URLSearchParams(window.location.search);
const ROOM = URL_PARAMS.get('room');

ScrollOut({
    targets: ".show-out",
    onShown: function (el) {
        el.classList.add('animate__animated', 'animate__lightSpeedInLeft');
        el.style.setProperty('--animate-duration', '2s');
        el.classList.remove('animate__animated', 'animate__lightSpeedInLeft');

        // force reflow
        void el.offsetWidth;

        // re-add the animated cl
        el.classList.add('animate__animated', 'animate__lightSpeedInLeft');
    }
});



//$(window).on('load', function () {
//    $('.img-thumbnail').on('load', function () {
//       
//    });
//});
//
//$(document).ready(function () {
//  
//});

if (ROOM) {
    window.location.replace(`tetris://${ROOM}`);
    console.log(`tetris://${ROOM}`);
}
