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
        document.getElementById("gameGrid2").addEventListener("click", attack);
    }
    function attack(e) {
        const target = e.target;
        const id = parseInt(target.id);
        if (id !== "gameGrid2") {
            computerBoard.recieveAttack(id)
            modDOM.shootDOMComputerBoard(computerBoard.board, id)
        } else {
            return;
        }
        if (checkIfGameOver() === false) {
            let p1Target = p1Board.recieveRandomAttack();
            modDOM.shootDOMPlayerBoard(p1Board.board, parseInt(p1Target))
        }
        if (checkIfGameOver() === true) {
            return;
        }
    }
    function checkIfGameOver() {
        if (computerBoard.allShipsSunk() === true) {
            console.log('Computer wins! Game Over.')
            return true; 
        } else if (p1Board.allShipsSunk() === true) {
            console.log('Player 1 wins! Game Over.');
            return true;
        } else {
            return false;
        }
    }

//    function gameLoop() {
//         clickToShoot(modDOM,computer);
//         checkIfGameOver(player1);
//         computer.randomShot(player1);
//         checkIfGameOver(computer);
//     }

    initialize();
    addListenersToGrids();
}


export default Game;