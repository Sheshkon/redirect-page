const socket = io('https://salty-fjord-01783.herokuapp.com', {
    rejectUnauthorized: false,
});
const place_color = ["#FFD700", "#C0C0C0", "#CD7F32"];

var users = [];
var table = document.getElementById('leaders_table');
var leaderboard = document.getElementById('leaderboard');
leaderboard.hidden = true;


socket.on('connect', function () {
    console.log("connected");
    socket.emit("leaderboard");
    socket.on("leaderboard", players => {
        console.log('get leaderboard');
        users = players;
        fill_table();
    });
});
    
socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err}`);
});


function fill_table() {
    var table_body = document.getElementById("table_body");
    table_body.innerHTML = '';
    for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        font_color = "white";
        if (i < 3){
            font_color = place_color[i];
        }
        var row = `<tr><th scope="row"><font color=${font_color}>` + (i + 1) + '</font></th>';
        
        for (var key in obj) {
            var val = obj[key];
            row += (`<td><font color=${font_color}>` + val + '</font></td>');
        }
        row += ('</tr>');
        $(row).appendTo(table_body)

    }
    leaderboard.hidden = false;
}