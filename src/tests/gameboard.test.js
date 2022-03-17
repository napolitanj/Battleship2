import Gameboard from "../components/gameboard.js"
import Ship from "../components/ship.js"

const Board = Gameboard();
const sub = Ship(3,"Submarine")
const sub2 = Ship(3,"Submarine")
const destroyer = Ship(3,"Destroyer")

test('Does the board create an array', () => {
    expect(Board.board.length).toBe(100);
});

test('Does the board place a ship correctly horizontal', () => {
    Board.placeShip(sub,33)
    expect(Board.board[32]).toBe(0);
    expect(Board.board[33]).toBe(1);
    expect(Board.board[34]).toBe(1);
    expect(Board.board[35]).toBe(1);
    expect(Board.board[36]).toBe(0);
});

test('Does the board add ships to its inventory once placed', () => {
    expect(Board.placedShips.length).toBe(1)
});

test('Does the board place a ship correctly vertical', () => {
    destroyer.changeHeading()
    Board.placeShip(destroyer,27)
    expect(destroyer.heading).toBe('vertical')
    expect(Board.board[28]).toBe(0);
    expect(Board.board[27]).toBe(1);
    expect(Board.board[37]).toBe(1);
    expect(Board.board[47]).toBe(1);
    expect(Board.board[57]).toBe(0);
});

test('Does the board prevent a ship from being placed in an invalid position', () => {
    expect(Board.placeShip(sub2,38)).toBeFalsy();
    expect(Board.placeShip(sub2,98)).toBeFalsy();
    sub2.changeHeading();
    expect(Board.placeShip(sub2,85)).toBeFalsy();
    expect(Board.placedShips.length).toBe(2);
});

test('Does the board allow ships to record their position once placed?', () => {
    expect(Board.placedShips[0].location).toEqual([33,34,35])
    expect(Board.placedShips[1].location).toEqual([27,37,47])
});

test('Does the board recieve an attack', () => {
    expect(Board.placedShips[1].health).toBe(3);
    Board.recieveAttack(26);
    Board.recieveAttack(27);
    expect(Board.board[26]).toBe(2);
    expect(Board.board[20]).toBe(0);
    expect(Board.board[27]).toBe(3);
    expect(Board.board[28]).toBe(0);
    expect(Board.board[98]).toBe(0);
    expect(Board.board[8]).toBe(0);
    expect(Board.board[37]).toBe(1);
    expect(Board.board[47]).toBe(1);
    expect(Board.placedShips[1].health).toBe(2);
    expect(Board.placedShips[0].health).toBe(3);
});

test('Are all placed ships sunk?', () => {
    expect(Board.allShipsSunk()).toBe(false);
    Board.recieveAttack(37);
    Board.recieveAttack(47);
    Board.recieveAttack(33);
    expect(Board.allShipsSunk()).toBe(false);
    Board.recieveAttack(34);
    Board.recieveAttack(35);
    expect(Board.allShipsSunk()).toBe(true);
});