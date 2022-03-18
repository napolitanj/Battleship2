import Player from "../components/player.js"
import DOMFunction from "../DOMComponents/DOMFunctions.js"
import Ship from "../components/ship.js"

//Initialize Game
const Game = () => {
    const modDOM = DOMFunction();
    const cargo = Ship(2, "Cargo Ship")
    const sub = Ship(3, "Submarine")
    const destroyer = Ship(3, "Destroyer")
    const battleship = Ship(4, "Battleship")
    const carrier = Ship(5, "Carrier")

    //Create Human and Computer player
    const player1 = Player("Player 1")
    const computer = Player("Computer")

    //Activate Boards and Display, generate computer ship placements
    modDOM.renderBoards();
    computer.playerBoard.randomlyPlaceAllShips(); 
    
    //Temporary
    // modDOM.renderShips(computer.playerBoard.board,"gameGrid2")
    player1.playerBoard.placeShip(cargo, 10)
    player1.playerBoard.placeShip(sub, 23)
    player1.playerBoard.placeShip(destroyer, 42)
    player1.playerBoard.placeShip(battleship, 55)
    player1.playerBoard.placeShip(carrier, 62)

    modDOM.renderShips(player1.playerBoard.board,"gameGrid1")
    
    function computerShoot() {
        modDOM.shootForComputer(player1,computer)
    }

    modDOM.activateBoardForAttacks(player1,computer)
}

export default Game;