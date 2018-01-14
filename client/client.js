window.WebSocket = window.WebSocket || window.MozWebSocket;

let conn = new WebSocket("ws://127.0.0.1:1337");
conn.onopen = () => {
    console.log("connection is open");
}

conn.onerror = () => console.error("ERROR");

conn.onmessage = msg => {
    console.log(msg.data);
    let data = JSON.parse(msg.data);
    switch(data.type) {
        case 'draw_card' : 
            let cardDiv = GameGUI.createCard(data.card);
            document.body.appendChild(cardDiv);
            break;
    }
}

function drawCard() {
    conn.send(JSON.stringify({type:'draw_card'}))
}