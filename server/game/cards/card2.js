const Card = require('../card');

class Card2 extends Card {
    constructor() {
        super(2, "Skeleton", Card.TYPES.CREATURE, Card.ELEMENT.EARTH, 2);
        this.atk = 2;
        this.def = 1;
    }
}
module.exports = Card2;