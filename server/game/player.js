const constants = require('./constants');
const Card = require('./card')

const deck1 = [1, 1, 2, 2, 3, 3];
const deck2 = [2, 2, 2, 2, 2, 2, 2];

class Player {
    constructor(clientId, playerNum) {
        this.clientId = clientId;
        this.playerNum = playerNum;
        this.hp = constants.rules.playerHP;
        this.deck = (Math.random() < 0.5) ? deck1 : deck2;
        this.hand = []
        this.field = []

        this.initDeck.bind(this)();
    }
    initDeck() {
        this.deck = this.deck.map(num => {
            return this.loadCard(num);
        })
    }
    loadCard(num) {
        let CardClass = require('./cards/card' + num);
        return new CardClass();
    }
    drawCard() {
        if (this.deck.length == 0) return null;
        let card = this.deck.pop();
        this.hand.push(card);
        return card;
    }
}

module.exports = Player;