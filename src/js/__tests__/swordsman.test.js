import Swordsman from "../swordsman";

test("make Swordsman", () => {
    const pers = new Swordsman("Sname");
    expect(pers).toEqual({
        name: "Sname",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});