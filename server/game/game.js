const Player = require('./player')
const Card = require('./card')

class Game {
    constructor(cid1, cid2) {
        let p1 = new Player(cid1, 1);
        let p2 = new Player(cid2, 2);
        p1.opp = p2;
        p2.opp = p1;

        this.p1 = p1;
        this.p2 = p2;
        this.cid1 = cid1;
        this.cid2 = cid2;
    }

    getPlayer(cid) {
        return (cid == this.cid1) ? this.p1 : this.p2;
    }

    drawCard(cid) {
        let player = this.getPlayer(cid);
        return player.drawCard();
    }
}

module.exports = Game;