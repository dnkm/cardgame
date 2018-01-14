
class Card {
    constructor(serial, name, type, element, cost) {
        // trait
        this.serial = serial;
        this.name = name;
        this.type = type;   //Card.TYPES.CREATURE;
        this.element = element; // Card.ELEMENT.FIRE;
        this.tags = {}
        this.tags[Card.TAG.HASTE] = true;
        

        // status
        this.summonSick = true;
        this.cost = cost;
        this.atk = 0;
        this.def = 0;
        this.status = []
        /*
        this.status = [
            {name: "sick", durationLeft: 3, effect: function(){ this.hp--} }
        ]
        */
    }
    
    onEnter() {
        if (this.tags[Card.TAG.HASTE]) {
            this.summonSick = false;
        }
    }
    onAttackBefore() {}
    onAttackAfter() {}
    onAttackedBefore() {}
    onAttackedAfter() {}
    onBeginTurn() {}
    onEndTurn() {}
    onDeath() {}
}
Card.TYPES = {
    CREATURE: {type: 'creature'},
    SPELL_RES: {type: 'spell', spellType: 'resource'},
    SPELL_SPELL: {type: 'spell', spellType: 'spell'},
    SPELL_TRAP: {type: 'spell', spellType: 'trap'},
};
Card.ELEMENT = {
    FIRE: 0, WATER: 1, EARTH: 2, AIR: 3
}
Card.TAG = {
    FLYING: 0, TAUNT: 1, HASTE: 2
}

module.exports = Card;