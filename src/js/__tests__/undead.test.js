import Undead from "../undead";

test("make Undead", () => {
    const pers = new Undead("Uname");
    expect(pers).toEqual({
        name: "Uname",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});