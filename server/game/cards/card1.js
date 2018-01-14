const Card = require('../card');

class Card1 extends Card {
    constructor() {
        super(1, "Warrior", Card.TYPES.CREATURE, Card.ELEMENT.EARTH, 1);
        this.atk = 1;
        this.def = 1;
    }
}
module.exports = Card1;