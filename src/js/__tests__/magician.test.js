import Magician from "../magician";

test("make Magician", () => {
    const pers = new Magician("Mname");
    expect(pers).toEqual({
        name: "Mname",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});