import Daemon from "../daemon";

test("make Daemon", () => {
    const pers = new Daemon("Dname");
    expect(pers).toEqual({
        name: "Dname",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});