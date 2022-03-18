import Gameboard from "../components/gameboard.js"
import Player from "../components/player.js"
import DOMFunction from "../DOMComponents/DOMFunctions.js"
import Ship from "../components/ship.js"

//Initialize Game
const Game = () => {
    const modDOM = DOMFunction();
    //Create Human and Computer player
    const player1 = Player("Player 1")
    const computer = Player("Computer")

    //Activate Boards and Display, generate computer ship placements
    modDOM.renderBoards();
    modDOM.changeDisplay(`Begin game. Player 1, place your Cargo Ship. Tap "shift" to change your ship's heading.` )
    computer.playerBoard.randomlyPlaceAllShips(); 
    
    //Temporary
    modDOM.renderShips(computer.playerBoard.board,"gameGrid2")

    const cargo = (Ship(2,"Cargo Ship"))
    modDOM.renderTentativeShip(player1,cargo)
}

export default Game;