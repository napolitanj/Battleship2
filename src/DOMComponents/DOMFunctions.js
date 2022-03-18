import element from "./elements.js"


const DOMFunction = () => {
    const ele = element()
    return {
        renderBoards() {
            ele.gameBoardContainer.appendChild(ele.p1Board);
            ele.gameBoardContainer.appendChild(ele.p2Board);
        },
        changeDisplay(text) {
            ele.display.textContent = text;
        },
        renderShips(array,name) {
            const grid = document.getElementById(name)
            for (let i = 0; i < array.length; i++) {
                const square = grid.childNodes[i]
                if (array[i] === 1) {
                    square.style.backgroundColor = "blue";
                }
            }
        },
        placeShip(player,ship) {
            ele.p1Board.childNodes.forEach(square => 
                square.addEventListener("mouseover", function(){displayShipPlacement(square,ship, player)}));
            //Shift ship heading
            document.addEventListener("keydown", keyboard);
            //For keypress
            function keyboard(k) {
                if (k.key === "Shift") {
                    ship.changeHeading();
                }
            }
        },
        acceptPlayerShots(player,computer) {
            ele.p2Board.childNodes.forEach(square => square.addEventListener("click", function(){playerDOMShot(square)}));
            
            //player.attack(computer,square.id)}))
            function playerDOMShot(square) {
                const position = computer.playerBoard.board[square.id];
                console.log(position)
                // If a position has already been shot or is occupied by a hit ship
                if (position === 2 || position === 3) {
                    return;
                // If a position is occupied by a ship (Hit!)
                } else if (position === 1){
                    player.attack(computer,square.id)
                    square.style.backgroundColor = "red"; 
                // If a position is not occupied 
                } else if (position === 0){
                    player.attack(computer,square.id)
                    square.style.backgroundColor = "white"; 
                }
            }
        }
    }
}

function displayShipPlacement(square,ship, player) {
    const parentGrid = square.parentNode;
    const id = parseInt(square.id)
    let length = ship.length
    let heading = ship.heading
    let lastVertPosition = 100-(10*(length-1))

    parentGrid.childNodes.forEach(square => square.style.backgroundColor = "grey")
    if (heading === 'horizontal') {
        for (let i = 0; i < length; i++) {
            if (checkPosition(id,length) === true) {
                parentGrid.childNodes[id+i].style.backgroundColor= "blue"
            }
        }
    } else {
        for (let i = 0; i < length; i++) {
            if (id < lastVertPosition) {
                parentGrid.childNodes[id+i*10].style.backgroundColor= "blue"
            }
        }
    }
    //Place ship on current square
    square.addEventListener("click", function(){confirmPlacement(player,ship,id)}) 
}

function confirmPlacement(player, ship,location) {
    player.playerBoard.placeShip(ship,location)
}

//Check if any siblings are in the next group of "tens"
function checkPosition(id,length) {
    let start = id.toString().split('')
    let end = (id+length-1).toString().split('')
    if (start[0] === end[0] || id+length-1 < 10) {
        return true;
    } else {
        return false;
    }
}


export default DOMFunction;