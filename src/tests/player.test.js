import Player from "../components/player.js"
import Ship from "../components/ship.js"

const player1 = Player("Player One")
const player2 = Player("Computer")
const sub = Ship(3,"Submarine")
const destroyer = Ship(3,"Destroyer")

destroyer.changeHeading()

player1.playerBoard.placeShip(sub,15)
player2.playerBoard.placeShip(destroyer,15)

test('Does it create a player with a board?', () => {
    expect(player1).toMatchObject({name:"Player One",playerBoard:{}});
});

test('Can a player take a turn', () => {
    player1.attack(player2,30)
    expect(player2.playerBoard.board[30]).toBe(2);
    player1.attack(player2,25)
    expect(player2.playerBoard.board[25]).toBe(3);
    expect(player2.playerBoard.placedShips[0].health).toBe(2)
});

test('Can a player (computer) take a random shot?', () => {
    player2.randomShot(player1)
    expect(player1.playerBoard.board.includes(2) === true || player1.playerBoard.board.includes(3) === true).toBe(true)
})