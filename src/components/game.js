import Player from "../components/player.js"
import DOMFunction from "../DOMComponents/DOMFunctions.js"
import Gameboard from "../components/gameboard.js"

//Initialize Game
const Game = () => {
    const modDOM = DOMFunction();
    const p1Board = Gameboard();
    const computerBoard = Gameboard();

    function initialize() {
        computerBoard.randomlyPlaceAllShips();
        p1Board.randomlyPlaceAllShips();
        modDOM.refreshBoard(p1Board.board,computerBoard.board);
    }
    function addListeners() {
        document.getElementById("gameGrid2").addEventListener("click", gameLoop);
    }
    function removeListeners() {
        document.getElementById("gameGrid2").removeEventListener("click", gameLoop);
    }
    function isGameOver() {
        if (p1Board.allShipsSunk() === true) {
            console.log("Computer Wins!", p1Board.placedShips)
            removeListeners();
            return;
        } else if (computerBoard.allShipsSunk() === true) {
            console.log("Player 1 Wins!", computerBoard.placedShips)
            removeListeners();
            return;
        } else {
            return false;
        }
    }
    function playerAttack(id) {
        if (computerBoard.attackedPositions.includes(id) || typeof(id) !== "number") {
            return
        } else {
            computerBoard.recieveAttack(id)
            modDOM.shootDOMComputerBoard(computerBoard.board, id)
            if (isGameOver() === false) {
                computerAttack();
            }
        }
    }
    function computerAttack() {
        let p1Target = p1Board.recieveRandomAttack();
        modDOM.shootDOMPlayerBoard(p1Board.board, parseInt(p1Target))
        if (isGameOver() === true) {
            return;
        }
    }
    function gameLoop(e) {
        const target = e.target;
        const id = parseInt(target.id);
        playerAttack(id);
    }
    
    initialize();
    addListeners();
}


export default Game;