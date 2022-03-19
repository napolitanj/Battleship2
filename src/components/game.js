import Player from "../components/player.js"
import DOMFunction from "../DOMComponents/DOMFunctions.js"
import Gameboard from "../components/gameboard.js"

//Initialize Game
const Game = () => {
    const modDOM = DOMFunction();
    const player1 = Player("Player 1");
    const computer = Player("Computer");
    const p1Board = Gameboard();
    const computerBoard = Gameboard();

    function initialize() {
        computerBoard.randomlyPlaceAllShips();
        p1Board.randomlyPlaceAllShips();
        modDOM.refreshBoard(p1Board.board,computerBoard.board);
    }

    function addListenersToGrids() {
        document.getElementById("gameGrid2").addEventListener("click", attackSquare);
    }

    function attackSquare(e) {
        const target = e.target;
        const id = e.target.id;
        console.log(target)
        if (id !== "gameGrid2") {
            computerBoard.recieveAttack(id)
        }
        console.log(computerBoard.attackedPositions)
        modDOM.refreshBoard(p1Board.board,computerBoard.board);
    }


    function gameLoop() {
        clickToShoot(modDOM,computer);
        checkIfGameOver(player1);
        computer.randomShot(player1);
        checkIfGameOver(computer);
    }
    
    function checkIfGameOver(player) {
        if (player.playerBoard.allShipsSunk() === true){
            console.log("game over " + " player 1 wins")
            return
        } 
    }

    initialize();
    addListenersToGrids();
}





        // clickToShoot(dom,computer) {
            // dom.ele.p2Board.childNodes.forEach(square => square.addEventListener("click", function(){dom.shootForPlayer(square,computer)}));
     

export default Game;