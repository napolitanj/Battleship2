import Ship from "../components/ship.js"

const cargo = Ship(2,"Cargo Ship")

test('Ship has a name and a length', () => {
    expect(cargo).toMatchObject({length:2,name:"Cargo Ship"});
});

test('Ship takes a hit', () => {
    cargo.hit(1)
    expect(cargo.hull).toEqual([1,0])
});

test('Ship does not sink if health is not 0', () => {
    cargo.hit(1)
    expect(cargo.isSunk()).toBe(false)
})

test('Ship sinks', () => {
    cargo.hit(0);
    cargo.hit(1);
    expect(cargo.isSunk()).toBe(true)
})
