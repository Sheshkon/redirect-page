const URL_PARAMS = new URLSearchParams(window.location.search);
const ROOM = URL_PARAMS.get('room');
console.log(ROOM);
if(ROOM){
    window.location.replace("tetris://?room=${ROOM}");
}
