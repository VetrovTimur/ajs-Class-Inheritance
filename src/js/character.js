export default class Character {
    constructor(name, type) {
        const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

        if (name.length < 2 || name.length > 10) {
            throw new Error("Invalid character name");
        }
        if(!types.includes(type)) {
            throw new Error("There is no such character class");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if(this.health <= 0) {
            throw new Error("You cannot raise the level of a deceased character");
        }
        this.level += 1;
        this.health = 100;
        this.attack *= 1.2;
        this.defence *= 1.2;
    }

    damage(points) {
        if(this.health <= 0) {
            throw new Error("The character is dead");
        }
        this.health -= points * (1 - this.defence / 100)
    }
}
