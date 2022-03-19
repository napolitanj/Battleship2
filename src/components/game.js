import Player from "../components/player.js"
import DOMFunction from "../DOMComponents/DOMFunctions.js"
import Gameboard from "../components/gameboard.js"

//Initialize Game
const Game = () => {
    return {
        modDOM:DOMFunction(),
        player1:Player("Player 1"),
        computer:Player("Computer"),
        p1Board:Gameboard(),
        computerBoard:Gameboard(),
        intialize() {
            this.computerBoard.randomlyPlaceAllShips();
            this.p1Board.randomlyPlaceAllShips();
            this.modDOM.refreshBoard(this.p1Board.board,this.computerBoard.board);
        },
        gameLoop(){
            this.clickToShoot(this.modDOM,this.computer);
            this.checkIfGameOver(this.player1)
            this.computer.randomShot(this.player1)
            this.checkIfGameOver(this.computer)
        },
        checkIfGameOver(player) {
            if (player.playerBoard.allShipsSunk() === true){
                console.log("game over " + " player 1 wins")
                return
            } 
        },
        clickToShoot(dom,computer) {
            dom.ele.p2Board.childNodes.forEach(square => square.addEventListener("click", function(){dom.shootForPlayer(square,computer)}));
        }
    }
}

export default Game;