const URL_PARAMS = new URLSearchParams(window.location.search);
const ROOM = URL_PARAMS.get('room');


function disableSpinners() {
    $('.spinner-border').fadeOut(0);
    $('.img-thumbnail').fadeIn(1000)
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



$(window).on('load',function() {
    $('.img-thumbnail').on('load',function(){
        disableSpinners()
    });
});

$( document ).ready(function() { 
    disableSpinners()
});

if(ROOM){
    window.location.replace(`tetris://${ROOM}`);
    console.log(`tetris://${ROOM}`);
}

