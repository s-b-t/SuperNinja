// Ninja Class

class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Player 1's name is ${ this.name }`);
    }
    showStats() {
        console.log(`${ this.name }'s Stats -- Strength: ${ this.strength }, Speed: ${ this.speed }, Health: ${ this.health }`);
    }
    drinkSake() {
        this.health += 10;
        this.speed += 4;
        this.strength += 3;
        console.log(`${ this.name }'s strength, speed, health has been enhanced to ${ this.strength }, ${ this.speed }, ${ this.health } respectively after he drank some Sake!`);
    }
}

// Defining Ninja constant while adding functionality to the terminal

const ninja = new Ninja("Coding N00B");
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();


// Sensei Class, while inheriting Ninja Class

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    sayName() {
        console.log(`Player 2's Name is ${ this.name }`)
    }
    showStats() {
        console.log(`${ this.name }'s Stats -- Strength: ${ this.strength }, Speed: ${ this.speed }, Health: ${ this.health }, Wisdom: ${ this.wisdom }`);
    }

    wisdomFromSake() {
        this.wisdom += 15;
    }

    speakWisdom() {
        super.drinkSake();
        this.wisdomFromSake();
        const message = '"Those who are skilled in combat do not become angered, those who are skilled at winning do not become afraid."';
        console.log(message);
        console.log(`Speaking wise words has enhanced ${ this.name }'s Wisdom by +15!`)
    }
}

// Defining Sensei constant while adding functionality and parent call from Ninja class to terminal

const superSensei = new Sensei("ZENGINEER");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();