import Player from "../components/player.js"
import DOMFunction from "../DOMComponents/DOMFunctions.js"
import Ship from "../components/ship.js"

//Initialize Game
const Game = () => {
    return {
        modDOM:DOMFunction(),
        player1:Player("Player 1"),
        computer:Player("Computer"),
        intialize() {
            this.modDOM.renderBoards();
            this.computer.playerBoard.randomlyPlaceAllShips();
            this.modDOM.activateBoardForAttacks(this.player1,this.computer)
            this.temporaryShipPlacement()
            this.modDOM.refreshBoard(this.player1);
            this.modDOM.refreshBoard(this.computer);
        },
        gameLoop(target){
            this.player1.attack(this.computer,target)
            this.modDOM.refreshBoard(this.player1);
            this.checkIfGameOver(this.player1)
            this.computer.randomShot(this.player)
            this.modDOM.refreshBoard(this.computer);
            this.checkIfGameOver(this.computer)
        },
        checkIfGameOver(player) {
            if (player.playerBoard.allShipsSunk() === true){
                console.log("game over " + " player 1 wins")
                return
            } 
        },
        temporaryShipPlacement() {
            const cargo = Ship(2, "Cargo Ship")
            const sub = Ship(3, "Submarine")
            const destroyer = Ship(3, "Destroyer")
            const battleship = Ship(4, "Battleship")
            const carrier = Ship(5, "Carrier")

            this.player1.playerBoard.placeShip(cargo, 10)
            this.player1.playerBoard.placeShip(sub, 23)
            this.player1.playerBoard.placeShip(destroyer, 42)
            this.player1.playerBoard.placeShip(battleship, 55)
            this.player1.playerBoard.placeShip(carrier, 62)
            console.log(this.player1.playerBoard.placedShips)
        }
    }
}

export default Game;