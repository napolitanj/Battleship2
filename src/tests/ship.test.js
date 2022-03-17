import Ship from "../components/ship.js"

const cargo = Ship(2,"Cargo Ship")

test('Ship has a name and a length', () => {
    expect(cargo).toMatchObject({length:2,name:"Cargo Ship"});
});

test('Ship takes a hit', () => {
    cargo.hit()
    expect(cargo.health).toEqual(1)
});

test('Ship does not sink if health is not 0', () => {
    expect(cargo.isSunk()).toBe(false)
})

test('Ship sinks', () => {
    cargo.hit();
    expect(cargo.isSunk()).toBe(true)
})

test('Ship changes heading', () => {
    cargo.changeHeading();
    expect(cargo.heading).toBe('vertical')
})
