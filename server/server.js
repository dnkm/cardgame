const WebSocketServer = require('websocket').server;
const http = require('http');
const Game = require('./game/game');

const server = http.createServer((req, res) => {
    res.end("Hello World");
});
server.listen(1337, () => {});

const wsServer = new WebSocketServer({
    httpServer: server
});

/**
 * global variable
 */
let game;
let clients = {};

wsServer.on('request', (req) => {
    let conn = req.accept(null, req.origin);
    let clientId = new Date().getTime();
    clients[clientId] = conn;

    conn.send(JSON.stringify({
        type: 'new_user',
        clientId
    }));

    if (Object.keys(clients).length == 2) {
        initGame();
    }

    conn.on('message', msg => {
        let data = JSON.parse(msg.utf8Data);
        console.log("received msg")
        console.log(data)
        console.log(data.type)
        onMessage(data,clientId);
        // Object.keys(clients).forEach(cid => {
        //     if (cid != clientId)
        //        clients[cid].send(data);
        // });
    });

    conn.on('close', conn => {
        delete clients[clientId];
    })
});

function printClients() {
    console.log( Object.keys(clients) );
}

function initGame() {
    let cid1, cid2;
    Object.keys(clients).forEach( (cid, i) => {
        if (i == 0) cid1 = cid;
        else cid2 = cid;
    })
    game = new Game(cid1, cid2);
    broadcast({type: 'game_start'});
}

function onMessage(data, cid) {
    switch(data.type) {
        case 'draw_card': 
            let card = game.drawCard(cid);
            let data = {
                cid: cid,
                type: 'draw_card',
                card: card
            }
            broadcast(data);
            break;
    }
}
// new_user, 
// draw_card

function broadcast(data) {
    data = JSON.stringify(data);
    Object.keys(clients).forEach(cid => {
        clients[cid].send(data);
    });
}