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
        refreshBoard(playerBoard,computerBoard) {
            this.DOMBoard1.childNodes.forEach(node => node.style.backgroundColor = colorSquare(playerBoard,node))
            this.DOMBoard2.childNodes.forEach(node => node.style.backgroundColor = colorSquare(computerBoard,node))
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
            console.log(board[target])
            // If a position is occupied by a ship (Hit!)
            if (board[target] === 3){
                square.style.backgroundColor = "red"; 
            // If a position is not occupied 
            } else if (board[target] === 2){
                square.style.backgroundColor = "white";
            }
        }
    }
}







// shootForPlayer(square,player) {
//     const id = square.id;
//     player.playerBoard.recieveAttack(id)
//     console.log(player.playerBoard.attackedPositions)
//     this.refreshBoard(player)
// }



//     function changeDisplay(text) {
//         ele.display.textContent = text;
//     }
//     //Fire random shot for computer
//     function shootForComputer(player,computer) {
//         // let target = Math.floor(Math.random()*100)
//         // while (player.playerBoard.attackedPositions.includes(target)) {
//         //     target = Math.floor(Math.random()*100)
//         // }
//         computer.randomShot(player)
//         renderComputerShot(target,player,ele.p1Board);
        
//         console.log(player.playerBoard.placedShips.forEach(ship => console.log(ship.health)))
//         if (player.playerBoard.allShipsSunk() === true) {
//             changeDisplay("Game over! Computer wins!");
//             console.log("Game over! Computer wins!")
//         } 
//     }
//     function shootForPlayer(square,player,computer) {
//         let target = square.id
//         while (computer.playerBoard.board[target] === 2 || computer.playerBoard.board[target] === 3) {
//             return;
//         }
//         // If a position is occupied by a ship (Hit!)
//         if (computer.playerBoard.board[target] === 1){
//             player.attack(computer,target)
//             square.style.backgroundColor = "red"; 
//         // If a position is not occupied 
//         } else if (computer.playerBoard.board[target] === 0){
//             player.attack(computer,target)
//             square.style.backgroundColor = "white";
//         }
//         // computer.playerBoard.placedShips.forEach(ship => console.log(ship.health))
    
//         //Check if game ended 
//         if (computer.playerBoard.allShipsSunk() === true) {
//             changeDisplay("Game over! Player 1 wins!");
//             console.log("Game over! Player 1 wins!")
//         } else {
//             shootForComputer(player,computer)
//         }
//     }
//     return {
//         renderBoards() {
//             ele.gameBoardContainer.appendChild(ele.p1Board);
//             ele.gameBoardContainer.appendChild(ele.p2Board);
//         },
//         renderShips(array,name) {
//             const grid = document.getElementById(name)
//             for (let i = 0; i < array.length; i++) {
//                 const square = grid.childNodes[i]
//                 if (array[i] === 1) {
//                     square.style.backgroundColor = "blue";
//                 }
//             }
//         },
//         placeShip(player,ship) {
//             ele.p1Board.childNodes.forEach(square => 
//                 square.addEventListener("mouseover", function(){displayShipPlacement(square,ship, player)}));
//             //Shift ship heading
//             document.addEventListener("keydown", keyboard);
//             //For keypress
//             function keyboard(k) {
//                 if (k.key === "Shift") {
//                     ship.changeHeading();
//                 }
//             }
//         },
//         activateBoardForAttacks(player,computer) {
//             ele.p2Board.childNodes.forEach(square => square.addEventListener("click", function(){shootForPlayer(square,player,computer)}));
//         }
//     }
// }
// function displayShipPlacement(square,ship, player) {
//     const parentGrid = square.parentNode;
//     const id = parseInt(square.id)
//     let length = ship.length
//     let heading = ship.heading
//     let lastVertPosition = 100-(10*(length-1))

//     parentGrid.childNodes.forEach(square => square.style.backgroundColor = "grey")
//     if (heading === 'horizontal') {
//         for (let i = 0; i < length; i++) {
//             if (checkPosition(id,length) === true) {
//                 parentGrid.childNodes[id+i].style.backgroundColor= "blue"
//             }
//         }
//     } else {
//         for (let i = 0; i < length; i++) {
//             if (id < lastVertPosition) {
//                 parentGrid.childNodes[id+i*10].style.backgroundColor= "blue"
//             }
//         }
//     }
//     //Place ship on current square
//     square.addEventListener("click", function(){confirmPlacement(player,ship,id)}) 
// }
// function confirmPlacement(player, ship,location) {
//     player.playerBoard.placeShip(ship,location)
// }
// //Check if any siblings are in the next group of "tens"
// function checkPosition(id,length) {
//     let start = id.toString().split('')
//     let end = (id+length-1).toString().split('')
//     if (start[0] === end[0] || id+length-1 < 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// //Check if game ended
// function isGameOver(player,computer) {
//     if (player.playerBoard.allShipsSunk() === true) {
//         console.log('Computer wins! Game Over.')
//         return true; 
//     } else if (computer.playerBoard.allShipsSunk() === true) {
//         console.log('Player 1 wins! Game Over.');
//         return true;
//     } else {
//         return false;
//     }
// }
// //Render DOM shot from computer
// function renderComputerShot(target,player,board) {
//     const boardSpace = board.childNodes[target];
//     const position = parseInt(player.playerBoard.board[target]);
//     // If a position is occupied by a ship (Hit!)
//     if (position === 1){
//         boardSpace.style.backgroundColor = "red"; 
//     // If a position is not occupied 
//     } else if (position === 0){
//         boardSpace.style.backgroundColor = "white"; 
//     }
// }

export default DOMFunction;