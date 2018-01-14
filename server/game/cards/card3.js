const Card = require('../card');

class Card3 extends Card {
    constructor() {
        super(3, "Ogre", Card.TYPES.CREATURE, Card.ELEMENT.WATER, 4);
        this.atk = 2;
        this.def = 3;
    }
    onEndTurn() {
        if (this.def < 5)
            this.def++;
    }
}
module.exports = Card3;