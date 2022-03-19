import Player from "../components/player.js"


const player1 = Player("Player One")

test('Does it create a player?', () => {
    expect(player1).toMatchObject({name:"Player One"});
});