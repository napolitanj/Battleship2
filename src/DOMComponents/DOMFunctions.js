import element from "./elements.js"

const DOMFunction = () => {
    const ele = element();
    function colorSquare(board,node) {
        const id = node.id;
        if (board[id] === 1) {
            return "blue";
        } else if (board[id] === 2) {
            return "white";
        } else if (board[id] === 3) {
            return "red";
        } else {
            return;
        }
    }
    return {
        DOMBoard1:ele.gameBoardContainer.appendChild(ele.p1Board),
        DOMBoard2:ele.gameBoardContainer.appendChild(ele.p2Board),
        refreshBoard(playerBoard) {
            this.DOMBoard1.childNodes.forEach(node => node.style.backgroundColor = colorSquare(playerBoard,node))
        },
        shootDOMComputerBoard(board, target) {
            const square = document.getElementById("gameGrid2").childNodes[target]
            // If a position is occupied by a ship (Hit!)
            if (board[target] === 3){
                square.style.backgroundColor = "red"; 
            // If a position is not occupied 
            } else if (board[target] === 2){
                square.style.backgroundColor = "white";
            }
        },
        shootDOMPlayerBoard(board, target) {
            const square = document.getElementById("gameGrid1").childNodes[target]
            // If a position is occupied by a ship (Hit!)
            if (board[target] === 3){
                square.style.backgroundColor = "red"; 
            // If a position is not occupied 
            } else if (board[target] === 2){
                square.style.backgroundColor = "white";
            }
        },
        changeDisplay1(text) {
            ele.displayText1.textContent = text;
        },
        changeDisplay2(text) {
            ele.displayText2.textContent = text;
        },
        updateGameIcons(){

        }
    }
}
export default DOMFunction;