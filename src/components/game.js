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
    modDOM.changeDisplay("Begin game. Player 1, place your Cargo Ship")

    computer.playerBoard.randomlyPlaceAllShips(); 
    
    modDOM.renderShips(computer.playerBoard.board)
}

export default Game;