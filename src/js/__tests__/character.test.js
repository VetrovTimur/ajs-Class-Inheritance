import Character from "../character";

test("Long name", () => {
    expect(() => new Character("veryLongName", "Bowman")).toThrow("Invalid character name");
});

test("Short name", () => {
    expect(() => new Character("N", "Bowman")).toThrow("Invalid character name");
});

test("Norm name", () => {
    expect(new Character("normName", "Bowman").name).toBe("normName");
});

test.each(["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"])(
    "pers with type %s",
    (type) => {
        expect(new Character("normName", type).type).toBe(type);
    }
);

test("Other type", () => {
    expect(() => new Character("xxx", "mag")).toThrow("There is no such character class");
});

test("levelUp alive pers", () => {
    const pers = new Character("normName", "Bowman");
    pers.health = 100;
    pers.level = 1;
    pers.attack = 25;
    pers.defence = 25;
    pers.levelUp();
    expect(pers.health).toBe(100);
    expect(pers.level).toBe(2);
    expect(pers.attack).toBe(30);
    expect(pers.defence).toBe(30);
});

test("levelUp dead pers", () => {
    const pers = new Character("normName", "Bowman");
    pers.health = 0;
    expect(() => pers.levelUp()).toThrow("You cannot raise the level of a deceased character");
});

test("damage alive pers", () => {
    const pers = new Character("normName", "Bowman");
    pers.health = 50;
    pers.defence = 20;
    pers.damage(10);
    expect(pers.health).toBe(42);
});

test("damage dead pers", () => {
    const pers = new Character("normName", "Bowman");
    pers.health = 0;
    expect(() => pers.damage(10)).toThrow("The character is dead");
});