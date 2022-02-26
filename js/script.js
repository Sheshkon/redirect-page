const URL_PARAMS = new URLSearchParams(window.location.search);
const ROOM = URL_PARAMS.get('room');
const OPPONENT = URL_PARAMS.get('opponent');


ScrollOut({
    targets: '.show-out',
    onShown: function (el) {
        var animation = ''
        if (el.tagName == "H2")
            animation = 'animate__shakeY'
        else
            animation = 'animate__lightSpeedInLeft'

        el.classList.add('animate__animated', animation);
        // el.style.setProperty('--animate-duration', '2s');
        el.classList.remove('animate__animated', animation);

        // force reflow
        void el.offsetWidth;

        // re-add the animated cl
        el.classList.add('animate__animated', animation);
    }
});


function uploadFile(target) {
    var el = document.getElementById("file-name");
    el.innerHTML = target.files[0].name;
    el.style.opacity = "1";
    el = document.getElementsByClassName('file-button')[0];
    console.log(el);
    el.style.color = "transparent";

}


//$(window).on('load', function () {
//    $('.img-thumbnail').on('load', function () {
//       
//    });
//});
//
//$(document).ready(function () {
//  
//});

if (ROOM && OPPONENT) {
    window.location.replace(`tetris://${ROOM}=${OPPONENT}`);
    console.log(`tetris://${ROOM}=${OPPONENT}`);
}
