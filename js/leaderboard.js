const socket = io('https://salty-fjord-01783.herokuapp.com', {
    rejectUnauthorized: false,
});
const place_color = ["#FFD700", "#C0C0C0", "#CD7F32"];
const TABLE_PAGE_HEIGHT = 5;
var users = [];
var pos = 0;
var lim_pos = 1;
var table = document.getElementById('leaders_table');
var leaderboard = document.getElementById('leaderboard');
var table_body = document.getElementById("table_body");
var left_arrow = document.getElementById("show_prev");
var right_arrow = document.getElementById("show_next");
leaderboard.hidden = true;
left_arrow.style.opacity = 0;
right_arrow.style.display = 0;


socket.on('connect', function () {
    console.log("connected");
    socket.emit("leaderboard");
    socket.on("leaderboard", players => {
        console.log('get leaderboard');
        users = players;
        show_table();
    });
});
    
socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err}`);
});


function show_table() {
    lim_pos = Math.floor(users.length / TABLE_PAGE_HEIGHT);
    var end_pos = (users.length <= TABLE_PAGE_HEIGHT) ? users.length: TABLE_PAGE_HEIGHT;
    if (users.length > TABLE_PAGE_HEIGHT){
        
    }

    fill_table(0, end_pos)
    leaderboard.hidden = false;
}

function fill_table(start_pos, end_pos){
    table_body.innerHTML = '';
    
    for (var i = start_pos; i < end_pos; i++) {
        var obj = users[i];
        font_color = "white";

        if (i < 3)
            font_color = place_color[i];

        var row = `<tr><th scope="row"><font color=${font_color}>` + (i + 1) + '</font></th>';
        
        for (var key in obj) {
            var val = obj[key];
            row += (`<td><font color=${font_color}>` + val + '</font></td>');
        }
        row += ('</tr>');
        $(row).appendTo(table_body);
    }
    left_arrow.style.opacity = 0;
    right_arrow.style.opacity = 0;

    if (pos > 0)
        left_arrow.style.opacity = 1;

    if (pos >=0 && end_pos != users.length)
        right_arrow.style.opacity = 1;

    
    
}


function show_next(start_pos, end_pos){
    if (pos + 1 <= lim_pos)
        pos += 1;
    var start_pos = pos*TABLE_PAGE_HEIGHT;
    var end_pos = (pos == lim_pos) ? users.length: start_pos + TABLE_PAGE_HEIGHT;
    console.log(start_pos, end_pos);
    console.log(lim_pos);
    if (start_pos != end_pos)
        fill_table(start_pos, end_pos);


    
}

function show_prev(){
    if (pos - 1 >= 0)
        pos-=1;

    var start_pos = pos*TABLE_PAGE_HEIGHT;
    var end_pos = start_pos + TABLE_PAGE_HEIGHT;
    fill_table(start_pos, end_pos)


}