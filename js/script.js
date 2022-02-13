const URL_PARAMS = new URLSearchParams(window.location.search);
const ROOM = URL_PARAMS.get('room');

if(ROOM)
    window.location.replace(`tetris://${ROOM}`);
    console.log(`tetris://${ROOM}`);
