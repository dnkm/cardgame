window.WebSocket = window.WebSocket || window.MozWebSocket;

let clientId;
let player = {
    hand: [],
    field: []
}
let opp = {
    hand: [],
    field: []
}

let conn = new WebSocket("ws://127.0.0.1:1337");
conn.onopen = () => {
    console.log("connection is open");
}

conn.onerror = () => console.error("ERROR");

conn.onmessage = msg => {
    console.log(msg.data);
    let data = JSON.parse(msg.data);
    switch(data.type) {
        case 'new_user' :
            clientId = data.clientId;
            break;
        case 'draw_card' : 
            //let cardDiv = GameGUI.createCard(data.card);
            //document.body.appendChild(cardDiv);
            if (data.cid === clientId) {
                player.hand.push(data.card);
            } else {
                opp.hand.push(data.card);
            }
            update();
            break;
    }
}

function drawCard() {
    conn.send(JSON.stringify({type:'draw_card'}))
}

function update() {
    renderCards(player.hand, 3);
    renderCards(opp.hand, 0);
}

function renderCards(cards, rowNum) {
    let row = document.querySelectorAll(".row")[rowNum];
    row.innerHTML = '';
    cards.forEach(card => {
        let cardDiv = GameGUI.createCard(card);
        row.appendChild(cardDiv);
    })
    
}