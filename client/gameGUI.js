class GameGUI {
    static createCard(card) {
        let cardDiv = GameGUI.createTag("div", "card");
        let serial = GameGUI.createTag("div", "serial", card.serial);
        let name = GameGUI.createTag("div", "name", card.name);
        let type = GameGUI.createTag("div", "type", card.type.type);
        let element = GameGUI.createTag("div", "element", card.element);
        let summonSick = GameGUI.createTag("div", "summonSick", card.summonSick);
        let cost = GameGUI.createTag("div", "cost", card.cost);
        let atk = GameGUI.createTag("div", "atk", card.atk);
        let def = GameGUI.createTag("div", "def", card.def);
        
        cardDiv.appendChild(serial);
        cardDiv.appendChild(name);
        cardDiv.appendChild(type);
        cardDiv.appendChild(element);
        cardDiv.appendChild(summonSick);
        cardDiv.appendChild(cost);
        cardDiv.appendChild(atk);
        cardDiv.appendChild(def);

        cardDiv.classList.add("card");
        return cardDiv;
    }
    static createTag(tagName, className, innerText) {
        let tag = document.createElement(tagName);
        tag.innerText = innerText;
        tag.className = className;
        return tag;
    }
}

