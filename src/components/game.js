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
        document.querySelectorAll(".computerGridSquare").forEach(node => node.addEventListener("click", gameLoop));
    }
    function removeListeners() {
        document.getElementById("gameGrid2").removeEventListener("click", gameLoop);
    }
    function isGameOver() {
        if (p1Board.allShipsSunk() === true) {
            modDOM.changeDisplay1("Computer Wins!")
            modDOM.changeDisplay2("Refresh the page to start a new game.")
            removeListeners();
            return;
        } else if (computerBoard.allShipsSunk() === true) {
            modDOM.changeDisplay1("Player 1 Wins!")
            modDOM.changeDisplay2("Refresh the page to start a new game.")
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
        modDOM.changeDisplay2("Choose your target")
        const target = e.target;
        console.log(target)
        const id = parseInt(target.id);
        playerAttack(id);
    }
    initialize();
    addListeners();
}


export default Game;