const URL_PARAMS = new URLSearchParams(window.location.search);
const ROOM = URL_PARAMS.get('room');



ScrollOut({
    targets: '.show-out',
    onShown: function (el) {
        var animation = ''
        if(el.tagName == "H2")
            animation = 'animate__shakeY'
        else
            animation = 'animate__lightSpeedInLeft'
        
        // console.log(typeof el.tagName)
    
        el.classList.add('animate__animated', animation);
        // el.style.setProperty('--animate-duration', '2s');
        el.classList.remove('animate__animated', animation);

        // force reflow
        void el.offsetWidth;

        // re-add the animated cl
        el.classList.add('animate__animated', animation);
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
