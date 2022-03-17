import Gameboard from "../components/gameboard.js"
import Player from "../components/player.js"
import DOMFunction from "../DOMComponents/DOMFunctions.js"

//Initialize Game
const Game = () => {
    const modDOM = DOMFunction();
    //Create Human and Computer player
    const player1 = Player("Player 1")
    const computer = Player("Computer")

    modDOM.renderBoards();
}

export default Game;